import { axiosInstance } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useFetchKeranjang = (page, pageSize, keyword, change) => {
    const { data: session, status } = useSession();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (session?.accessToken) {
            setIsLoading(true);
            axiosInstance
                .get("/keranjang", {
                    params: {
                        page: page,
                        pageSize: pageSize,
                        keyword: keyword,
                    },
                    headers: {
                        Authorization: `${session.accessToken}`,
                    },
                })
                .then((res) => {
                    setData(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setIsLoading(false);
                });
        }
    }, [page, pageSize, keyword, change]);

    return { data, isLoading, error };
};
