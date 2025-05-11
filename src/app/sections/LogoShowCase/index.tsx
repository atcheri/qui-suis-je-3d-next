import type { FC } from "react";

import { companiesLogos, type CompanyLogo } from "./constants";

const LogoIcon: FC<{ companyLogo: CompanyLogo }> = ({ companyLogo }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={companyLogo.imagePath} alt={companyLogo.alt} />
    </div>
  );
};

const LogoShowCase = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
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
