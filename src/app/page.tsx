"use client";
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
    <main className="columns-xs gap-0">
      <Image
        className="w-full h-auto"
        objectFit=""
        src={`/images/image1.webp`}
        width={400}
        height={400}
        alt="image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {images?.map((image: any, index: number) => (
        <Image
          key={index}
          className="w-full h-auto"
          objectFit=""
          src={`/images/${image}`}
          width={400}
          height={400}
          alt="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </main>
  );
}
