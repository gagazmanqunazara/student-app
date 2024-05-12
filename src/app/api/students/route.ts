import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const students = await prisma.student.findMany();

  return Response.json({ students });
}

export async function POST(req: Request) {
  const body = await req.json();

  const students = await prisma.student.create({
    data: body,
  });

  return NextResponse.json({ data: students }, { status: 200 });
}
