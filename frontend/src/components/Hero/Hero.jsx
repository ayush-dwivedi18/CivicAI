import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="bg-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            AI Powered <br />
            Constituency Development Platform
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Empowering citizens to report local issues,
            analyze public feedback using AI,
            and help representatives make smarter development decisions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Report an Issue
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
              Explore Dashboard
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-[500px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;