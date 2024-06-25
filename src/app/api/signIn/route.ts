import { signInSchema } from "@/lib/utils/zod"
import { NextResponse } from "next/server"

export async function POST (req: Request) {
  const body: unknown = req.json()

  const result = signInSchema.safeParse(body)


  return NextResponse.json({})
}