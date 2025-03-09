
import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ResultDisplay from './components/ResultDisplay';
import './styles.css';

function App() {
    const [data, setData] = useState(null);
    return (
        <div className="app-container">
            <h1>Smart Excel {'<>'} JSON Parser</h1>
            <FileUploader onFileUpload={setData} onJsonDownload={() => setData(data)} />
            {data && <ResultDisplay data={data} />}
        </div>
    );
}

export default App;