import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("Hello i am the first api for test");
};