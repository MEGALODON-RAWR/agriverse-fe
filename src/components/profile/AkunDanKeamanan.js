import { Button, FormControl, Grid, GridItem, Input, useToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AkunDanKeamanan({ user }) {
  const [nama, setNama] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [tanggalLahir, setTanggalLahir] = useState(user?.tanggal_lahir);
  const [edit, setEdit] = useState(false);
  const { data: session } = useSession();
  const [ jenisKelamin , setJenisKelamin ] = useState(user?.jenis_kelamin);

  console.log(user);

  const toast = useToast();


  const handleSubmit = async () => {
    const response = await fetch("https://agriverse-be.pegelinux.my.id/api/v1/user", {
      method: "PUT",
      body: JSON.stringify({
        name: nama,
        email: email,
        tanggal_lahir: tanggalLahir,
        jenis_kelamin: jenisKelamin,
        phone: phone,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${session?.accessToken}`,
      },
    });

    const data = await response.json();
    if (data.code === 200) {
      setEdit(false);
      toast({
        title: "Berhasil",
        description: "Data berhasil diubah",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const cancelEdit = () => {
    setNama(user?.name);
    setEmail(user?.email);
    setPhone(user?.phone);
    setEdit(!edit);
  };

  return (
    <>
      <p className="p-semibold fs-30">Akun & Keamanan </p>
      <hr
        style={{
          color: "#4E7031",
          backgroundColor: "#4E7031",
          height: "3px",
          width: "100%",
        }}
      />
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        paddingTop={3}
        paddingLeft={50}
        columnGap={2}
      >
        <GridItem colSpan={2} fontSize={"22px"}>
          <p style={{ marginBottom: "40px" }}>Nama</p>
          <p style={{ marginBottom: "40px" }}>Email</p>
          <p style={{ marginBottom: "40px" }}>Jeni Kelamin</p>
          <p style={{ marginBottom: "40px" }}>Tanggal Lahir</p>
          <p style={{ marginBottom: "40px" }}>No. Handphone</p>
        </GridItem>
        <GridItem colSpan={3}>
          <Input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            readOnly={!edit}
            fontSize={"20px"}
            borderColor={edit ? "#4E7031" : "#0E0E0D"}
            borderStyle={"solid"}
            borderRadius={10}
            marginBottom={"8"}
            marginTop={"-1"}
            borderWidth={edit ? "2px" : "1px"}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!edit}
            fontSize={"20px"}
            borderColor={edit ? "#4E7031" : "#0E0E0D"}
            borderStyle={"solid"}
            borderRadius={10}
            marginBottom={"10"}
            borderWidth={edit ? "2px" : "1px"}
          />
          <Input
            readOnly={!edit}
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
            fontSize={"20px"}
            borderColor={edit ? "#4E7031" : "#0E0E0D"}
            borderStyle={"solid"}
            borderRadius={10}
            marginBottom={"10"}
            borderWidth={edit ? "2px" : "1px"}
          />
          <Input
          type="date"
            readOnly={!edit}
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            fontSize={"20px"}
            borderColor={edit ? "#4E7031" : "#0E0E0D"}
            borderStyle={"solid"}
            borderRadius={10}
            marginBottom={"10"}
            borderWidth={edit ? "2px" : "1px"}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            readOnly={!edit}
            fontSize={"20px"}
            borderColor={edit ? "#4E7031" : "#0E0E0D"}
            borderStyle={"solid"}
            borderRadius={10}
            marginBottom={"8"}
            marginTop={"-2"}
            borderWidth={edit ? "2px" : "1px"}
          />
          {edit ? (
            <>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                  <Button
                    onClick={() => cancelEdit()}
                    style={{
                      background: "red",
                      color: "#FFF",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    Batal
                  </Button>
                </GridItem>
                <GridItem colSpan={1}>
                  <Button
                    onClick={() => handleSubmit()}
                    style={{
                      background: "#4E7031",
                      color: "#FFF",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    Simpan
                  </Button>
                </GridItem>
              </Grid>
            </>
          ) : (
            <Button
              onClick={() => setEdit(!edit)}
              style={{
                background: "#4E7031",
                color: "#FFF",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              Edit
            </Button>
          )}
        </GridItem>
      </Grid>
    </>
  );
}
