import Image from "next/image";
import { MotionDiv } from "../Motion";
const ImageCard = ({ image, index }: { image: string; index: number }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: 10 }}
      transition={{ delay: index * 0.01 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="w-full h-full"
    >
      <Image
        className="w-full h-auto"
        objectFit=""
        src={`/images/${image}`}
        width={400}
        height={400}
        alt="image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </MotionDiv>
  );
};

export default ImageCard;
