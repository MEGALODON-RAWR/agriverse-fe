import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import UploadImage from "../UploadImage";
import { useState } from "react";

export default function PhotoProfile({ user }) {
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState(user?.image);

  const handleImage = (image) => {
    console.log(image);
    if(image){
      setImage(image);
    }
  }

  return (
    <>
      <Image src={image} alt="logo" width={150} height={150} />
      <p
        className="p-semibold fs-30 text-center"
        style={{
          marginTop: "20px",
        }}
      >
        {user?.name} <br />
        {user?.email}
      </p>

      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2}>
          {edit ? (
            <Button
              onClick={() => setEdit(!edit)}
              colorScheme="red"
              style={{
                marginTop: "20px",
              }}
            >
              Edit Foto Profile
            </Button>
          ) : (
            <UploadImage setEdit={setEdit} handleImage={handleImage}/>
          )}
        </GridItem>
      </Grid>
    </>
  );
}
