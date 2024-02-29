import TourImage from "../assets/images/tour-image.jpg";
import WhyUs from "../components/WhyUs";
import AboutUs from "./AboutUs";
import Corporate from "./Corporate";
import Group from "./Group";
import Single from "./Single";
import Study from "./Study";
import Couple from "./couple";
import Location from "./Location";

export default function LandingPage() {
  return (
    <div className="bg-base-200 rounded-lg  ml-5 mr-5 mt-10">
      <h1 className="overflow-hidden pt-7 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to{" "}
        <span className="text-blue-600 dark:text-blue-500 underline">
          Ghure Ashi
        </span>{" "}
        Bangladesh
      </h1>

      <div className="hero bg-base-200 mt-10">
        <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
          <img
            src={TourImage}
            className="ml-10 mr-10 w-2/3 rounded-lg shadow-2xl"
          />
          <div className="w-2/3 overflow-hidden">
            <p className="py-3 text-justify">
              Welcome to Ghure Ashi, your gateway to unforgettable travel
              experiences! We are a travel agency passionate about helping you
              discover the world, one adventure at a time. Whether you&apos;re
              seeking relaxation on pristine beaches, exploration in bustling
              cities, or cultural immersion in ancient lands, Ghure Ashi is here
              to craft the perfect itinerary for you.
            </p>
            <p className="text-justify">
              We understand that travel is more than just visiting a place;
              it&apos;s about immersing yourself in new cultures, connecting
              with diverse people, and creating memories that last a lifetime.
              That&apos;s why we go beyond simply booking flights and hotels. We
              tailor each trip to your unique desires, whether you seek: We
              believe that travel is not just a journey, it&apos;s a
              transformative experience. It has the power to broaden your
              horizons, challenge your perspectives, and create lasting personal
              growth. Whether you&apos;re returning to a beloved destination or
              venturing into uncharted territory, each trip has the potential to
              leave an indelible mark on your soul. With Ghure Ashi, you can
              embark on a journey that not only takes you to breathtaking
              destinations but also ignites your sense of wonder and leaves you
              with a renewed appreciation for the world and your place within
              it.
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
      <Corporate />
      <Study />
      <Single />
      <Group />
      <Couple />
      <AboutUs />
      <Location />
    </div>
  );
}
