import brandLogo1 from "../assets/images/brandlogo1.svg";
import brandLogo2 from "../assets/images/brandlogo2.svg";
import brandLogo3 from "../assets/images/brandlogo3.svg";
import brandLogo4 from "../assets/images/brandlogo4.svg";
import brandLogo5 from "../assets/images/brandlogo5.svg";
import brandLogo6 from "../assets/images/brandlogo6.svg";
import brandLogo7 from "../assets/images/brandlogo7.svg";
import brandLogo8 from "../assets/images/brandlogo8.svg";
import blueBlob from "../assets/images/blueblob.png";
import purpleBlob from "../assets/images/purpleblob.png";
import redBlob from "../assets/images/redblob.png";

// Icons
import teleComm from "../assets/images/teleComm.svg";
import realEstate from "../assets/images/realEstate.svg";
import insurance from "../assets/images/insurance.svg";
import education from "../assets/images/education.svg";
import eCommerce from "../assets/images/eCommerce.svg";
import healthcare from "../assets/images/healthcare.svg";
import bankingFinance from "../assets/images/bankingFinance.svg";
import itBPO from "../assets/images/it&BPO.svg";
import manufac from "../assets/images/manufac.svg";
import governSector from "../assets/images/governSector.svg";
import hospital from "../assets/images/hospital.svg";
import logistics from "../assets/images/logistics.svg";

// process vectors
import process1 from "../assets/images/process1.png";
import process2 from "../assets/images/process2.png";
import process3 from "../assets/images/process3.png";
import process4 from "../assets/images/process4.png";


export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Company", href: "#company" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blogs", href: "#blogs" },
];

export const trustedLogos = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  brandLogo7,
  brandLogo8
];


export const solutions = [
  {
    id: "ai",
    name: "Nexus.AI",
    image: blueBlob,
    description:
      "Custom AI agents to handle repetitive tasks, mitigating human errors, so that your team can focus on high-value strategic initiatives.",
    tags: ["AI Consulting", "AI Transformation", "AI Agents & Automation", "AI Implementation"],
  },
  {
    id: "build",
    name: "Nexus.Build",
    image: purpleBlob,
    description:
      "From MVPs to full products, we deliver high quality software solutions with speed, flexibility and confidence in every feature and every sprint built for scale.",
    tags: ["Product Strategy", "AI-first Products", "Business Automation"],
  },
  {
    id: "labs",
    name: "Nexus.Labs",
    image: redBlob,
    description:
      "Our research wing is constantly developing and pioneering new disruptive ideas for future innovation. We're building tomorrow, today, with real research.",
    tags: ["Technology Consulting", "Change Management", "Technology Strategy"],
  },
];

export const industries = [
  {
    icon: realEstate,
    name: "Real Estate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: insurance,
    name: "Insurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: bankingFinance,
    name: "Banking & Finance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: education,
    name: "Education & EdTech",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: eCommerce,
    name: "E-commerce & Retail",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: healthcare,
    name: "Healthcare",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: teleComm,
    name: "Telecommunications",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },

  {
    icon: itBPO,
    name: "IT & BPO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },

  {
    icon: manufac,
    name: "Manufacturing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: governSector,
    name: "Government & Public Sector",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: hospital,
    name: "Hospitality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
  {
    icon: logistics,
    name: "Logistics & Transport",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, fillout consectetur.",
  },
];


export const processSteps = [
  {
    icon: process1,
    title: "Understanding Requirements",
    desc: "We understand what your goals and needs are!",
  },
  {
    icon: process2,
    title: "Strategy & Design",
    desc: "We come up with a roadmap and a design sprint for a solution.",
  },
  {
    icon: process3,
    title: "Development",
    desc: "We develop a solution and integrate it into your system",
  },
  {
    icon: process4,
    title: "Evolution & Support",
    desc: "We manage the scale, capacity, and capabilities of the solution as the needs evolve.",
  },
];

export const stats = [
  { num: "₹500 Cr", label: "Value Created" },
  { num: "340%", label: "Average ROI" },
  { num: "73%", label: "Fastest Time to Market" },
  { num: "100%", label: "Strategies Executed" },
];

export const footerLinks = {
  Solutions: ["Nexus.AI", "Nexus.Build", "Nexus.Labs"],
  Company: ["About", "Careers", "Blog"],
  Products: ["Case Studies", "Pricing", "Changelog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};