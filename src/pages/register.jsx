import Image from "next/image";
import React, { useState } from "react";
import logo from "@/images/logo.png";
import hideIcon from "@/images/hide.png";
import showIcon from "@/images/show.png";

import {
  SimpleGrid,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const route = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(
      "https://agriverse-be.pegelinux.my.id/api/v1/user/registrasi",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phoneNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);
    const data = await response.json();
    if (data.code === 200) {
        toast({
            title: "Registrasi Berhasil",
            description: "Silahkan login",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setTimeout(() => {
            route.push('/login')
        }, 2000)
    } else {
      toast({
        title: "Registrasi Gagal",
        description: data.status,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="register">
        <Container
          maxW={"85%"}
          style={{
            backgroundColor: "white",
            borderRadius: "100px",
            padding: "20px 50px 50px 20px",
          }}
        >
          <Image src={logo} alt="logo" width={274} />
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              color: "#4E7031",
              // fontFamily: "Poppins",
              fontWeight: "700",
              fontStyle: "normal",
              lineHeight: "49px",
              letterSpacing: "-0.9px",
            }}
          >
            Ayo Bergabung!
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "#4E7031",
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "56px",
              letterSpacing: "-0.4px",
              marginBottom: "10px",
            }}
          >
            Sudah punya akun?{" "}
            <Button color="#4E7031" variant="link">
              <Link href="/login">Masuk</Link>{" "}
            </Button>
          </p>
          <Container maxW={"80%"}>
            <SimpleGrid columns={2} spacing={10}>
              <FormControl color="#4E7031">
                <FormLabel maxH={4}>Nama Awal</FormLabel>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="nama awal"
                  size="xs"
                />
              </FormControl>
              <FormControl color="#4E7031">
                <FormLabel maxH={4}>Nama Akhir</FormLabel>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="nama awal"
                  size="xs"
                />
              </FormControl>
            </SimpleGrid>
            <FormControl color="#4E7031" marginTop={4}>
              <FormLabel maxH={4}>Alamat Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email@mail.com"
                size="xs"
              />
            </FormControl>
            <FormControl color="#4E7031" marginTop={4}>
              <FormLabel maxH={4}>Nomor Telephone</FormLabel>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="+62xxxx"
                size="xs"
              />
            </FormControl>
            <FormControl color="#4E7031" marginTop={4}>
              <FormLabel maxH={4}>Username</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                size="xs"
              />
            </FormControl>
            <FormControl color="#4E7031" marginTop={4}>
              <FormLabel maxH={4}>Password</FormLabel>
              <InputGroup size="xs">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button size="xs" onClick={handleClick} variant={"link"}>
                    {show ? (
                      <Image src={hideIcon} alt="hide" width={20} />
                    ) : (
                      <Image src={showIcon} alt="show" width={20} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              onClick={handleSubmit}
              type="submit"
              color="white"
              background="#4E7031"
              size="lg"
              width={"100%"}
              height={50}
              marginTop={7}
            >
              Submit
            </Button>
          </Container>
        </Container>
      </div>
    </>
  );
}
