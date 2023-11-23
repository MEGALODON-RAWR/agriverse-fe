import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

export const useFetchProducts = (page, pageSize, keyword) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchBerita = axiosInstance.get("/product", {
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
                setData(res.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [page, pageSize, keyword]);

    return { data, isLoading, error };

}