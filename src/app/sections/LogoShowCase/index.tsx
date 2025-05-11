import type { FC } from "react";

import { companiesLogos, type CompanyLogo } from "./constants";
import Image from "next/image";

const LogoIcon: FC<{ companyLogo: CompanyLogo }> = ({ companyLogo }) => {
  return (
    <div className="flex-center marquee-item flex-none">
      <Image src={companyLogo.imagePath} alt={companyLogo.alt} />
    </div>
  );
};

const LogoShowCase = () => {
  return (
    <div className="relative my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box gap-5 md:gap-12">
          {[...companiesLogos, ...companiesLogos, ...companiesLogos].map((cmp, index) => (
            <LogoIcon key={index} companyLogo={cmp} />
          ))}

          {companiesLogos.map((icon, index) => (
            <LogoIcon key={index} companyLogo={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowCase;
