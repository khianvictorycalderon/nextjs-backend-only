import { NextResponse } from "next/server";

// Optional: Handle preflight requests (needed for POST/PUT/DELETE from browsers)
export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

// Example GET endpoint
export async function GET() {
  return NextResponse.json(
    { message: "Backend is working!" },
    { status: 200 }
  );
}

// Example POST endpoint
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Do something with `body`, e.g., save to DB
    return NextResponse.json({ received: body }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
