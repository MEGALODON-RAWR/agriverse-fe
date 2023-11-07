import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "@/images/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Services = ["Gofarm", "Gomart", "Talkfarm"];

const Links = [
  { name: "Beranda", href: "/" },
  {
    name: "Layanan",
    dropdown: true,
  },
  { name: "Berita", href: "/berita" },
  { name: "Tentang", href: "/tentang" },
];

const NavLink = (props) => {
  const { children, href, dropdown, services, active, setActiveLink } = props;

  if (dropdown) {
    return (
      <Menu>
        <MenuButton
          as="a"
          px={2}
          py={1}
          _hover={{
            textDecoration: "none",
            borderBottom: "3px solid yellow",
          }}
          href={href}
        >
          Layanan
        </MenuButton>
        <MenuList>
          {services.map((service) => (
            <MenuItem key={service} onClick={() => setActiveLink(service)}>
              {service}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Box
      as="a"
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
        borderBottom: "3px solid yellow",
      }}
      href={href}
      borderBottom={active === children ? "3px solid yellow" : "none"}
      onClick={() => setActiveLink(children)}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("Beranda");
  const { data: session } = useSession();
  const isLogin = (session)
  

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={`container-fluid ${isNavFixed ? "fixed-nav" : ""}`}>
        <Box bg={{ backgroundColor: "white", opacity: 0 }} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <a href="/">
              <Image src={Logo} alt="logo" width={200} />
            </a>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  active={link.name === activeLink} // Pastikan ini
                  setActiveLink={setActiveLink}
                  dropdown={link.dropdown}
                  services={Services}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>
            <Menu>
              {isLogin ? (
                
              <><MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"} />

                </MenuButton><MenuList>
                    <MenuItem>Profile Setting</MenuItem>
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </MenuList></>
              ) : (
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/login"}
                > Login </Button>
              )} 

            </Menu>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink
                    key={link.name}
                    href={link.href}
                    active={link.name === activeLink} // Pastikan ini
                    setActiveLink={setActiveLink}
                    dropdown={link.dropdown}
                    services={Services}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </div>
    </>
  );
}
