import { Link } from 'react-router-dom';

export default function Frameworks() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Strategic Frameworks</h1>
          <p className="text-xl text-gray-300 mb-12">
            Simple, structured blueprints designed to give you clarity and control over your financial life.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-navy-800 p-8 rounded-xl shadow hover:shadow-2xl transition">
              <h2 className="text-3xl font-heading mb-4 text-white">Iron Pot Millionaire</h2>
              <p className="text-gray-300 mb-6">
                A discipline-first wealth model built on minimalism, sacrifice, and long-term execution.
              </p>
              <ul className="text-left text-sm text-gray-400 mb-6 space-y-2">
                <li>• Strip spending to essentials</li>
                <li>• Aggressive debt destruction</li>
                <li>• Relentless savings and investing</li>
              </ul>
              <Link
                to="/frameworks/iron-pot"
                className="inline-block bg-crimson hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl shadow hover:shadow-2xl transition">
              <h2 className="text-3xl font-heading mb-4 text-white">Wealth Architecture</h2>
              <p className="text-gray-300 mb-6">
                A blueprint for building durable financial systems that survive volatility.
              </p>
              <ul className="text-left text-sm text-gray-400 mb-6 space-y-2">
                <li>• Cash, defense, offense layers</li>
                <li>• Automations and safeguards</li>
                <li>• Long-term allocation logic</li>
              </ul>
              <Link
                to="/frameworks/wealth-architecture"
                className="inline-block bg-crimson hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl shadow hover:shadow-2xl transition">
              <h2 className="text-3xl font-heading mb-4 text-white">Scenario Planning</h2>
              <p className="text-gray-300 mb-6">
                A strategic approach to preparing for economic uncertainty and life's financial ambushes.
              </p>
              <ul className="text-left text-sm text-gray-400 mb-6 space-y-2">
                <li>• Job loss, recession, emergency paths</li>
                <li>• Pre-made playbooks</li>
                <li>• Stress-testing your plan</li>
              </ul>
              <Link
                to="/frameworks/scenario-planning"
                className="inline-block bg-crimson hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
