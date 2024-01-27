import { IconType } from "react-icons";
import MainBtn from "./MainBtn";

interface Props {
  Icon?: IconType;
  title?: string;
  text?: string;
  btnText?: string;
  url?: string;
  transparent?: boolean;
  pair?: boolean;
  alt?: boolean;
}

const ContentBlock = ({
  Icon,
  title,
  text,
  btnText,
  url,
  transparent = false,
  pair = false,
  alt = false,
}: Props) => {
  return (
    <div
      className={`${
        transparent ? "py-28" : "py-10"
      } w-full flex items-center justify-center ${
        !transparent && "bg-nightblue-50"
      } ${alt && "bg-silver-50"}`}
    >
      <div
        className={`flex flex-col items-center justify-center ${
          pair ? "w-3/4" : "w-1/2"
        } gap-6`}
      >
        {Icon && (
          <Icon
            className={`text-8xl ${
              alt ? "text-nightblue-50" : "text-silver-50"
            }`}
          />
        )}
        <h2
          className={`text-3xl ${alt ? "text-nightblue-50" : "text-silver-50"}`}
        >
          {title}
        </h2>
        <p
          className={`text-center ${
            alt ? "text-nightblue-50" : "text-silver-50"
          }`}
        >
          {text}
        </p>
        {btnText && <MainBtn text={btnText} url={url} alt={alt} />}
      </div>
    </div>
  );
};

export default ContentBlock;
