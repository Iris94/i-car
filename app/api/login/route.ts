import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import * as bcrypt from 'bcrypt';

export async function POST (req : any) {
    try {
        const {email, password} = await req.json()
        await connectMongoDB()

        const registeredUser = await User.findOne({email})

        if (!registeredUser) {
            console.log('User is not found: console')
            return NextResponse.json({message: 'User not found'}, {status: 404})
        }

        const passwordMatch = await bcrypt.compare(password, registeredUser.password)

        if (!passwordMatch) {
            console.log('Password is not found: console')
            return NextResponse.json({message: 'Incorrect Password'}, {status: 501})
        }

        return NextResponse.json({ message: 'Authentication successful' }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}