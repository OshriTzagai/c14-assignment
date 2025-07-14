import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBar() {
  const navLinks = [
    {
      name: "Logo",
      href: "/",
      isLogo: true,
      logo: "https://www.c14.co.il/_next/static/media/logo-c14.589a43b1.svg",
    },
    { name: "חדשות", href: "/" },
    { name: "תיירות", href: "/" },
    { name: "בריאות", href: "/" },
    { name: "טכנולוגיה", href: "/" },
    { name: "מדע", href: "/" },
    { name: "תרבות", href: "/" },
    { name: "פודקאסטים", href: "" },
    { name: "פוליטי", href: "/" },
    { name: "בעולם", href: "/" },
    { name: "משפט", href: "/" },
    { name: "כלכלה", href: "/" },
    { name: "ספורט", href: "/" },
    {
      name: "More",
      href: "/",
    },
  ];

  return (
    <nav className="flex flex-row-reverse bg-[linear-gradient(90deg,_#C11A20_0%,_#E21F26_100%)] dark:bg-black shadow-[0px_12px_30px_rgba(0,0,0,0.15)] dark:shadow-[0px_12px_30px_rgba(255,255,255,0.1)] z-50 h-[67px] w-full sticky top-0 px-[150px]">
      <section className="w-3/3">
        <ul className="flex flex-row-reverse items-center justify-between h-full">
          {navLinks.map((link) =>
            link.isLogo === true ? (
              <li key={link.name}>
                <Link href={link.href}>
                  <Image src={link.logo} alt="Logo" width={100} height={100} />
                </Link>
              </li>
            ) : link.name === "More" ? (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-white-200 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-md hover:bg-white/10"
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-white-200 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-md hover:bg-white/10"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
      <section className="w-1/3 flex justify-center items-center gap-10">
        <div className="text-white font-medium">יום רביעי כ׳ בתמוז התשפ״ה</div>
        <Image
          src="https://t4.ftcdn.net/jpg/05/59/28/91/360_F_559289170_iqYEig3oOxZT8X97BlqK8x8Eyng6VQHS.jpg"
          alt="LIVE ICON"
          width={50}
          height={50}
          className="cursor-pointer rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg"
        />
      </section>
    </nav>
  );
}

export default NavBar;
