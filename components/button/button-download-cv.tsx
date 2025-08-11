"use client";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const ButtonDownloadCv = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=1jpPHql4PBxl0TxjY9gY1pO9u3so9tkQu";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV - IRVAN YUSUF CAHYADI.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button
      size={"lg"}
      className="text-base cursor-pointer group"
      variant={"outline"}
      onClick={onButtonClick}
    >
      <Download className="transform transition-all duration-300 ease-in-out group-hover:translate-y-[2px]" />
      Download CV
    </Button>
  );
};

export default ButtonDownloadCv;
