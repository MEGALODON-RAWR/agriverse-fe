import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(tokenObject) {
    try {
        const tokenResponse = await axios.post("https://agriverse-be.pegelinux.my.id/api/v1/auth/refresh", {
            headers: {
                'Authorization': tokenObject.refreshToken
            }
        });

        return {
            ...tokenObject,
            accessToken: tokenResponse.data.accessToken,
            accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
            refreshToken: tokenResponse.data.refreshToken,
        }
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        }
    }
}

const providers = [
    CredentialsProvider({
        name: "Credentials",
        authorize: async (credentials) => {
            try {
                const user = await axios.post("https://agriverse-be.pegelinux.my.id/api/v1/auth/login", {
                    username: credentials.username,
                    password: credentials.password,
                });

                if(user.data.data.access_token) {
                    return user.data.data
                }
                return null;
            } catch (error) {
                throw new Error(error.response.data.status)
            }
        }
    })
];

const callbacks = {
    jwt:async ({ token, user }) => {
        if(user) {
            token.accessToken = user.access_token;
            token.accessTokenExpiry = user.access_token_expiry;
            token.refreshToken = user.refresh_token;
        }

        const shouldRefreshTime = Math.round((token.accessTokenExpiry - 60 *60 * 1000) - Date.now());

        if (shouldRefreshTime > 0) {
            return Promise.resolve(token);
        }

        token = await refreshAccessToken(token);
        return Promise.resolve(token);

    },
    session: async ({ session, token }) => {
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.refreshToken = token.refreshToken;
        return Promise.resolve(session);
    },
}

export const options = {
    providers,
    callbacks,
    pages:{
        signIn: '/login',
    },
    secret: 'megalodonAgriverse',
}

const Auth = (req, res) => NextAuth(req, res, options);
export default Auth;