import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="relative bg-navy-900 text-white pt-32 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
             style={{
               backgroundImage: `linear-gradient(rgba(5,10,20,0.65), rgba(5,10,20,0.75)), url('/flag_distressed.jpg')`
             }}>
        </div>

        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Financial Autonomy for Americans Who Refuse to Be Average
          </h1>

          <p className="text-xl md:text-2xl mb-10 opacity-90">
            A disciplined, strategic path to wealth — built on responsibility, grit, and long-term thinking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/frameworks"
               className="bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition">
              Start Here
            </Link>

            <a href="#newsletter"
               className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full text-xl font-semibold transition">
              Join the Newsletter
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-8 text-white">Why This Matters</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            America rewards discipline, responsibility, and long-term thinking — but most people never build the systems
            that allow them to take control of their money and their future. Real American Finance exists to change that.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-white">Core Principles</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-navy-800 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-heading mb-4 text-white">Discipline Over Emotion</h3>
              <p className="text-gray-300">Wealth is built through consistent action, not impulse or motivation.</p>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-heading mb-4 text-white">Minimalism With Purpose</h3>
              <p className="text-gray-300">Cut the noise. Reduce the clutter. Focus on what moves you forward.</p>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-heading mb-4 text-white">Strategic Wealth Building</h3>
              <p className="text-gray-300">Money grows when it's directed by a plan, not by chance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-8 text-white">Who This Is For</h2>
          <p className="text-xl leading-relaxed text-gray-300 mb-8">
            Real American Finance is built for people who want to take ownership of their financial lives — not through shortcuts,
            hacks, or hype, but through discipline, clarity, and long-term execution.
          </p>

          <ul className="text-left max-w-2xl mx-auto text-lg space-y-4 text-gray-300">
            <li>• People tired of living paycheck to paycheck</li>
            <li>• People who want a clear, strategic path to wealth</li>
            <li>• People who value responsibility and personal autonomy</li>
            <li>• People who want to build a legacy, not just income</li>
          </ul>
        </div>
      </section>

      <section id="newsletter" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-8 text-white">Join the Newsletter</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get disciplined financial insights, frameworks, and strategy — straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-4 rounded-lg bg-navy-800 text-gray-200 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-crimson"
            />
            <button
              type="submit"
              className="bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
