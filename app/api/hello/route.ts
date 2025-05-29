import { NextResponse } from "next/server";


export async function GET() {
  return new NextResponse(JSON.stringify({ message: 'Hello, World!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  // You can handle POST requests here 
    // For example, you might want to parse the request body
    const body = await request.json();
    const { name } = body;
  return new NextResponse(JSON.stringify({ message: `Hello,${name} World!` }), {
    headers: { 'Content-Type': 'application/json' },
  });
}