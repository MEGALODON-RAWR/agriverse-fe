import CardProfile from "@/components/CardProfile";
import Header from "@/components/Header";
import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser";
import { useRouter } from "next/navigation";
import { Spinner } from "react-bootstrap";


export default function Profile() {
  const { user, isLoading, error, status } = useFetchCurrentUser();

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

  if (status !== "authenticated") {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">

          <h1>Anda belum login</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="profile">
        <CardProfile user={user} />
      </div>
    </>
  );
}
