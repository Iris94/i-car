import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import * as bcrypt from 'bcrypt'

export async function POST (req : any) {
    try {
        const {username, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDB();
        await User.create({username, email, password: hashedPassword})
        return NextResponse.json({message: 'User Registered'}, {status: 201})
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}