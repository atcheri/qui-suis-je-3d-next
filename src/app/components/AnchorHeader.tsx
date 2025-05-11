import type { FC } from "react";
import { FaSlackHash } from "react-icons/fa";

import HighLight from "./HighLight";
import Link from "next/link";

type AnchoredHeaderProps = {
  anchor: string;
  title: string;
  subTitle: string;
};

const AnchoredHeader: FC<AnchoredHeaderProps> = ({ anchor, title, subTitle }) => {
  return (
    <>
      <Link href={`/#${anchor}`}>
        <h2 id={anchor} className="mb-2 flex items-center gap-1 text-2xl font-bold">
          <FaSlackHash />
          <HighLight className="text-gray-700 dark:text-white">{title}</HighLight>
        </h2>
      </Link>
      <p className="sub-title">{subTitle}</p>
    </>
  );
};

export default AnchoredHeader;
