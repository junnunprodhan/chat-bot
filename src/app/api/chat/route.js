import { NextRequest, NextResponse } from "next/server";
import { getBotResponse } from "@/utils/chatbotLogic";

export async function POST(req) {
  const body = await req.json();
  const { message } = body;

  // Get chatbot response
  const reply = getBotResponse(message);

  return NextResponse.json({ reply });
}
