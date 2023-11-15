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
import Link from "next/link";
import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser";
import { useRouter } from "next/navigation";

const Services = ["Gofarm", "Gomart", "Talkfarm"];

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
              <a href={`/${service.toLowerCase()}`}>{service}</a>
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

export default function HeaderAdmin() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("Beranda");
  const { user: currentUser, status } = useFetchCurrentUser();
  const isLogin = status === "authenticated";

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
            <Link href={"/"}>
              <Image src={Logo} alt="logo" width={200} />
            </Link>
            <Menu>
              {isLogin ? (
                <>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={currentUser?.image} />
                    <p className="nama-user">
                      {currentUser?.first_name}{" "}
                      {currentUser?.last_name}
                    </p>
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => linkto("profile")}>
                      Profile Setting
                    </MenuItem>
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </MenuList>
                </>
              ) : (
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/login"}
                >
                  {" "}
                  Login{" "}
                </Button>
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
