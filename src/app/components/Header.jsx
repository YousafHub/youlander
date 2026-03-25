import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0F29]/50 backdrop-blur-md border-b border-gray-700/40 flex justify-between items-center py-6 md:py-4 px-6 md:px-12">
      <a href="/">
        <Image src={Logo} alt="Youlander Logo" width={64} height={64} />
      </a>
    <a
  href="#form"
  className="font-semibold text-sm md:text-lg inline-flex bg-[#9B5DE5] text-white font-heading px-4 md:px-8 py-4 md:py-3 rounded-lg hover:scale-105 hover:shadow-lg transition w-auto whitespace-nowrap"
>
  Créer mon site maintenant
</a>
    </header>
  );
};

export default Header;