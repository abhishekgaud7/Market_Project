import React, { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import EmptyState from '../ui/EmptyState';
import AddProductModal from './AddProductModal';
import DeleteModal from './DeleteModal';
import ProductCard from './ProductCard';
import Button from '../ui/Button';

const ProductsPage = () => {
    // Initialize from LocalStorage or use default mock data
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            return JSON.parse(savedProducts);
        }
        return [
            { id: 1, name: 'CakeZone Walnut Brownie', type: 'Food', stock: 200, mrp: 2000, sellingPrice: 2000, brand: 'CakeZone', returnEligible: 'Yes', isPublished: true },
            { id: 2, name: 'CakeZone Choco Fudge Brownie', type: 'Food', stock: 200, mrp: 23, sellingPrice: 80, brand: 'CakeZone', returnEligible: 'Yes', isPublished: true },
            { id: 3, name: 'Theobroma Christmas Cake', type: 'Food', stock: 200, mrp: 23, sellingPrice: 80, brand: 'CakeZone', returnEligible: 'Yes', isPublished: true }
        ];
    });

    // Save to LocalStorage whenever products change
    React.useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const [activeTab, setActiveTab] = useState('Published');
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const displayedProducts = products.filter(p =>
        activeTab === 'Published' ? p.isPublished : !p.isPublished
    );

    const handleOpenAdd = () => {
        setEditingProduct(null);
        setIsFormModalOpen(true);
    };

    const handleOpenEdit = (product) => {
        setEditingProduct(product);
        setIsFormModalOpen(true);
    };

    const handleSaveProduct = (productData) => {
        if (editingProduct) {
            setProducts(prev => prev.map(p =>
                p.id === editingProduct.id ? { ...p, ...productData } : p
            ));
        } else {
            setProducts(prev => [...prev, {
                ...productData,
                id: Date.now(),
                isPublished: activeTab === 'Published'
            }]);
        }
    };

    const handleOpenDelete = (product) => {
        setProductToDelete(product);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (productToDelete) {
            setProducts(prev => prev.filter(p => p.id !== productToDelete.id));
            setDeleteModalOpen(false);
            setProductToDelete(null);
        }
    };

    const handleTogglePublish = (productId) => {
        setProducts(prev => prev.map(p =>
            p.id === productId ? { ...p, isPublished: !p.isPublished } : p
        ));
    };


    const tabsContainerStyle = {
        display: 'flex',
        gap: '24px',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '24px'
    };

    const getTabStyle = (tabName) => ({
        padding: '12px 0',
        cursor: 'pointer',
        fontWeight: '500',
        color: activeTab === tabName ? 'var(--primary-color)' : '#888',
        borderBottom: activeTab === tabName ? '2px solid var(--primary-color)' : '2px solid transparent',
        transition: 'all 0.2s'
    });

    const headerActionsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
    };

    // Style specifically for the "+ Add Products" link shown in the screenshot
    const addProductLinkStyle = {
        fontSize: '16px',
        color: '#444',
        cursor: 'pointer',
        fontWeight: '500',
        background: 'none',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
    };

    const contentStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        padding: displayedProducts.length > 0 ? '24px' : '0'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
    };

    const hasContent = displayedProducts.length > 0;

    return (
        <DashboardLayout>
            <div style={headerActionsStyle}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Products</h2>
                {hasContent && (
                    <button onClick={handleOpenAdd} style={addProductLinkStyle}>
                        <span style={{ fontSize: '20px' }}>+</span> Add Products
                    </button>
                )}
            </div>

            <div style={tabsContainerStyle}>
                <div style={getTabStyle('Published')} onClick={() => setActiveTab('Published')}>Published</div>
                <div style={getTabStyle('Unpublished')} onClick={() => setActiveTab('Unpublished')}>Unpublished</div>
            </div>

            <div style={hasContent ? { ...contentStyle, backgroundColor: 'transparent', boxShadow: 'none' } : contentStyle}>
                {!hasContent ? (
                    <EmptyState
                        icon="⊞"
                        title={activeTab === 'Published' ? "No Published Products" : "No Unpublished Products"}
                        description={activeTab === 'Published' ? "Your Published Products will appear here\nCreate your first product to publish" : "You have no unpublished drafts."}
                        actionLabel={activeTab === 'Published' ? "Add your Products" : null}
                        onAction={handleOpenAdd}
                    />
                ) : (
                    <div style={gridStyle}>
                        {displayedProducts.map(p => (
                            <ProductCard
                                key={p.id}
                                product={p}
                                isPublished={p.isPublished}
                                onEdit={handleOpenEdit}
                                onDelete={handleOpenDelete}
                                onTogglePublish={handleTogglePublish}
                            />
                        ))}
                    </div>
                )}
            </div>

            <AddProductModal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                onSave={handleSaveProduct}
                initialData={editingProduct}
            />

            <DeleteModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                productName={productToDelete?.name}
            />
        </DashboardLayout>
    );
};

export default ProductsPage;
