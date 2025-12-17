import React from 'react';

const ProductCard = ({ product, onEdit, onDelete, onTogglePublish, isPublished }) => {
    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        border: '1px solid #f0f0f0'
    };

    const imageContainerStyle = {
        height: '180px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8px',
        overflow: 'hidden'
    };

    const imgStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
    };

    const titleStyle = {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1e1e1e',
        marginBottom: '16px'
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '13px',
        color: '#666',
        marginBottom: '8px'
    };

    const valueStyle = {
        color: '#1e1e1e',
        fontWeight: '500'
    };

    const actionsStyle = {
        display: 'flex',
        gap: '12px',
        marginTop: 'auto',
        alignItems: 'center'
    };

    const btnBaseStyle = {
        flex: 1,
        padding: '10px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'opacity 0.2s'
    };

    const publishBtnStyle = {
        ...btnBaseStyle,
        backgroundColor: isPublished ? 'var(--success-color)' : 'var(--primary-color)',
        color: '#fff'
    };

    const editBtnStyle = {
        ...btnBaseStyle,
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        color: '#1e1e1e'
    };

    const iconBtnStyle = {
        ...btnBaseStyle,
        flex: '0 0 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        color: '#888'
    };

    // Safe defaults
    const {
        name = 'Unknown Product',
        type = '-',
        stock = 0,
        mrp = 0,
        sellingPrice = 0,
        brand = '-',
        returnEligible = 'No'
    } = product;

    return (
        <div style={cardStyle}>
            <div style={imageContainerStyle}>
                {/* Mock image logic to match screenshot vibe if names match */}
                <img src={name.includes('Brownie') ? "https://placehold.co/200x200/5C3626/FFF?text=Brownie" : "https://placehold.co/200x200/png?text=Product"} alt={name} style={imgStyle} />
            </div>

            <div style={titleStyle}>{name}</div>

            <div>
                <div style={rowStyle}>
                    <span>Product type -</span>
                    <span style={valueStyle}>{type}</span>
                </div>
                <div style={rowStyle}>
                    <span>Quantity Stock -</span>
                    <span style={valueStyle}>{stock}</span>
                </div>
                <div style={rowStyle}>
                    <span>MRP -</span>
                    <span style={valueStyle}>₹ {mrp}</span>
                </div>
                <div style={rowStyle}>
                    <span>Selling Price -</span>
                    <span style={valueStyle}>₹ {sellingPrice}</span>
                </div>
                <div style={rowStyle}>
                    <span>Brand Name -</span>
                    <span style={valueStyle}>{brand}</span>
                </div>
                <div style={rowStyle}>
                    <span>Total Number of images -</span>
                    <span style={valueStyle}>5</span>
                </div>
                <div style={rowStyle}>
                    <span>Exchange Eligibility -</span>
                    <span style={valueStyle}>{returnEligible === 'Yes' ? 'YES' : 'NO'}</span>
                </div>
            </div>

            <div style={actionsStyle}>
                <button
                    style={publishBtnStyle}
                    onClick={() => onTogglePublish(product.id)}
                >
                    {isPublished ? 'Unpublish' : 'Publish'}
                </button>

                <button
                    style={editBtnStyle}
                    onClick={() => onEdit(product)}
                >
                    Edit
                </button>

                <button
                    style={iconBtnStyle}
                    onClick={() => onDelete(product)}
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
