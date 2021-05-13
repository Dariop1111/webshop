import React, { useEffect } from 'react'
import UseStorage from '../hooks/UseStorage'

function ProgressBar({file, setFile, getUrl}) {

    const {progress, url} = UseStorage(file)
    
    useEffect(()=>{
        if(url){
            
            getUrl(url);
            setFile(null);
            
        }
        // eslint-disable-next-line
    },[url, setFile])
    return (
        <div className="progress-bar" style={{width: progress+ "%"}} ></div>
    )
}

export default ProgressBar
