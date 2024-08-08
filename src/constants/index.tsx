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

export const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: user1,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: user2,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "David Johnson",
    role: "Attorney",
    image: user3,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "Ronee Brown",
    role: "Attorney",
    image: user4,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "Michael Wilson",
    role: "Attorney",
    image: user5,
    linkedin: <Linkedin />,
    email: <Mail />,
    linkedin_id: "https://www.linkedin.com/",
    mail_id: "mailto:<email-here>",
    achievements: [],
  },
  {
    name: "Emily Davis",
    role: "Attorney",
    image: user6,
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
