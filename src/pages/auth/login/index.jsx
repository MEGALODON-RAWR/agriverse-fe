import Image from "next/image";
import React from "react";
import logo from '../../../styles/img/logo.png'
import hideIcon from '../../../images/hide.png'
import showIcon from '../../../images/show.png'

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
  } from '@chakra-ui/react'
import Header from "@/components/Header";

export default function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
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
                }>Belum punya akun? <Button color='#4E7031' variant='link'> <a href="/auth/register">Daftar</a> </Button></p>   
                <FormControl color="#4E7031">
                    <FormLabel>Username</FormLabel>
                    <Input type='text' placeholder="Username"/>
                </FormControl>
                <FormControl marginTop={5} color="#4E7031">
                    <FormLabel >Password</FormLabel>
                    <InputGroup size="md">
                        <Input 
                            type={show ? 'text' : 'password'} 
                            placeholder="Password" 
                        />
                        <InputRightElement width="4.5rem">
                            <Button size="sm" onClick={handleClick} variant={'link'}>
                                {show ? <Image src={hideIcon} alt="hide" width={20}/> : <Image src={showIcon} alt="show" width={20}/> }
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <SimpleGrid columns={2} spacing={10} marginTop={5}>
                    <FormControl color="#4E7031">
                        <Checkbox colorScheme="green" defaultChecked>ingatkan saya</Checkbox>
                    </FormControl>
                    <FormControl color="#4E7031" textAlign={'right'}>
                        <Button color='#4E7031' variant='link'>Lupa Password?</Button>
                    </FormControl>
                </SimpleGrid>
                <Button type="submit" color="white" background="#4E7031" size="lg" width={"100%"} height={50} marginTop={10}>Sign In</Button>
            </Container>
        </div>
        </>
    )
}