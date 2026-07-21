function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            CivicAI
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            AI Powered Constituency Development Platform that helps citizens
            report issues and enables representatives to make smarter decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-400 cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 support@civicai.com
          </p>

          <p className="text-gray-400 mt-3">
            📍 India
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 py-5 text-center text-gray-400">
        © 2026 CivicAI. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;