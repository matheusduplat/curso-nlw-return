import { FeedbackType, feedbackTypes } from "..";
import { CloserButtom } from "../../CloserButtom";

interface FeedBackTypeStepsProps {
  onFeedBackTypeChanger: (type: FeedbackType) => void;
}

export function FeedBackTypeSteps({
  onFeedBackTypeChanger,
}: FeedBackTypeStepsProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu FeedBack</span>
        <CloserButtom />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:borde-brand-500 focus:outline-none"
              type="button"
              onClick={() => onFeedBackTypeChanger(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
