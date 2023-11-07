import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect){
    const { data: session} = useSession();
    const router = useRouter();
    const [isAuthented, setIsAuthented] = useState(false);

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signOut( {callbackUrl: '/login', redirect: shouldRedirect} );
        }
        if (session === null) {
            if (router.route !== '/login') {
                router.replace('/login');
            }
            setIsAuthented(false);
        } else if (session !== undefined) {
            if (router.route === '/login') {
                router.replace('/');
            }
            setIsAuthented(true);
        }
    }, [session]);
    return isAuthented;
}