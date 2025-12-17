import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const LoginForm = ({ onLoginSuccess }) => {
    const [identifier, setIdentifier] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!identifier) return;

        setIsLoading(true);
        // Mock API call
        setTimeout(() => {
            setIsLoading(false);
            onLoginSuccess(identifier);
        }, 1000);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    };

    const headerStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: 'var(--primary-color)',
        marginBottom: '8px'
    };

    const subHeaderStyle = {
        fontSize: '16px',
        color: '#666',
        marginBottom: '32px',
        display: 'none' // Hidden in design, but good for accessibility
    };

    const signUpContainerStyle = {
        border: '1px dashed #e0e0e0',
        borderRadius: '12px',
        padding: '16px',
        textAlign: 'center',
        marginTop: '32px',
        color: '#888',
        fontSize: '14px'
    };

    const linkStyle = {
        color: 'var(--primary-color)',
        fontWeight: '600',
        textDecoration: 'none',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <div>
                <h2 style={headerStyle}>Login to your Productr Account</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <Input
                    label="Email or Phone number"
                    name="identifier"
                    placeholder="Acme@gmail.com"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                />

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </Button>
            </form>

            <div style={signUpContainerStyle}>
                Don't have a Productr Account? <br />
                <a href="#" style={linkStyle}>SignUp Here</a>
            </div>
        </div>
    );
};

export default LoginForm;
