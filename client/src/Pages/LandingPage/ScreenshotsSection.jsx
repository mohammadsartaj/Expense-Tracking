export default function ScreenshotsSection() {
  const screenshots = [
    {
      src: "https://dummyimage.com/1280x720/fff/aaa",
      alt: "Expense entry form",
    },
    {
      src: "https://dummyimage.com/1280x720/fff/aaa",
      alt: "Group summary report",
    },
    {
      src: "https://dummyimage.com/1280x720/fff/aaa",
      alt: "Notifications and balance sheet",
    },
  ];

  return (
    <section className="py-20 bg-slate-810">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-violet-800 font-bold text-center mb-12">
          App Screenshots
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={400}
                  height={300}
                  className="rounded-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-center text-gray-600">{screenshot.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
