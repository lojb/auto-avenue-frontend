import {
  quality,
  satisfaction,
  verify,
  facebookLogo,
  instagramLogo,
} from "../assets";
import React from "react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Verified AD's",
    icon: verify,
  },
  {
    title: "Satisfied Customers",
    icon: satisfaction,
  },
  {
    title: "High-quality service",
    icon: quality,
  },
];

const contacts = [
  {
    title: "Facebook",
    icon: facebookLogo,
    source_code_link: "https://facebook.com/",
  },
  {
    title: "Instagram",
    icon: instagramLogo,
    source_code_link: "https://instagram.com/",
  },
];

const testimonials = [
  {
    testimonial:
      "Auto Avenue made it incredibly easy for me to find my dream car and make a hassle-free purchase.",
    name: "Sara Lee",

    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I highly recommend Auto Avenue for its extensive selection, competitive prices, and exceptional customer service.",
    name: "Chris Brown",

    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to Auto Avenue, I sold my old car quickly and effortlessly, and even got a great deal on my new one.",
    name: "Lisa Wang",

    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const manufacturers = [
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Citroen",
  "Ford",
  "Honda",
  "Kia",
  "Lada",
  "Mercedes",
  "Nissan",
  "Peugeot",
  "Porsche",
  "Toyota",
]

export { services, testimonials, contacts, manufacturers };
