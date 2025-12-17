import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', ...props }) => {
    const styles = {
        backgroundColor: 'var(--primary-color)',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: 'var(--radius-md)',
        width: '100%',
        fontWeight: '600',
        fontSize: '16px',
        transition: 'opacity 0.2s ease',
        ...props.style
    };

    return (
        <button
            type={type}
            onClick={onClick}
            style={styles}
            className={className}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
