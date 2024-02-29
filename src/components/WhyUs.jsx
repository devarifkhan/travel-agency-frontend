import { FaUmbrellaBeach, FaLightbulb, FaTrophy } from "react-icons/fa6";

export default function WhyUs() {
  return (
    <div className="bg-base-200 rounded  ml-5 mr-5 mt-5 mb-5">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className=" my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full   to-gray-400 bg-clip-text font-bold text-3xl sm:text-4xl">
            Embark on your dream adventure
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl  text-center font-medium leading-relaxed tracking-wide">
            We are a travel agency passionate about helping you discover the
            world, one adventure at a time.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border bg-slate-200   p-8 text-center shadow">
            <div
              className="button-text text-3xl mx-auto flex h-12 w-24 items-center justify-center rounded-md border"
              //   style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);"
            >
              <FaLightbulb />
            </div>
            <h3 className="mt-6 text-2xl font-medium">Expert Guidance</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              Our travel consultants are not just booking agents, they are
              seasoned explorers themselves.
            </p>
          </div>

          <div className="rounded-md border bg-slate-200   p-8 text-center shadow">
            <div
              className="text-3xl button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              //   style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);"
            >
              <FaUmbrellaBeach />
            </div>
            <h3 className="mt-6 text-2xl font-medium">Stress-Free Travel</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              Leave the logistics to us. We handle all the nitty-gritty details,
              from booking flights and accommodations.
            </p>
          </div>

          <div className="rounded-md border bg-slate-200   p-8 text-center shadow">
            <div
              className="button-text text-3xl mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              //   style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);"
            >
              <FaTrophy />
            </div>
            <h3 className="mt-6 text-2xl font-medium">Unbeatable Value: </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              We believe in offering exceptional value without compromising on
              quality. We utilize our industry connections and expertise .
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          //   style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          //   style="background-image: linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
        ></div>
      </section>
    </div>
  );
}
