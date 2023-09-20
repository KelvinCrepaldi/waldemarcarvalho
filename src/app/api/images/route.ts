import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const imageDirectory = "./public/images"; // Diretório onde estão as imagens

  // Lista todos os arquivos no diretório de imagens
  const images = fs.readdirSync(imageDirectory);

  return NextResponse.json(images);
}
