import React, { useState } from 'react';
import AuthLayout from './components/layout/AuthLayout';
import LoginForm from './components/auth/LoginForm';
import OTPForm from './components/auth/OTPForm';
import ProductsPage from './components/dashboard/ProductsPage';

function App() {
  const [step, setStep] = useState('LOGIN'); // 'LOGIN' | 'OTP' | 'DASHBOARD'
  const [userIdentifier, setUserIdentifier] = useState('');

  const handleLoginSuccess = (identifier) => {
    setUserIdentifier(identifier);
    setStep('OTP');
  };

  const handleOtpVerify = (otp) => {
    // In a real app, verify and get token
    setStep('DASHBOARD');
  };

  const handleResend = () => {
    alert('OTP Resent! (Check console)');
  };

  // Render Dashboard
  if (step === 'DASHBOARD') {
    return <ProductsPage />;
  }

  // Render Auth Flow
  return (
    <AuthLayout>
      {step === 'LOGIN' && (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}

      {step === 'OTP' && (
        <OTPForm
          onOtpVerify={handleOtpVerify}
          onResend={handleResend}
        />
      )}
    </AuthLayout>
  );
}

export default App;
