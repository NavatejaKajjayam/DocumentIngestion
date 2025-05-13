import React,{useState} from 'react';

export default function DocumentUI() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChane = ()=>{
        if(!file){return;}

        const formData = new FormData();
        formData.append('file', file);
        console.log("Uploading file name:", file.name);
    };

    return (
      <div className="flex flex-col items-center p-6">
          <header className="bg-background">Document UI</header>
          <div className="flex flex-row items-center">
              <label>Choose File:</label>
              <textarea>{file?.name}</textarea>
              <input type="file" id="selectedfile" onChange={(e)=>{setFile(e.target.files?.[0]??null)}}/>
          </div>
          <button onClick={()=>handleFileChane()}>Upload</button>
      </div>
    );
}