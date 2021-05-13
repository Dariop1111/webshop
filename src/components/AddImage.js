import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function AddImage({getUrl}) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowedTypes = ["image/png", "image/jpeg"];

    const handleChange=(e)=>{
        let selected = e.target.files[0];
        if(selected && allowedTypes.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else {
            setFile(null);
            setError("Please select an image file(png or jpeg)");
        }
    }


    return (
        <div>
            <div>
                <label className="add-item-label" htmlFor="img">Item Image</label>
                <div><input 
                    className="add-item-input-text"
                    type="file" 
                    name="img" 
                    id="img"
                    onChange={handleChange}></input></div>
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file-name">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} getUrl={getUrl}/>}
            </div>
            
        </div>
    )
}

export default AddImage
