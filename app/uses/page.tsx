import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Uses | Manish Kumar",
  description: "Tools, software, and gear used on a daily basis by Manish Kumar.",
};

const USES_DATA = [
  {
    category: "Software",
    items: [
      { label: "Video Screening", name: "OBS Studio + OpenScreen", link: "https://obsproject.com/" },
      { label: "Screenshots Mockup", name: "Shots so", link: "https://shots.so/" },
      { label: "Video Editing", name: "VN Android App", link: "https://play.google.com/store/apps/details?id=com.frontrow.vlog" },
      { label: "Image Editing", name: "PixelLab Android App", link: "https://play.google.com/store/apps/details?id=com.imaginstudio.imagetools.pixellab" },
      { label: "Auto Caption", name: "AutoCap Android App ( Paid )", link: "https://play.google.com/store/apps/details?id=com.laika.kinetictypovid" },
      { label: "Notes", name: "Notion", link: "https://www.notion.so/" },
      { label: "Chat / Community", name: "Discord", link: "https://discord.gg/VxxfMdM6eN" },
      { label: "Music", name: "YouTube Music", link: "https://music.youtube.com/" },
      { label: "Website Inspiration", name: "Pinterest", link: "https://in.pinterest.com/" },
      { label: "Coding / Development", name: "VsCode", link: "https://code.visualstudio.com/" },
    ],
  },
  {
    category: "Hardware",
    items: [
      { label: "Keyboard", name: "EvoFox Katana S Mini Mechanical Keyboards", link: "https://amzn.to/3QZIRKq" },
      { label: "Mouse", name: "Arctic Fox Pureview Transparent Wireless Mouse", link: "https://amzn.to/4vQdktE" },
      { label: "Laptop", name: "HP 255 G10", link: "https://www.google.com/search?q=hp+255+g10+laptop" },
      { label: "Monitor", name: 'Kreo Obsidian 27I100Q 27" QHD IPS Monitor', link: "https://amzn.to/4gh7Lzr" },
      { label: "Laptop Stand", name: "Portronics My Buddy K Lite Foldable Laptop Stand", link: "https://amzn.to/4y6l4ZM" },
      { label: "Table Mat", name: "OIVO INDIA PU Vegan Leather Mouse Pad", link: "https://amzn.to/44dMvDr" },
      { label: "Gaming Chair", name: "DROGO AuraXI Limited Edition Gaming Chair", link: "https://amzn.to/4f3W5xH" },
      { label: "Multiport Hub", name: "ZEBRONICS CT81 (8 in 1) Multiport HUB", link: "https://amzn.to/44enOXt" },
      { label: "Earbuds", name: "Nothing CMF Buds 2A", link: "https://www.google.com/search?q=nothing+cmf+buds+2a" },
      { label: "Phone", name: "Oppo K13 5G", link: "https://www.google.com/search?q=oppo+k13+5g" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="uses-layout">
      <div className="uses-container standard-container">
        <SectionTitle>/uses</SectionTitle>
        <p className="uses-description">
          Tools, software, and gear I use on a daily basis.
        </p>

        {USES_DATA.map((cat) => (
          <div key={cat.category} className="uses-category">
            <h3 className="uses-category-title">{cat.category}</h3>
            <div className="uses-list">
              {cat.items.map((item, idx) => (
                <div key={idx} className="uses-item">
                  <span className="uses-item-label">{item.label}</span>
                  <span className="uses-item-sep">&mdash;</span>
                  <span className="uses-item-name">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </span>
                  {item.link && <FaExternalLinkAlt className="uses-item-link-icon" />}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="view-all-projects">
          <Link href="/" className="view-all-btn" aria-label="back to home">
            <FiArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>
          <Link href="/projects" className="view-all-btn" aria-label="View Projects">
            <span>View Projects</span>
            <FiArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
