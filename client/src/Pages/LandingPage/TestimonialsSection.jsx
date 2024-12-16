export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Freelancer",
      quote:
        "ExpenseShare has made managing project expenses with clients so much easier!",
    },
    {
      name: "Jane Smith",
      role: "Student",
      quote:
        "Splitting bills with roommates is no longer a headache thanks to this app.",
    },
    {
      name: "Mike Johnson",
      role: "Team Lead",
      quote:
        "Our team uses ExpenseShare for all our business trips. It's a game-changer!",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md font-semibold"
            >
              <p className="text-gray-800 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-black">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}