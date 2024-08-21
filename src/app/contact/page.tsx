import Container from "@/components/Container";
import FAQs from "@/components/FAQs";

export default function Contact() {
  return (
    <Container className="min-h-screen mt-20 max-w-screen-2xl mx-auto">
      {/* Contact Form */}
      <section className="w-full flex flex-col md:items-start items-center md:px-32 px-8  mt-16">
        <div>
          <div>
            <h1 className="lg:h1-bold md:h1-tablet-bold h1-mobile-bold">
              Contact Us
            </h1>
            <p className="lg:paragraph paragrapg-mobile  max-w-md">
              We&apos;re here to help you bring your interior design dreams to life.
              Reach out to us today!
            </p>
          </div>
          <div className="max-w-[640px] mt-16">
            <form className="w-full flex flex-col gap-4">
              {/* Name, Email */}
              <div className="flex md:gap-8 gap-4 w-full md:flex-row flex-col">
                <div className="flex flex-col w-full">
                  <h6 className="h6-mobile">Full Name</h6>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h6 className="h6-mobile">Email Address</h6>
                  <input
                    type="email"
                    className="custom-input"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              {/* Message input */}
              <div>
                <label htmlFor="message" className="h6-mobile">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="custom-input"
                  placeholder="Hi Aura Interiors..."
                />
              </div>
              {/* Timeline and Budget */}
              <div className="flex gap-4 sm:gap-8  w-full sm:flex-row flex-col">
                <div className="flex flex-col  w-full">
                  <h6 className="h6-mobile">Your Budget Range</h6>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="700$>"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h6 className="h6-mobile">Your Timeline</h6>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="3 weeks - 1 month"
                  />
                </div>
              </div>
              <button className="py-4 text-custom-black-100 capitalize rounded-full text-lg font-bold mx-auto larken bg-secondary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* FAQs Section */}
      <FAQs />
    </Container>
  );
}
