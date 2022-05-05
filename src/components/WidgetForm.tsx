import { CloserButtom } from "./CloserButtom";
import bugImageUrl from "../assets/img/bug.svg";
import ideaImageUrl from "../assets/img/idea.svg";
import thoughtImageUrl from "../assets/img/thought.svg";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu FeedBack</span>
        <CloserButtom />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:borde-brand-500 focus:outline-none"
                type="button"
                onClick={() => setFeedbackType(key as FeedbackTypes)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>hello word</p>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/matheus-duplat-234a3914a/"
        >
          Matheus Duplat
        </a>
      </footer>
    </div>
  );
}
