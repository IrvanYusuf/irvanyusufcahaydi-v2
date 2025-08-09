import { Cloudinary } from "@cloudinary/url-gen";
import { fill as cldFill, scale } from "@cloudinary/url-gen/actions/resize";
import Image from "next/image";

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  cropMode?: "fill" | "scale";
  className?: string;
}

export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  fill = false,
  cropMode = "fill",
  className,
}: CloudinaryImageProps) {
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME },
  });

  let img = cld.image(publicId);

  if (width && height) {
    if (cropMode === "fill") {
      img.resize(cldFill().width(width).height(height));
    } else {
      img.resize(scale().width(width).height(height));
    }
  }

  const imgUrl = img.format("webp").toURL();

  console.log(imgUrl);

  if (fill) {
    return <Image src={imgUrl} alt={alt} fill className="object-cover" />;
  }

  return <Image src={imgUrl} alt={alt} width={width} height={height} />;
}
