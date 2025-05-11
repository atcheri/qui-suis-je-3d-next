import { type FC } from "react";

import { ItsutsuInazumaIcon } from "./icons";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className={`my-2 flex items-center space-x-1 text-indigo-900 dark:text-indigo-300`}>
      <ItsutsuInazumaIcon className="mr-3 h-8 w-8 flex-shrink-0 fill-indigo-900 dark:fill-slate-200" />
      <span className="font-alice text-3xl font-bold tracking-tight whitespace-nowrap text-indigo-900 dark:text-slate-200">
        5Inazuma
      </span>
    </Link>
  );
};

export default Logo;
