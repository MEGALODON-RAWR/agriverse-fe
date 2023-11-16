import { Box, Container } from "@chakra-ui/react";
import { use, useEffect, useState } from "react";

const AkunSayaLink = [
  { name: "Akun dan Keamanan", component: "AkunDanKeamanan" },
  { name: "Alamat Saya", component: "AlamatSaya" },
  { name: "Kartu / Rekening Bank", component: "KartuRekeningBank" },
];

const PengaturanLink = [
  { name: "Pengaturan Chat", component: "PengaturanChat" },
  { name: "Pengaturan Notifikasi", component: "PengaturanNotifikasi" },
  { name: "Bahasa / Language", component: "Bahasa" },
  { name: "Pusat Bantuan", component: "PusatBantuan" },
];

const DaftarLink = [
  { name: "Agen", component: "DaftarAgen" },
  { name: "Penyuluh", component: "DaftarPenyuluh" },
];


const NavPengaturanAkun = (props) => {
  const { children, isActive, setActiveLink, component } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
        borderBottom: "3px solid black",
      }}
      href="#"
      fontWeight={isActive ? "bold" : "normal"}
      onClick={() => setActiveLink(component)}
      marginBottom={"10px"}
      style={{
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        lineHeight: "normal",
        flexShrink: 0,
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      {children}
    </Box>
  );
};

export default function PengaturanAkun({ changeComponent }) {

  const [activeLink, setActiveLink] = useState("AkunDanKeamanan");

  useEffect(() => {
    changeComponent(activeLink);
  }, [activeLink]);


  return (
    <Container
      maxW={"486px"}
      maxH={"957px"}
      style={{
        borderRadius: "10px",
        border: "5px solid #4E7031",
        background: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "cneter",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <p
        style={{
          color: "#000",
          fontFamily: "Poppins",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          margin: "auto",
          marginTop: "20px",
          
        }}
      >
        Pengaturan Akun
      </p>
      <p
        style={{
          minWidth: "100%",
          padding: "10px",
          paddingLeft: "50px",
          color: "#5A5252",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          flexShrink: 0,
          background: "#D9D9D9",
        }}
      >
        Akun Saya
      </p>
      {AkunSayaLink.map((link) => (
        <NavPengaturanAkun
          key={link.name}
          href={link.href}
          component={link.component}
          isActive={link.component === activeLink}
          setActiveLink={setActiveLink}
        >
          {link.name}
        </NavPengaturanAkun>
      ))}

      <p
        style={{
          minWidth: "100%",
          padding: "10px",
          paddingLeft: "50px",
          color: "#5A5252",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          flexShrink: 0,
          background: "#D9D9D9",
        }}
      >
        Pengaturan
      </p>

      {PengaturanLink.map((link) => (
        <NavPengaturanAkun
          key={link.name}
          href={link.href}
          component={link.component}
          isActive={link.component === activeLink}
          setActiveLink={setActiveLink}
        >
          {link.name}
        </NavPengaturanAkun>
      ))}

<p
        style={{
          minWidth: "100%",
          padding: "10px",
          paddingLeft: "50px",
          color: "#5A5252",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          flexShrink: 0,
          background: "#D9D9D9",
        }}
      >
        Daftar
      </p>

      {DaftarLink.map((link) => (
        <NavPengaturanAkun
          key={link.name}
          href={link.href}
          component={link.component}
          isActive={link.component === activeLink}
          setActiveLink={setActiveLink}
        >
          {link.name}
        </NavPengaturanAkun>
      ))}



    </Container>
  );
}
