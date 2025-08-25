import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-light.png";
import x from "../../public/x.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import location from "../../public/location.png";

const Footer = () => {
  const footerData = [
    {
      title: "Featured",
      links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
    },
    {
      title: "Shoes",
      links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
    },
    {
      title: "Clothing",
      links: [
        "All Clothing",
        "Modest Wear",
        "Hoodies & Pullovers",
        "Shirts & Tops",
      ],
    },
    {
      title: "Kids",
      links: [
        "Infant & Toddler Shoes",
        "Kids Shoes",
        "Kids Jordan Shoes",
        "Kids Basketball Shoes",
      ],
    },
  ];

  const additionalFooterData = [
    "Guides",
    "Terms of Sale",
    "Terms of Use",
    "Nike Privacy Policy",
  ];

  return (
    <footer className="w-full bg-black">
      <div className="w-full max-w-[1440px] m-auto">
        <div className="p-16 pb-14 flex justify-between gap-10 flex-wrap max-md:px-6">
          <Image
            src={logo}
            alt="logo image"
            height={29}
            width={80}
            style={{ width: "80px", height: "29px" }}
          ></Image>
          <div className="flex gap-[30px] flex-wrap justify-start">
            {footerData.map((item, i) => (
              <div key={i} className="w-[145px]">
                <h3 className="mb-6 text-white">{item.title}</h3>
                <ul className="flex flex-col gap-3.5">
                  {item.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="text-[#757575]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <Link href="www.x.com">
              <Image src={x} alt="x icon"></Image>
            </Link>
            <Link href="www.x.com">
              <Image src={facebook} alt="facebook icon"></Image>
            </Link>
            <Link href="www.instagram.com">
              <Image src={instagram} alt="instagram icon"></Image>
            </Link>
          </div>
        </div>
        <div className="px-12 py-7 flex justify-between flex-wrap gap-10 max-md:px-6">
          <article className="flex gap-3 items-center">
            <Image src={location} alt="location img" width={9} height={13} style={{height: "13px", width:'9px'}}/>
            <p className="text-white text-[12px]">Croatia</p> 
            <p className="text-[#AAAAAA] text-[12px]">
              © 2025 Nike, Inc. All Rights Reserved
            </p>
          </article>
          <ul className="text-[#757575] flex gap-7">
            {additionalFooterData.map((item) => {
              return (
                <li key={item}>
                  <Link href={item}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
