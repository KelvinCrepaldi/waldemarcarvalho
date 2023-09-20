"use client";
import ImageCard from "@/components/imageCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("api/images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      }
    }

    fetchImages();
  }, []);

  /*   */

  return (
    <main className="columns-xs gap-0 overflow-clip">
      {images?.map((image: any, index: number) => (
        <ImageCard image={image} key={index} index={index}></ImageCard>
      ))}
    </main>
  );
}
