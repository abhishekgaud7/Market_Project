import React from 'react';

const AuthLayout = ({ children }) => {
    const layoutStyle = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
    };

    const leftPaneStyle = {
        flex: '1',
        maxWidth: '50%',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'var(--bg-light)', // Fallback
        backgroundImage: 'linear-gradient(135deg, #f0f4ff 0%, #e8eaff 100%)', // Subtle gradient
        justifyContent: 'center',
        alignItems: 'center'
    };

    // Styles to replicate the "Productr" card look from the screenshot conceptually
    // Since we don't have the assets, we'll create a nice CSS-only approximation for the card
    const cardStyle = {
        width: '320px',
        height: '500px',
        borderRadius: '40px',
        background: 'linear-gradient(180deg, #ff9a44 0%, #fc6076 100%)', // Orange/Sunset gradient
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
    };

    const logoStyle = {
        position: 'absolute',
        top: '40px',
        left: '40px',
        fontSize: '24px',
        fontWeight: '800',
        color: 'var(--primary-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };

    const heroTextStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
    };

    // Placeholder logic for the runner image
    const runnerPlaceholderStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '80px',
        opacity: '0.5'
    };


    const rightPaneStyle = {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
    };

    const contentBoxStyle = {
        width: '100%',
        maxWidth: '480px'
    };

    return (
        <div style={layoutStyle}>
            <div style={leftPaneStyle} className="hidden-mobile">
                <div style={logoStyle}>
                    Productr <span style={{ color: '#ff6b6b' }}>∞</span>
                </div>

                <div style={cardStyle}>
                    <div style={runnerPlaceholderStyle}>🏃</div>
                    <div style={heroTextStyle}>
                        Uplist your <br /> product to market
                    </div>
                </div>

                {/* Abstract background shapes could go here if we had time to draw SVG blobs */}
            </div>

            <div style={rightPaneStyle}>
                <div style={contentBoxStyle}>
                    {children}
                </div>
            </div>

            {/* Mobile-hiding logic would usually go in a media query CSS file, 
          but for now we assume desktop first as per screenshots */}
        </div>
    );
};

export default AuthLayout;
