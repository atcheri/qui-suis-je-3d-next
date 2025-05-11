import type { FC } from "react";
import { FaSlackHash } from "react-icons/fa";

import HighLight from "./HighLight";

type AnchoredHeaderProps = {
  anchor: string;
  title: string;
  subTitle: string;
};

const AnchoredHeader: FC<AnchoredHeaderProps> = ({ anchor, title, subTitle }) => {
  return (
    <>
      <a href={`/#${anchor}`}>
        <h2 id={anchor} className="flex items-center gap-1 text-2xl font-bold mb-2">
          <FaSlackHash />
          <HighLight className="text-gray-700 dark:text-white">{title}</HighLight>
        </h2>
      </a>
      <p className="sub-title">{subTitle}</p>
    </>
  );
};

export default AnchoredHeader;
