import { Button, Input } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const UploadImage = ({handleImage, setEdit}) => {
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState(null);
  const { data: session } = useSession();
  
 
  const onFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
  };

  const onClick = (e) => {
    e.currentTarget.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    const base64 = await toBase64(file);

    setBase64(base64);

    const response = await fetch("https://agriverse-be.pegelinux.my.id/api/v1/user/profile-image", {
      method: "PUT",
      body: JSON.stringify({ 
        image: base64,
       }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${session?.accessToken}`,
      },
    });

    const data = await response.json();
    if (data.code === 200) {
        handleImage(data.data.image);
        setEdit(true);
        }


    setFile(null);
    setBase64(null);
  };

  return (
    <>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        {!file ? (
            <><input
            className="inputfile"
              type="file"
                id="avatar"
              name="avatar"
              accept="image/*"
              style={{
                width: "0.1px",
                height: "0.1px",
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                zIndex: -1,
              }}
              onChange={onFileChange}
              onClick={onClick}
            />
            <label for="avatar">Pilih Foto</label>
            </>
            )
           : (
            <>
            <Button type="submit" colorScheme="red" style={{ marginTop: "20px" }}>
                Upload Foto
            </Button>
            </>
            )}

        <br />
        <br />
      </form>
    </>
  );
};

const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export default UploadImage;