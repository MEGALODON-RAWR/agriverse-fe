import Image from "next/image";
import React from "react";
import logo from '@/images/logo.png' 
import hideIcon from '@/images/hide.png'
import showIcon from '@/images/show.png'
import {
    SimpleGrid, 
    Container,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    Checkbox,
    ring,
    FormErrorMessage,
    FormErrorIcon,
    useToast,
    SliderProvider,
    Spinner,
  } from '@chakra-ui/react'

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser";
import { useRouter } from "next/navigation";

export default function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [usernameMessage, setUsernameMessage] = React.useState('')
    const [passwordMessage, setPasswordMessage] = React.useState('')
    const [isUsernameValid, setIsUsernameValid] = React.useState(false)
    const [isPasswordValid, setIsPasswordValid] = React.useState(false)
    const toast = useToast()
    const { user, status, isLoading } = useFetchCurrentUser();
    const router = useRouter()


    React.useEffect(() => {
        if (username.length < 5) {
            setUsernameMessage('Username minimal 5 karakter')
        } else {
            setUsernameMessage('')
            setIsUsernameValid(false)
        }
    }
    , [username])

    React.useEffect(() => {
        if (password.length < 8) {
            setPasswordMessage('Password minimal 8 karakter')
        } else {
            setPasswordMessage('')
            setIsPasswordValid(false)
        }
    }
    , [password])

    if (isLoading) {
        return (
          <>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </>
        );
      }

      if (status === "authenticated") {
        if (user?.role === 'admin') {
            router.push('/dashboard')
        } else {
            router.push('/profile')
        }
      }

    const handleLogin = async (e) => {
        e.preventDefault()

        if (username.length < 5) {
            setIsUsernameValid(true)
            return
        }

        if (password.length < 8) {
            setIsPasswordValid(true)
            return
        }
        
        setLoading(true)
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password
        })
        if (result.error) {
            setPassword('')
            toast({
                title: "Login Gagal",
                description: result.error,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top"
            })
            setLoading(false)
            return
        }
        setLoading(false)
        toast({
            title: "Login Berhasil",
            description: "Selamat datang di website kami",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top"
        })
        setTimeout(() => {
            router.push('/')
        }, 3000)

    }

    return (
        <>
        <div className="login">
            <Container maxW={'40%'}>
                <Image src={logo} alt="logo"/>
            </Container>
            <Container maxW={'50%'} style={
                {
                    backgroundColor: "white",
                    borderRadius: "100px",
                    padding: "100px"
                }
            }>
                <h1 style={
                    {
                        textAlign: "center",
                        fontSize: "40px",
                        color: "#4E7031",
                        // fontFamily: "Poppins",
                        fontWeight: "700",
                        fontStyle: "normal",
                        lineHeight: "49px",
                        letterSpacing: "-0.9px",
                    }
                }>Ayo Bergabung!</h1>
                <p style={
                    {
                        textAlign: "center",
                        color: "#4E7031",
                        fontFamily: "DM Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "56px",
                        letterSpacing: "-0.4px",
                        marginBottom: "50px"
                    }
                }>Belum punya akun? <Button color='#4E7031' variant='link'> <Link href="/register">Daftar</Link> </Button></p>   
                <form onSubmit={handleLogin}>
                    <FormControl color="#4E7031" isInvalid={isUsernameValid}>
                        <FormLabel>Username</FormLabel>
                        <Input
                            onFocus={() => setIsUsernameValid(true)}
                            type='text' 
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <FormErrorMessage>{usernameMessage}</FormErrorMessage>
                    </FormControl>
                    <FormControl marginTop={5} color="#4E7031" isInvalid={isPasswordValid}>
                        <FormLabel >Password</FormLabel>
                        <InputGroup size="md">
                            <Input 
                                onFocus={() => setIsPasswordValid(true)}
                                type={show ? 'text' : 'password'} 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <InputRightElement width="4.5rem">
                                <Button size="sm" onClick={handleClick} variant={'link'}>
                                    {show ? <Image src={hideIcon} alt="hide" width={20}/> : <Image src={showIcon} alt="show" width={20}/> }
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{passwordMessage}</FormErrorMessage>
                    </FormControl>
                    <SimpleGrid columns={2} spacing={10} marginTop={5}>
                        <FormControl color="#4E7031">
                            <Checkbox colorScheme="green" >ingatkan saya</Checkbox>
                        </FormControl>
                        <FormControl color="#4E7031" textAlign={'right'}>
                            <Button color='#4E7031' variant='link'>Lupa Password?</Button>
                        </FormControl>
                    </SimpleGrid>
                    <FormControl>
                        {loading ? (
                            <Button type="submit" color="white" background="#4E7031" size="lg" width={"100%"} height={50} marginTop={10} isLoading>
                                Sign In
                            </Button>
                        ) : (
                            <Button type="submit" color="white" background="#4E7031" size="lg" width={"100%"} height={50} marginTop={10}>
                                Sign In
                            </Button>
                        )}
                    </FormControl>
                </form>
            </Container>
        </div>
        </>
    )
}