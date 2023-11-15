import { Box, Container } from "@chakra-ui/react";
import { use, useEffect, useState } from "react";

const AkunSayaLink = [
  { name: "Akun dan Keamanan", href: "#a" },
  { name: "Alamat Saya", href: "#b" },
  { name: "Kartu / Rekening Bank", href: "#c" },
];

const PengaturanLink = [
  { name: "Pengaturan Chat", href: "#" },
  { name: "Pengaturan Notifikasi", href: "/" },
  { name: "Bahasa / Language", href: "/" },
  { name: "Pusat Bantuan", href: "/" },
];

const DaftarLink = [
  { name: "Agen", href: "/" },
  { name: "Penyuluh", href: "/" },
];


const NavPengaturanAkun = (props) => {
  const { children, href, isActive, setActiveLink } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
        borderBottom: "3px solid black",
      }}
      href={href}
      fontWeight={isActive ? "bold" : "normal"}
      onClick={() => setActiveLink(children)}
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

export default function PengaturanAkun(props) {
  const [activeLink, setActiveLink] = useState("Akun dan Keamanan");

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
          isActive={link.name === activeLink}
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
          isActive={link.name === activeLink}
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
          isActive={link.name === activeLink}
          setActiveLink={setActiveLink}
        >
          {link.name}
        </NavPengaturanAkun>
      ))}



    </Container>
  );
}
