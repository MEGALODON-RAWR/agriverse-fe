import { Button, Container, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import PhotoProfile from "./profile/PhotoProfile";
import PengaturanAkun from "./profile/PengaturanAkun";
import AkunDanKeamanan from "./profile/AkunDanKemanan";

export default function CardProfile() {
  return (
    <Container
      maxW={"90%"}
      maxH={"90%"}
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        background: "white",
        borderRadius: "70px",
        padding: "50px",
      }}
    >
      <Grid
        h="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhotoProfile />
          <PengaturanAkun />
        </GridItem>
        <GridItem colSpan={3} bg={"red"}>
          <AkunDanKeamanan />
        </GridItem>
      </Grid>
    </Container>
  );
}
