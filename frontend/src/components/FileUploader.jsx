
import React, { useState } from 'react';
import '../styles.css';

export default function FileUploader({ onFileUpload, onJsonDownload }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleUpload = () => {
        if (!file) {
            setError('Please select a file before converting!');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        fetch('http://localhost:5000/api/excel/upload', {
            method: 'POST',
            body: formData,
        }).then(res => {
            if (!res.ok) {
                throw new Error('Failed to convert Excel to JSON. Please try again.');
            }
            return res.json();
        }).then(data => {
            setError(null);
            onFileUpload(data);
        }).catch(err => {
            setError(err.message);
        });
    };

    const handleJsonDownload = () => {
        if (!file) {
            setError('No JSON data available to convert!');
            return;
        }
        fetch('http://localhost:5000/api/json/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ json: file })
        }).then(res => {
            if (!res.ok) {
                throw new Error('Failed to convert JSON to Excel. Please try again.');
            }
            return res.blob();
        }).then(blob => {
            setError(null);
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data.xlsx');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }).catch(err => {
            setError(err.message);
        });
    };

    return (
        <div className="uploader-container">
            <input type="file" className="file-input" onChange={(e) => setFile(e.target.files[0])} />
            <div className="button-group">
                <button className="upload-btn" onClick={handleUpload}>Convert Excel to JSON</button>
                <button className="download-btn" onClick={handleJsonDownload}>Convert JSON to Excel</button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}