import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser"

export default function Profile() {
    const {user, isLoading, error} = useFetchCurrentUser()
    const username = user?.username
    const name = user?.first_name + ' ' + user?.last_name
    const address = user?.address
    const phone = user?.phone

    return (
        <>
        <h1>Profile</h1>
        <h1>Hallo</h1>
        <p>Username: {username}</p>
        <p>Nama: {name}</p>
        <p>Alamat: {address}</p>
        <p>Telepon: {phone}</p>
        </>
    )
}