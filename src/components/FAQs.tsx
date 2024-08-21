"use client";
import { useState } from "react";
import Image from "next/image";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer:
      "At Aura Interiors, we offer a comprehensive range of interior design services, including residential and commercial design, space planning, color consultation, furniture selection, and custom cabinetry. We also provide project management to ensure a seamless execution from concept to completion.",
  },
  {
    question: " How do you charge for your services?",
    answer:
      "Our pricing structure is tailored to each project’s unique needs. We offer various pricing models, including hourly rates, flat fees, and project-based pricing. During our initial consultation, we will discuss your specific requirements and provide a detailed quote based on the scope of work.",
  },
  {
    question: "Can you work within my budget",
    answer:
      "Absolutely! We believe that great design is possible on any budget. We work closely with our clients to understand their budget constraints and prioritize their needs to create a beautiful and functional space. We offer solutions and recommendations that align with your financial plan.",
  },
  {
    question: "How involved will I be in the design process?",
    answer:
      "Your involvement is crucial to the success of the project. We encourage our clients to participate actively in the design process. We will collaborate with you at every stage, from the initial concept to final installation, ensuring your vision and preferences are fully realized.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "The duration of a project depends on its size and complexity. A simple room makeover can take a few weeks, while a full home or office redesign may take several months. During our initial consultation, we will provide a timeline based on your specific project requirements and keep you updated throughout the process.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lg:mt-48 md:mt-32 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/faqs-section-image.jpg"
              alt="FAQ Image"
              width={941}
              height={0}
              className="h-auto rounded-xl"
            />
          </div>
          {/* FAQs */}
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="h6-mobile text-center text-primary mb-2 lg:text-left">
                  FAQs
                </h6>
                <h2 className="h4 text-center text-custom-black-600 mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div className="max-w-[700px]">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b py-3 border-solid border-gray-200"
                  >
                    {/* Question */}
                    <button
                      className="group inline-flex   justify-between h6-mobile text-custom-black-600 w-full transition duration-500 hover:text-primary"
                      onClick={() => handleToggle(index)}
                    >
                      <h5 className="w-full lg:text-left text-center h6 text-custom-black-600">
                        {faq.question}
                      </h5>
                      <svg
                        className={`transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180 text-primary" : ""
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    {/* answer */}
                    <div
                      className={`overflow-hidden transition-max-height duration-5 ease-in-out ${
                        activeIndex === index ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <p className="paragraph text-custom-black-500 mt-4 lg:text-left text-center lg:max-w-none max-w-[460px] lg:mx-0 mx-auto">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
