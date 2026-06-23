import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="bg-blush">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 py-16 sm:py-24 text-center">
          <span className="eyebrow">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3">
            Inspired By Nature,<br />Crafted For You
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-10">
        <div>
          <h2 className="font-display text-2xl text-ink mb-3">Who We Are</h2>
          <p className="font-body text-ink/80 leading-relaxed">
            EVORA is a Sri Lankan fragrance house dedicated to producing
            high-quality perfumes inspired by nature. Every scent in our
            collection draws from something real , a flower, a fruit, a
            memory , and is built to reflect the personality and lifestyle of
            the person who wears it.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink mb-3">Our Purpose</h2>
          <p className="font-body text-ink/80 leading-relaxed">
            We exist to offer a collection of premium fragrances inspired by
            nature, paired with a seamless online shopping experience. Our
            aim is simple: help you discover the scent that feels like you,
            and make getting it as effortless as possible.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink mb-3">Made Locally</h2>
          <p className="font-body text-ink/80 leading-relaxed">
            EVORA is locally developed in Sri Lanka, offering fragrances for
            both men and women , from the tropical brightness of Araliya to
            the bold warmth of Chocolate. We're proud to build a fragrance
            brand rooted in home soil with a presence that reaches further.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
