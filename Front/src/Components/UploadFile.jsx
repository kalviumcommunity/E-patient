import React, { useState, useEffect } from "react";
import { uploadBytes, ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./Config";
import { v4 } from "uuid";


function UploadFile() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "Group/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `Group/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((data) => {
      getDownloadURL(data.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="upload-container">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload Image</button>
      {imageUrls.map((url) => {
        return <img key={url} src={url} alt="uploaded" className="uploaded-img" />;
      })}
    </div>
  );
}

export default UploadFile;

