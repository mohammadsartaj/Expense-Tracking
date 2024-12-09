import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Get Started Today!</h2>
        <p className="text-xl mb-8">
          Join thousands of users who are simplifying their expense tracking and
          sharing.
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-500 hover:bg-gray-100"
        >
          Sign Up for Free
        </Button>
      </div>
    </section>
  );
}
