import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="lg:mt-48 md:mt-32 mt-24 py-20 bg-bg1 w-full lg:px-0 px-4">
      {/* testimonial wrapper */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* profile picture, name */}
        <div className="flex flex-col justify-center items-center lg:gap-1 gap-2">
          <div className="relative lg:w-[100px] lg:h-[100px] w-[64px] h-[64px]">
            <Image
              src={"/ahmed-omar.jpg"}
              alt="ahmed omar testimonial happy customer"
              fill
              className="rounded-full"
            />
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <h6 className="lg:h6-tablet h6-mobile text-custom-black-600">
              Ahmed Omar
            </h6>
            <h6 className="lg:paragraph paragraph-mobile text-custom-black-500">
              CEO of Hahal Agency
            </h6>
          </div>
        </div>
        {/* review text */}
        <p className="text-center paragraph text-custom-black-500 max-w-2xl ">
         Aura Interiors transformed our outdated living room into a modern,
          stylish space that we absolutely love. Their attention to detail and
          ability to understand our vision was exceptional. The team managed
          everything seamlessly, from design to execution.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
