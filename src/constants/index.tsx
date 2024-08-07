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
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    review:
      "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    review:
      "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    review:
      "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    review:
      "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    review:
      "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    review:
      "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
