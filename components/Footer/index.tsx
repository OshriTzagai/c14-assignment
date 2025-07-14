import Link from "next/link";
import React from "react";

function Footer() {
  const footerLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      name: "Cookie Policy",
      href: "/cookie-policy",
    },
  ];
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center mb-4">
            <p className="text-gray-300 text-sm">
              Channel 14 Assignment - Oshri-el Tzagay
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <Link 
                href={link.href} 
                key={index}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
