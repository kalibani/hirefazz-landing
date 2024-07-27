import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    name: "Brissia Elsya",
    designation: "Recruiter @ BCA Digital",
    image: "/images/testimonial/review1.webp",
    review: "review1",
  },
  {
    id: uuid(),
    name: "Dimas Witcaksono",
    designation: "Founder @ Pimjo",
    image: "/images/testimonial/review2.webp",
    review: "review2",
  },
  {
    id: uuid(),
    name: "Shafiq Rohman",
    designation: "CEO @ Berry Trada",
    image: "/images/testimonial/review4.webp",
    review: "review3",
  },
];
