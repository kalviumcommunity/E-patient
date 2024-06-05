
import { useState, useEffect } from "react";
import {ref,uploadBytes} from "firebase/storage";
import { storage } from "./Config";
import { v4 } from "uuid";

function UploadFile(){
    const [imageUpload, setImageUpload] = useState(null);

    const imagesListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef,imageUpload).then(()=>{
        alert("Uploaded Successfully")
    })

}


    return(
        <div>
         <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
         <button onClick={uploadImage}>Upload</button>
        </div>
    )
}
export default UploadFile;