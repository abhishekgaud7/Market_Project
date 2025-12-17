import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';

const AddProductModal = ({ isOpen, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        stock: '',
        mrp: '',
        sellingPrice: '',
        brand: '',
        returnEligible: 'Yes'
    });

    const [errors, setErrors] = useState({});

    // Reset or pre-fill form when modal opens
    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setFormData(initialData);
            } else {
                setFormData({
                    name: '',
                    type: '',
                    stock: '',
                    mrp: '',
                    sellingPrice: '',
                    brand: '',
                    returnEligible: 'Yes'
                });
            }
            setErrors({});
        }
    }, [isOpen, initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Please enter product name';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSave(formData);
        onClose();
    };

    const formSectionStyle = {
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    };

    const selectStyle = {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '4px',
        border: '1px solid #e0e0e0',
        fontSize: '16px',
        color: '#1e1e1e',
        outline: 'none',
        marginBottom: '20px'
    };

    const labelStyle = {
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--text-dark)',
        marginBottom: '8px',
        display: 'block'
    };

    const uploadBoxStyle = {
        border: '1px dashed #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        marginBottom: '20px'
    };

    const isEditMode = !!initialData;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isEditMode ? "Edit Product" : "Add Product"}>
            <form onSubmit={handleSubmit}>
                <div style={formSectionStyle}>

                    <Input
                        label="Product Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="CakeZone Walnut Brownie"
                        error={errors.name}
                    />

                    <div>
                        <label style={labelStyle}>Product Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            style={selectStyle}
                        >
                            <option value="">Select product type</option>
                            <option value="Foods">Foods</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>

                    <Input
                        label="Quantity Stock"
                        name="stock"
                        type="number"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="Total numbers of Stock available"
                    />

                    <Input
                        label="MRP"
                        name="mrp"
                        type="number"
                        value={formData.mrp}
                        onChange={handleChange}
                        placeholder="Total numbers of Stock available"
                    />

                    <Input
                        label="Selling Price"
                        name="sellingPrice"
                        type="number"
                        value={formData.sellingPrice}
                        onChange={handleChange}
                        placeholder="Total numbers of Stock available"
                    />

                    <Input
                        label="Brand Name"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Total numbers of Stock available"
                    />

                    <div>
                        <label style={labelStyle}>Upload Product Images</label>
                        <div style={uploadBoxStyle}>
                            {isEditMode ? 'Add More Photos' : 'Enter Description'} <br />
                            <strong>Browse</strong>
                        </div>
                    </div>

                    <div>
                        <label style={labelStyle}>Exchange or return eligibility</label>
                        <select
                            name="returnEligible"
                            value={formData.returnEligible}
                            onChange={handleChange}
                            style={selectStyle}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                </div>

                <div style={{ padding: '0 24px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'inline-block', width: '120px' }}>
                        <Button type="submit">{isEditMode ? "Update" : "Create"}</Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default AddProductModal;
