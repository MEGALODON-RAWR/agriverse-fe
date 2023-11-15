import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

export const useFetchBerita = (page, pageSize, keyword) => {
    const [berita, setBerita] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchBerita = axiosInstance.get("/berita", {
        params: {
            page: page,
            pageSize: pageSize,
            keyword: keyword
        }
    });

    useEffect(() => {
        setIsLoading(true);
        fetchBerita
            .then((res) => {
                setBerita(res.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [page, pageSize, keyword]);

    return { berita, isLoading, error };

}