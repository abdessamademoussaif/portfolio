import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-purple-600">
          <a href="#" target="_blank">
            <Instagram />
          </a>
        </li>
        <li className="hover:text-purple-600">
          <a
            href="https://www.linkedin.com/in/abdessamade-moussaif-859079350"
            target="_blank"
          >
            <Linkedin />
          </a>
        </li>
        <li className="hover:text-purple-600">
          <a href="https://github.com/abdessamademoussaif" target="_blank">
            <Github />
          </a>
        </li>
        <li className="hover:text-purple-600">
          <a href="https://www.facebook.com/profile.php?id=100070846296690" target="_blank">
            <Facebook />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
