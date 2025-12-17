import React from 'react';
import Button from './Button';

const EmptyState = ({ icon, title, description, actionLabel, onAction }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '40px',
        color: '#1e1e1e'
    };

    const iconStyle = {
        fontSize: '48px',
        marginBottom: '24px',
        color: 'var(--primary-color)'
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: '700',
        marginBottom: '8px'
    };

    const descStyle = {
        fontSize: '14px',
        color: '#666',
        maxWidth: '300px',
        marginBottom: '32px',
        lineHeight: '1.5'
    };

    return (
        <div style={containerStyle}>
            <div style={iconStyle}>{icon || '⊞'}</div>
            <h3 style={titleStyle}>{title}</h3>
            <p style={descStyle}>{description}</p>
            {actionLabel && (
                <div style={{ width: '200px' }}>
                    <Button onClick={onAction}>{actionLabel}</Button>
                </div>
            )}
        </div>
    );
};

export default EmptyState;
