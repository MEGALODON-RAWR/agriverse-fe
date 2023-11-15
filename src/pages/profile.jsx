import CardProfile from "@/components/CardProfile";
import Header from "@/components/Header";
import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser";

export default function Profile() {
  const { user, isLoading, error } = useFetchCurrentUser();
  const username = user?.username;
  const name = user?.first_name + " " + user?.last_name;
  const address = user?.address;
  const phone = user?.phone;

  return (
    <>
        <Header />
      <div className="profile">
        <CardProfile />
      </div>
    </>
  );
}
