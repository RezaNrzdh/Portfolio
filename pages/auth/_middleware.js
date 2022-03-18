import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';

const Middleware = (NextRequest, NextFetchEvent) => {

    if(NextRequest.cookies.jwt){
        return NextResponse.redirect(process.env.DOMAIN);
    }
    return NextResponse.next();
}

export default Middleware;