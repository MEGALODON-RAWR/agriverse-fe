import { Button, Container, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import PhotoProfile from "./profile/PhotoProfile";
import PengaturanAkun from "./profile/PengaturanAkun";
import AkunDanKeamanan from "./profile/AkunDanKeamanan";
import { useState } from "react";
import AlamatSaya from "./profile/AlamatSaya";
import KartuRekeningBank from "./profile/KartuRekeningBank";

export default function CardProfile({user}) {

  const [activeComponent, setActiveComponent] = useState("AkunDanKeamanan");
  console.log(activeComponent);

  const changeComponent = (component) => {
    setActiveComponent(component);
  }
  

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
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={1}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhotoProfile user={user}/>
          <PengaturanAkun changeComponent={changeComponent}/>
        </GridItem>
        <GridItem colSpan={2} bg={"white"}>
          {activeComponent === "AkunDanKeamanan" && <AkunDanKeamanan user={user}/>}
          {activeComponent === "AlamatSaya" && <AlamatSaya />}
          {activeComponent === "KartuRekeningBank" && <KartuRekeningBank />}
        </GridItem>
      </Grid>
    </Container>
  );
}
