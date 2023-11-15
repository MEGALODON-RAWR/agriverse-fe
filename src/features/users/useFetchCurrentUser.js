import { axiosInstance } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useFetchCurrentUser = () => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const res = await axiosInstance.get("/auth/current-user", {
                    headers: {
                        Authorization: `${session?.accessToken}`,
                    },
                });
                setUser(res.data.data.user);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        if (session?.accessToken) {
            fetchUser();
        }
    }, [session]);

    return { user, isLoading, error, status };
}