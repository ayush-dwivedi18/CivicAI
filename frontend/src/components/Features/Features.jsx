function Features() {
  const features = [
    {
      title: "Report Local Issues",
      description:
        "Citizens can report road damage, water problems, electricity issues, and more.",
      icon: "📍",
    },
    {
      title: "AI Analysis",
      description:
        "AI automatically analyzes complaints and identifies priority issues.",
      icon: "🤖",
    },
    {
      title: "Interactive Map",
      description:
        "Visualize reported issues on an interactive constituency map.",
      icon: "🗺️",
    },
    {
      title: "Smart Dashboard",
      description:
        "Representatives get insights, analytics, and recommendations.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700">
        Why Choose CivicAI?
      </h2>

      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        Empowering citizens and representatives with AI-powered decision making.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="text-xl font-bold mt-5">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;