import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, name, error, ...props }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '20px',
        width: '100%',
        textAlign: 'left'
    };

    const labelStyle = {
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--text-dark)'
    };

    const inputStyle = {
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${error ? 'var(--error-color)' : 'var(--border-color)'}`,
        fontSize: '16px',
        width: '100%',
        outline: 'none',
        transition: 'border-color 0.2s ease'
    };

    return (
        <div style={containerStyle}>
            {label && <label htmlFor={name} style={labelStyle}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={inputStyle}
                onFocus={(e) => !error && (e.target.style.borderColor = 'var(--primary-color)')}
                onBlur={(e) => !error && (e.target.style.borderColor = 'var(--border-color)')}
                {...props}
            />
            {error && <span style={{ color: 'var(--error-color)', fontSize: '12px' }}>{error}</span>}
        </div>
    );
};

export default Input;
