import Image from "next/image";
import type { FC, HTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  id: string;
};
const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(id);

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <Image src="/images/arrow-down.svg" alt="arrow" width={500} height={500} />
        </div>
      </div>
    </a>
  );
};

export default Button;
