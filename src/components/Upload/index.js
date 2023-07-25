import { Modal, Upload } from 'antd';
import React, { useState } from 'react';

function CustomUpload({ children, onChange, fileList }) {
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    return (
        <>
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" onPreview={handlePreview} onChange={onChange} fileList={fileList} listType="picture-card">
                {children}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%'
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
}

export default CustomUpload;
