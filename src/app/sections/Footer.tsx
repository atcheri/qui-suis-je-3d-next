import { type FC } from "react";
import { CiLinkedin } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";
import { SiGithub, SiLine } from "react-icons/si";
import { TbBrandTelegram } from "react-icons/tb";
import Logo from "../components/Logo";
import { CONTACT_LINKS } from "../components/constants";


const Footer: FC = () => {
  return (
    <>
      <hr className="my-6 border-gray-200 lg:my-8 dark:border-gray-700" />
      <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col max-md:items-center">
            <Logo />
          </div>
          <div className="socials">
            <a href="mailto:atcheri@gmail.com" className="icon">
              <RiMailSendLine className="h-8 w-8" />
            </a>
            <a href={CONTACT_LINKS.LINKEDIN} className="icon" target="_blank">
              <CiLinkedin className="h-8 w-8" />
            </a>
            <a href={CONTACT_LINKS.TELEGRAM} className="icon" target="_blank">
              <TbBrandTelegram className="h-8 w-8" />
            </a>
            <a href={CONTACT_LINKS.LINE} className="icon" target="_blank">
              <SiLine className="h-8 w-8" />
            </a>
            <a href={CONTACT_LINKS.GITHUB} className="icon" target="_blank">
              <SiGithub className="h-8 w-8" />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">&copy; {new Date().getFullYear()} QuiSuiJe™. No Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
