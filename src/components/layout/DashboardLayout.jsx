import React, { useState } from 'react';

const DashboardLayout = ({ children, title = 'Home' }) => {
    const [activeItem, setActiveItem] = useState('Products'); // Default to Products for this demo

    // Styles
    const layoutStyle = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        fontFamily: 'var(--font-family)'
    };

    const sidebarStyle = {
        width: '260px',
        backgroundColor: '#1E212A', // Dark sidebar
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
        flexShrink: 0
    };

    const logoStyle = {
        padding: '0 24px',
        marginBottom: '32px',
        fontSize: '20px',
        fontWeight: '800',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#ffffff'
    };

    const searchContainerStyle = {
        padding: '0 24px',
        marginBottom: '24px'
    };

    const searchInputStyle = {
        width: '100%',
        padding: '10px 12px',
        backgroundColor: 'rgba(255,255,255,0.05)', // Translucent dark
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '14px',
        outline: 'none'
    };

    const navListStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '0 12px'
    };

    const getNavItemStyle = (isActive) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
        color: isActive ? '#fff' : '#aaa',
        fontSize: '14px',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'all 0.2s ease'
    });

    const mainContentStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8F9FE' // Light gray bg for content area
    };

    const headerStyle = {
        height: '64px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px'
    };

    const breadcrumbStyle = {
        fontSize: '16px',
        fontWeight: '500',
        color: '#1e1e1e',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };

    const contentAreaStyle = {
        flex: 1,
        padding: '32px',
        overflowY: 'auto'
    };

    return (
        <div style={layoutStyle}>
            {/* Sidebar */}
            <div style={sidebarStyle} className="sidebar">
                <div style={logoStyle}>
                    Productr <span style={{ color: '#ff6b6b' }}>∞</span>
                </div>

                <div style={searchContainerStyle}>
                    <input
                        type="text"
                        placeholder="Search"
                        style={searchInputStyle}
                    />
                </div>

                <div style={navListStyle}>
                    <div
                        style={getNavItemStyle(activeItem === 'Home')}
                        onClick={() => setActiveItem('Home')}
                    >
                        <span>🏠</span> Home
                    </div>
                    <div
                        style={getNavItemStyle(activeItem === 'Products')}
                        onClick={() => setActiveItem('Products')}
                    >
                        <span>🛍️</span> Products
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={mainContentStyle}>
                {/* Header */}
                <div style={headerStyle}>
                    <div style={breadcrumbStyle}>
                        {activeItem === 'Products' && <span style={{ color: '#888' }}>Products</span>}
                        {activeItem === 'Home' && <span>Home</span>}
                    </div>

                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <span style={{ color: '#888', fontSize: '14px' }}>Search Services, Products</span>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ddd' }}>
                            {/* Avatar placeholder */}
                            <img src="https://via.placeholder.com/32" alt="Profile" style={{ borderRadius: '50%' }} />
                        </div>
                    </div>
                </div>

                {/* Dynamic Page Content */}
                <div style={contentAreaStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
