import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const Middleware = (NextRequest, NextFetchEvent) => {

    // Check if JWT cookie is null redirect to other route
    if(NextRequest.cookies.jwt == null) {
        return NextResponse.redirect(process.env.DOMAIN);
    }

    // Verify token with Signature
    const verify = jwt.verify(NextRequest.cookies.jwt, process.env.JWT_SECRET);

    return NextResponse.next();
}

export default Middleware;