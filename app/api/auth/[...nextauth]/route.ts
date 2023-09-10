import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

const authOptions:NextAuthOptions = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },

            authorize(credentials, req) {
                if (
                    credentials?.email === "admin@example.com" &&
                    credentials?.password === 'admin'
                ) {
                    return {
                        id: '1',
                        email: 'admin@example.com'
                    }
                };

                return null
            },
        })
    ],

    session: {
        strategy: 'jwt',
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/'
    }
}

const handler = NextAuth(authOptions)
export { handler as POST, handler as GET }