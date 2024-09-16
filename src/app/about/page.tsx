import Container from "@/components/Container";
import Image from "next/image";

export default function About() {
  return (
    <Container className="flex flex-col min-h-screen ">
      <section className="w-full lg:h-[658px] md:h-[480px] h-[400px] mt-20 bg-about-hero-image bg-cover bg-center flex items-center justify-center px-4">
        <h1 className="lg:h1 md:h1-tablet h2-mobile-regular text-custom-black-100 lg:max-w-full  maxw text-center">
          Our Story: Crafting Exceptional Interiors
        </h1>
      </section>
      {/* who we are */}
      <section className="flex flex-col items-center justify-center lg:mt-48 md:mt-32 mt-24 xl:px-32 lg:px-16 px-4">
        <h3 className="h3 text-custom-black-600">Who we Are?</h3>
        <div className="w-full mt-16">
          {/* 1 */}
          <AboutInfo
            src="/whoWeAre.jpg"
            alt="who we are Image"
            description="Aura Interiors is a premier interior design agency dedicated to transforming spaces into luxurious and functional
             environments. Our team of passionate and skilled designers brings a wealth of experience and creativity to
              each project, ensuring that every detail is meticulously crafted to meet our clients' vision and needs.
               With a commitment to excellence and a keen eye for aesthetics, we pride ourselves
                on delivering exceptional design solutions that inspire and delight."
            reversed={false}
            className=""
          />
        </div>
      </section>
      {/* About CTA */}
      <section className="w-full lg:mt-48 md:mt-32 mt-24">
        <div className="bg-about-cta-image w-full h-[730px] bg-cover bg-center flex flex-col items-center justify-center">
          <div className="relative text-center mx-auto w-full py-4">
            <div className="absolute inset-0 bg-black opacity-40 z-10" />
            <div className="relative z-20 text-center mx-auto w-full py-4">
              <h3 className="h3-bold text-white">
                Transform Your Space with Us
              </h3>
              <button className="mt-8 py-4 px-8 bg-primary text-white capitalize rounded-full text-lg font-bold hover:bg-transparent hover:border hover:border-white ease-in-out hover:text-white overflow-hidden">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* what we do sectin */}
      <section className="flex flex-col items-center justify-center lg:mt-48 md:mt-32 mt-24 xl:px-32 lg:px-16 px-4">
        <h3 className="h3 text-custom-black-600">What we Do??</h3>
        <div className="w-full mt-16 mb-8">
          {/* 1 */}
          <AboutInfo
            src="/whatWeDo1.jpg"
            alt="who we are Image"
            description="At Aura Interiors, we specialize in transforming spaces with our comprehensive interior 
            design services. Our expertise includes optimizing space layouts, curating stylish interiors with
            carefully chosen furniture and accessories, and providing expert color consultations. We design
            innovative lighting solutions, create bespoke furniture, and select premium materials and finishes
            for a cohesive look. From project management to 3D visualizations, we oversee every aspect of the
            design process."
            reversed={true}
          />
        </div>
        <div className="w-full h-[1px] bg-custom-black-300 my-8" />
        <div className="w-full mt-8">
          {/* 2 */}
          <AboutInfo
            src="/whatWeDo2.jpg"
            alt="who we are Image"
            description=" Our services also encompass sustainable design, renovation and remodeling, art and
            accessory selection, custom window treatments, and functional kitchen and bathroom designs. Our
            mission is to craft stunning interiors that reflect our clients' personalities and lifestyles,
            bringing their dreams to life."
            reversed={false}
          />
        </div>
      </section>
    </Container>
  );
}

const AboutInfo = ({
  src,
  alt,
  description,
  reversed,
  className,
}: {
  src: string;
  alt: string;
  description: string;
  reversed: boolean;
  className?: string;
}) => {
  return (
    <div //  make it flex col < 768px, gap-16 at < 1024
      className={`flex justify-between lg:flex-row flex-col  w-full gap-8  ${
        reversed ? "lg:flex-row-reverse" : ""
      } ${className}`}
    >
      <div
        className={`lg:w-1/2  flex items-center ${
          reversed ? "lg:justify-end" : "lg:justify-start"
        } `}
      >
        <div className="relative xl:w-[570px] xl:h-[360px] lg:w-[440px] lg:h-[410px] w-[400px] h-[282px] mx-auto lg:mx-0 border border-blue-800">
          <Image // 570 at 1440px to 1280px, 500px at 1280px to 1024px, 440px at < 1280
            src={src}
            alt={alt}
            fill
            className="object-cover h-auto"
          />
        </div>
      </div>
      <div // have border left 1.5px with exact height as paragraph with primary color
        className="lg:w-1/2 mx-auto flex items-center lg:justify-start justify-center"
      >
        <p // have border
          className="about-paragraph xl:text-xl lg:text-lg text-base lg:border-none border-l-2 border-primary pl-2 lg:text-left lg:max-w-none max-w-[400px] text-center "
        >
          {description}
        </p>
      </div>
    </div>
  );
};
