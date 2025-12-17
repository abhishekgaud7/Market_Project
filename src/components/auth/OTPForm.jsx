import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';

const OTPForm = ({ onOtpVerify, onResend }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(20);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inputRefs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index, value) => {
        // Only allow numbers
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1); // Only verify last char
        setOtp(newOtp);
        setError(''); // Clear error on change

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace to focus previous
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        const otpString = otp.join('');
        if (otpString.length < 6) {
            setError('Please enter a complete OTP');
            return;
        }

        setIsLoading(true);
        // Mock API call simulation
        setTimeout(() => {
            setIsLoading(false);
            // Simple mock validation
            if (otpString === '123456') {
                onOtpVerify(otpString);
            } else {
                setError('Please enter a valid OTP');
            }
        }, 1000);
    };

    const handleResendClick = () => {
        if (timer === 0) {
            setTimer(20);
            setOtp(['', '', '', '', '', '']);
            setError('');
            onResend();
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: '700',
        color: 'var(--primary-color)',
        marginBottom: '8px'
    };

    const inputsContainerStyle = {
        display: 'flex',
        gap: '12px',
        marginBottom: '8px',
        marginTop: '16px'
    };

    const inputStyle = {
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        border: `1px solid ${error ? 'var(--error-color)' : '#e0e0e0'}`,
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '600',
        outline: 'none',
        color: 'var(--text-dark)'
    };

    // Helper to highlight border on focus
    const handleFocus = (e) => {
        if (!error) e.target.style.borderColor = 'var(--primary-color)';
    };
    const handleBlur = (e) => {
        if (!error) e.target.style.borderColor = '#e0e0e0';
    };

    const errorStyle = {
        color: 'var(--error-color)',
        fontSize: '14px',
        marginTop: '8px'
    };

    const resendStyle = {
        fontSize: '14px',
        color: timer > 0 ? '#888' : 'var(--primary-color)',
        textAlign: 'center',
        marginTop: '16px',
        cursor: timer > 0 ? 'default' : 'pointer',
        fontWeight: timer > 0 ? '400' : '600'
    };

    return (
        <div style={containerStyle}>
            <div>
                <h2 style={headerStyle}>Login to your Productr Account</h2>
            </div>

            <div>
                <label style={{ fontSize: '14px', fontWeight: '500' }}>Enter OTP</label>
                <div style={inputsContainerStyle}>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={inputStyle}
                        />
                    ))}
                </div>
                {error && <div style={errorStyle}>{error}</div>}
            </div>

            <Button onClick={handleVerify} disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Enter your OTP'}
            </Button>

            <div style={resendStyle} onClick={handleResendClick}>
                {timer > 0 ? `Didnt receive OTP ? Resend in ${timer}s` : 'Didnt receive OTP ? Resend'}
            </div>
        </div>
    );
};

export default OTPForm;
