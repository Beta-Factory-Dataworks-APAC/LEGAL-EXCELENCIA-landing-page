import { BotMessageSquare, Linkedin, Mail } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "@/assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#law-services" },
  { label: "Testimonials", href: "#testimonials" },
];

export const color = {
  primary: "#02123E",
  secondary: "#FFC0CB",
  tertiary: "#758493",
  quaternary: "#276BAF",
};

export const teamMembers = [
  {
    name: "VISHAL SHARMA",
    role: "Founder of LEGAL EXCELENCIA, brings 15 years of expertise in civil, criminal, and corporate litigation, and 8 years of specialization in Intellectual Property Rights, representing top entities at the Punjab & Haryana High Court and Supreme Court.",
    // image: user1,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "SHANTANU SINGH",
    role: "With a decade of legal expertise, specializes in Intellectual Property and Cyber Laws. Holding advanced degrees in IP Law and Cyber Law, he serves as a panel advocate for both government and private insurance companies.",
    // image: user2,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "AJAY PAL SINGH",
    role: "With 14 years of experience, specializes in legal drafting, vetting for top corporate clients, and Intellectual Property Rights, including trademarks, copyrights, and designs. His portfolio includes serving renowned companies like Infosys Ltd. and JW Marriot Hotel.",
    // image: user3,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "DHAWAL BHANDARI",
    role: "Dhawal Bhandari, with 15 years of experience, has a broad legal practice across the Supreme Court of India, Punjab & Haryana High Court, Delhi High Court, and various tribunals like CAT and DRT in Chandigarh and Delhi.",
    // image: user4,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "JAISURYA JAIN",
    role: "A legal expert since 2013 with specialization from Harvard, excels in Civil Laws and Commercial Contracts, particularly in Real Estate, Banking, and Employment Laws. He has successfully represented major government bodies and embassies in litigation matters across various legal forums.",
    // image: user5,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "VIREN SIBAL",
    role: "VIREN SIBAL has been enrolled with the Bar Council of Delhi since 2017. He is a Third Generation Lawyer, who has a modern, fresh and eclectic approach towards litigation, all while preserving traditional values. He has also been working in the field of Intellectual Property Rights and deals with Intellectual Property Rights Registration and litigation.",
    // image: user6,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "PARITOSH ANAND",
    role: "Paritosh Anand, a legal professional since 2021, specializes in Intellectual Property Rights with a focus on Trademark Registration, Industrial Designs, Patents, and Copyrights, including related litigation.",
    // image: user6,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
];

export const testimonials = [
  {
    user: "Rajesh Kapoor",
    company: "CEO, TechInnovate Solutions Pvt. Ltd.",
    image: user1,
    review:
      "LEGAL EXCELENCIA has been instrumental in protecting our intellectual property. Their team's expertise in patent law helped us secure crucial patents for our latest tech innovations. Their proactive approach and clear communication made the complex process much smoother. Highly recommended for any tech company looking to safeguard their innovations.",
  },
  {
    user: "Priya Sharma",
    company: "HR Director, GreenLeaf Organics",
    image: user2,
    review:
      "We engaged LEGAL EXCELENCIA for some tricky employee disputes, and I'm impressed with their handling of sensitive matters. Their litigation team showed great skill in negotiation, often resolving issues before they escalated to court. Their understanding of labor laws is top-notch, and they always kept us informed at every step.",
  },
  {
    user: "Amit Gupta",
    company: "Founder, StartUp Launchpad",
    image: user3,
    review:
      "As a startup founder, I needed comprehensive legal support without breaking the bank. LEGAL EXCELENCIA delivered exactly that. From company incorporation to drafting shareholder agreements, they guided us through every legal aspect of setting up our business. Their corporate law team is not just knowledgeable but also understands the unique challenges startups face.",
  },
  {
    user: "Neha Reddy",
    company: "Real Estate Developer, Skyline Builders",
    image: user4,
    review:
      "I've worked with several law firms over the years, but LEGAL EXCELENCIA stands out for their real estate expertise. They handled our land acquisitions with great diligence, conducting thorough due diligence that saved us from potential legal pitfalls. Their attention to detail in contract drafting is impressive.",
  },
  {
    user: "Vikram Malhotra",
    company: "CFO, GlobalTrade Enterprises",
    image: user5,
    review:
      "When our company decided to expand internationally, we turned to LEGAL EXCELENCIA for guidance on cross-border regulations and compliance. Their team's multi-jurisdictional expertise was invaluable. They helped us navigate complex legal landscapes with ease, ensuring our expansion was smooth and compliant. Their commitment to understanding our business needs sets them apart.",
  },
];
