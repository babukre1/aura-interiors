import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="lg:mt-48 md:mt-32 mt-24 flex flex-col justify-center items-center gap-8 w-full px-8 ">
      <h4 className="lg:h4 md:h4-tablet h4-mobile text-custom-black-600">
        Featured & Trusted By:
      </h4>
      <div className="flex justify-center md:flex-nowrap flex-wrap  gap-16 items-center">
        <div className="relative">
          <Image
            src={"/Hormuud.png"}
            alt="Trusted By Hormuud Co. "
            className="h-auto"
            width={260}
            height={0}
          />
        </div>
        <div className="relative">
          <Image
            src={"/IBS-bank.png"}
            alt="Trusted By Hormuud Co. "
            className="h-auto"
            width={260}
            height={0}
          />
        </div>
        <div className="relative">
          <Image
            src={"/shafi-hospital.png"}
            alt="Trusted By Hormuud Co. "
            width={140}
            height={164}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
