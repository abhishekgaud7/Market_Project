import React from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const DeleteModal = ({ isOpen, onClose, onConfirm, productName }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Delete Product">
            <div style={{ padding: '24px' }}>
                <p style={{ fontSize: '16px', color: '#1e1e1e', marginBottom: '8px', fontWeight: 'bold' }}>
                    Delete Product
                </p>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>
                    Are you sure you really want to delete this Product <br />
                    "{productName}" ?
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                    <div style={{ width: '120px' }}>
                        <Button
                            onClick={onConfirm}
                            style={{ backgroundColor: '#0B105C' }} // Keeping primary blue as per screenshot (or arguably red?)
                        // Screenshot uses blue for "Delete" button surprisingly
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteModal;
