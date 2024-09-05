import Image from "next/image";
import React from "react";
interface IPortfolioDetails {
  src: string;
}

const portfolioDetails: IPortfolioDetails[] = [
  { src: "/portfolio1.jpg" },
  { src: "/portfolio2.jpg" },
  { src: "/portfolio3.jpg" },
  { src: "/portfolio4.jpg" },
  { src: "/portfolio5.jpg" },
  { src: "/portfolio6.jpg" },
];

const Portfolio = () => {
  return (
    <section className="flex flex-col items-center gap-16 justify-center lg:mt-48 md:mt-32 mt-24 px-12 w-full">
      <div className="max-w-3xl gap-4">
        <h2 className="lg:h2 md:h2-tablet h2-mobile text-custom-black-600 text-center">
          Our Transformative Projects.
        </h2>
        <p className="lg:paragraph md:paragraph-tablet paragraph-mobile text-center text-custom-black-500">
          Explore our diverse portfolio of completed projects that showcase our
          commitment to innovative design and exceptional quality. each project
          highlights our attention to detail and our ability to bring our
          clients&apos; visions to life
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto  text-center gap-4 max-w-[1198px]">
        {portfolioDetails.map((project, index) => (
          <PortfolioImage
            key={index}
            src={project.src}
            alt={`portfolio image ${index + 1}`}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

const PortfolioImage = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) => {
  return (
    <a href="#" className="relative h-auto lg:col-span-1 cursor-pointer">
      <Image
        src={src}
        height={0}
        width={426}
        className="h-auto lg:w-[426px]"
        alt={alt}
      />
    </a>
  );
};

export default Portfolio;
