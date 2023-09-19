import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongoDB from './mongodb'
import User from '@/models/user'
import GoogleProvider from "next-auth/providers/google";


export const authConfig:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize (credentials) {
                if (!credentials ||!credentials.email || credentials.password) {
                    return null
                }

                try {
                    await connectMongoDB()
                    const dbUser = await User.findOne({email: credentials.email})

                    if (!dbUser) {
                        return null
                    }

                    return null
                } catch (error) {
                    console.error(error)
                    return null
                }

            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          })
    ]
}