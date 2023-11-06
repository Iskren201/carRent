import logo from "../assets/logo.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import youtubeIcon from "../assets/facebook-icon.svg";

import listBar from "../components/routes";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-36 footer-container">
      <div
        className="wrapper flex flex-col lg:flex-row justify-start
       lg:justify-between gap-12"
      >
        <div>
          <img src={logo} alt="" className="mx-auto lg:mx-0" />
          <p className="text-light-gray my-7 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            error?
          </p>
          <div className="flex items-center gap-[18px] justify-center lg:justify-start">
            <img src={facebookIcon} alt="" className="cursor-pointer" />
            <img src={twitterIcon} alt="" className="cursor-pointer" />
            <img src={instagramIcon} alt="" className="cursor-pointer" />
            <img src={linkedinIcon} alt="" className="cursor-pointer" />
            <img src={youtubeIcon} alt="" className="cursor-pointer" />
          </div>
        </div>

        <ul className="flex flex-col sm:flex-row items-center gap-10 mx-auto lg:mx-0">
          {listBar.map(({ id, link, styleClass }) => (
            <li
              key={id}
              className={styleClass}
            >
              <Link to={link}>
                {id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
