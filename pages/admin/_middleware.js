import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const Middleware = (NextRequest, NextFetchEvent) => {

    // Check if JWT cookie is null redirect to other route
    if(NextRequest.cookies.jwt == null) {
        return NextResponse.redirect(process.env.DOMAIN);
    }

    // Verify token with Signature
    try{
        const verify = jwt.verify(NextRequest.cookies.jwt, process.env.JWT_SECRET);
        
        // Check if user role are Admin or Manager redirect to Admin Panel
        // if not redirect to Home page
        if(verify.role == 'admin' || verify.role == 'manager')
        {
            return NextResponse.next();
        }
        else{
            return NextResponse.redirect(process.env.DOMAIN);
        }
    }
    catch(err){
        return NextResponse.redirect(process.env.DOMAIN);
    }
}

export default Middleware;