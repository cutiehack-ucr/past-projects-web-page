const Testimonials = () => {
  const testimonials = [
    {
      text: "Testimonial 1",
      name: "Person 1",
    },
    {
      text: "Testimonial 2",
      name: "Person 2",
    },
    {
      text: "Testimonial 3",
      name: "Person 3",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-left mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5"
            >
              <p className="text-black mb-2">
                “{testimonial.text}”
              </p>
              <p className="text-black">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
