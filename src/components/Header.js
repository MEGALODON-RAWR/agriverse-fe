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
import keranjangImage from "@/images/keranjangHeader.png";

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

  const router = useRouter();

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
          borderBottom={active === children ? "3px solid yellow" : "none"}
        >
          Layanan
        </MenuButton>
        <MenuList>
          {services.map((service) => (
            <MenuItem
              key={service}
              onClick={() => {
                setActiveLink(service);
                router.push(`/${service.toLowerCase()}`);
              }}
            >
              <a>{service}</a>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Box
      as="button"
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
        borderBottom: "3px solid yellow",
      }}
      href={href}
      // borderBottom={active ? "3px solid yellow" : "none"}
      onClick={() => {
        router.push(href);
        setActiveLink(children);
      }}
    >
      {children}
    </Box>
  );
};

export default function Header() {
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

  const router = useRouter();

  const linkto = (link) => {
    router.push(link);
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
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  active={link.name === activeLink}
                  setActiveLink={setActiveLink}
                  dropdown={link.dropdown}
                  services={link.name === "Layanan" ? Services : null}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>
            <Menu>
              {isLogin ? (
                <>
                  <Box as="button" onClick={() => linkto("/keranjang")}>
                    <Image
                      src={keranjangImage}
                      alt="keranjang"
                      width={30}
                      height={30}
                    />
                  </Box>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={currentUser?.image} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => linkto("/profile")}>
                      Profile Setting
                    </MenuItem>
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                    {currentUser?.role === "admin" && (
                      <>
                        <MenuDivider />
                        <MenuItem onClick={() => linkto("/dashboard")}>
                          Dashboard
                        </MenuItem>
                      </>
                    )}
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
