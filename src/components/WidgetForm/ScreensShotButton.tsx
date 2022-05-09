import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreensShotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}
export function ScreensShotButton({
  onScreenshotTook,
  screenshot,
}: ScreensShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreensshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }
  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom", //colocou devido não ter nada no fundo a aplicação
          backgroundSize: 180, //colocou devido não ter nada no fundo a aplicação
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreensshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />}
    </button>
  );
}
