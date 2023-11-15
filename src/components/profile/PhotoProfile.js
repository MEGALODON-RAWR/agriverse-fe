import { Button, Grid, GridItem, Image } from "@chakra-ui/react";

export default function PhotoProfile() {
  return (
    <>
      <Image
        src="https://agriverse-be.pegelinux.my.id/storage/image/profile/default.png"
        alt="logo"
        width={100}
        height={100}
      />
      <p
        style={{
          marginTop: "20px",
        }}
      >
        Username
      </p>

      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <Button
            colorScheme="red"
            style={{
              marginTop: "20px",
            }}
          >
            Edit Profile
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            colorScheme="red"
            style={{
              marginTop: "20px",
            }}
          >
            Edit Profile
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}
