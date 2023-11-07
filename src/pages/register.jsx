import Image from "next/image";
import React from "react";
import logo from '@/images/logo.png'
import hideIcon from '@/images/hide.png'
import showIcon from '@/images/show.png'

import {
    SimpleGrid, 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'

export default function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
        <div className="register">
            <Container maxW={'85%'} style={
                {
                    backgroundColor: "white",
                    borderRadius: "100px",
                    padding: "20px 50px 50px 20px"

                }
            }>
                <Image src={logo} alt="logo" width={274}/>
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
                        marginBottom: "10px"
                    }
                }>Sudah punya akun? <Button color='#4E7031' variant='link'><a href="/login">Masuk</a></Button></p>
                <Container maxW={'80%'}>
                    <SimpleGrid columns={2} spacing={10}>
                        <FormControl color="#4E7031">
                            <FormLabel maxH={4}>Nama Awal</FormLabel>
                            <Input type='text' placeholder="nama awal" size='xs'/>
                        </FormControl>
                        <FormControl color="#4E7031">
                            <FormLabel maxH={4}>Nama Akhir</FormLabel>
                            <Input type='text' placeholder="nama awal" size='xs'/>
                        </FormControl>
                    </SimpleGrid>
                    <FormControl color="#4E7031" marginTop={4}>
                        <FormLabel maxH={4}>Alamat Email</FormLabel>
                        <Input type='text' placeholder="email@mail.com" size='xs' />
                    </FormControl>
                    <FormControl color="#4E7031" marginTop={4}>
                        <FormLabel maxH={4}>Nomor Induk Penduduk (NIK)</FormLabel>
                        <Input type='text' placeholder="13 karakter" size='xs'/>
                    </FormControl>
                    <FormControl color="#4E7031" marginTop={4}>
                        <FormLabel maxH={4}>Nomor Telephone</FormLabel>
                        <Input type='text' placeholder="+62xxxx" size='xs'/>
                    </FormControl>
                    <FormControl color="#4E7031" marginTop={4}>
                        <FormLabel maxH={4}>Username</FormLabel>
                        <Input type='text' placeholder="username" size='xs'/>
                    </FormControl>
                    <FormControl color="#4E7031" marginTop={4}>
                        <FormLabel maxH={4}>Password</FormLabel>
                        <InputGroup size="xs">
                            <Input 
                                type={show ? 'text' : 'password'} 
                                placeholder="Password" 
                            />
                            <InputRightElement width="4.5rem">
                                <Button size="xs" onClick={handleClick} variant={'link'}>
                                    {show ? <Image src={hideIcon} alt="hide" width={20}/> : <Image src={showIcon} alt="show" width={20}/> }
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button type="submit" color="white" background="#4E7031" size="lg" width={"100%"} height={50} marginTop={7}>Submit</Button>
                </Container>   
            </Container>
        </div>
        </>
    )
}