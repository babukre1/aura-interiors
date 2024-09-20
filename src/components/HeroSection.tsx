const HeroSection = () => {
  return (
    <section className=" bg-cover bg-center bg-hero-image w-full xl:h-screen md:h-[600px] h-[360px] mt-[80px] xl:mt-0 ">
      <div className="flex justify-center items-center h-full">
        <div className="text-center mx-auto w-full  lg:max-w-3xl md:max-w-2xl">
          <h1 className="h1 lg:h1 md:h1-tablet h2-mobile text-center text-custom-black-100 ">
            Creative Designs, Elevating Everyday Living
          </h1>
          <button
            className="md:py-3 md:px-7 py-2 px-4 text-base text-custom-black-100 capitalize
           rounded-2xl lg:text-lg font-bold mx-auto larken bg-secondary shadow-2xl hover:bg-[rgba(255,255,255,0.5)]"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;