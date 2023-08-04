// pages/api/login.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

type Props = {
    username:string;
    password:string;
}

const SECRET_KEY = 'your-secret-key'; // Replace with your own secret key

export default async function POST (req: Request) {
    const {username,password}:any = req.body
    if (username === 'admin2' && password === 'astanamekgoku#23') {
        const token = jwt.sign ({username},SECRET_KEY,{expiresIn: '1h'})
        const newHeader = new Headers(req.headers)
        newHeader.set('Set-Cookie', `token=${token}; HttpOnly; Path=/`)
        return (NextResponse.json({message: 'logge In'},{status:200}),NextResponse.next({
            request: {
                headers:newHeader
            }
        }))
        
        
    }
    else {
        return NextResponse.json({message: 'Invalid Credential'},{status : 401})
    }
}
