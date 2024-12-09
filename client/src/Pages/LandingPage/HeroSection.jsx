import { Button } from "@/components/ui/button";
// import { url } from "inspector";
import img1 from "../../assets/img1.jpg";

export default function HeroSection() {
  return (
    <section className="w-screen pt-32 pb-16 px-4 bg-gray-900 text-white">
      {/* Container for responsiveness */}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Track Your Expenses with Ease
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            Gain control of your finances with our intuitive expense tracking
            solution. Visualize your spending habits and make informed
            decisions.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg">
            Explore More
          </Button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Gradient Background for Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform rotate-3"></div>

            {/* Replace Next.js Image with Standard img */}
            <img
              src={img1}
              alt="Expense Tracking App"
              width="600"
              height="400"
              className="inset-0 rounded-2xl shadow-2xl relative z-10 transform rotate-3 p-2"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
