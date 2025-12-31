export default function WealthArchitecture() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Wealth Architecture</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Design your financial life like a system, not a series of reactions. Every dollar has a job. Every account has a purpose.
          </p>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">Core Idea</h2>
            <p className="text-lg text-gray-300 mb-4">
              Wealth Architecture is about building financial systems that work automatically, scale efficiently, and
              survive volatility. It's not about individual transactions — it's about creating a durable structure that
              compounds over time.
            </p>
            <p className="text-lg text-gray-300">
              Most people treat money reactively — paying bills, reacting to emergencies, making decisions in the moment.
              Wealth Architecture flips that. You design the system once, automate the flows, and let it run.
            </p>
          </div>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">The Three-Layer Model</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Layer 1: Cash</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Your liquidity layer. This is operating cash, emergency funds, and short-term reserves.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Emergency fund: 3-6 months of expenses</li>
                  <li>Operating cash: 1-2 months buffer for bills and daily life</li>
                  <li>Short-term reserves: Planned purchases, taxes, known expenses</li>
                </ul>
              </div>

              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Layer 2: Defense</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Your protection layer. This is insurance, buffers, legal structure, and risk management.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Health, life, disability insurance</li>
                  <li>Liability protection and legal safeguards</li>
                  <li>Income diversification and backup plans</li>
                </ul>
              </div>

              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Layer 3: Offense</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Your growth layer. This is investments, income expansion, and asymmetric opportunities.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Retirement accounts and long-term investments</li>
                  <li>Taxable brokerage for wealth building</li>
                  <li>Business ventures and alternative investments</li>
                  <li>Skill development and income optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">How to Build Your Architecture</h2>
            <ol className="list-decimal list-inside text-lg text-gray-300 space-y-4">
              <li>
                <strong className="text-white">Map your current state:</strong> List all accounts, assets, and cash
                flows. Categorize them into the three layers.
              </li>
              <li>
                <strong className="text-white">Identify gaps:</strong> Missing emergency fund? Weak defense? No offense?
                Write down what's broken or missing.
              </li>
              <li>
                <strong className="text-white">Set clear targets:</strong> Define specific numbers for each layer —
                months of expenses, coverage levels, allocation percentages.
              </li>
              <li>
                <strong className="text-white">Automate contributions:</strong> Set up automatic transfers so the system
                builds itself over time without willpower.
              </li>
              <li>
                <strong className="text-white">Review quarterly:</strong> Check progress, adjust targets, rebalance as
                life changes.
              </li>
            </ol>
          </div>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">When to Use It</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
              <li>You want to organize your financial life into a coherent system</li>
              <li>You're tired of feeling reactive and want to feel in control</li>
              <li>You have multiple accounts and no clear structure</li>
              <li>You want to balance safety with growth</li>
              <li>You're ready to build wealth that lasts decades, not months</li>
            </ul>
          </div>

          <div className="bg-crimson/10 border border-crimson p-8 rounded-xl">
            <h2 className="text-2xl font-heading font-bold mb-4 text-white">Key Principle</h2>
            <p className="text-lg text-gray-300">
              Wealth Architecture works because it removes decision fatigue, creates clarity, and builds momentum through
              automation. Once the system is in place, it runs whether you're motivated or not.
            </p>
          </div>

          <p className="mt-12 text-center text-gray-500">
            Visual Wealth Architecture diagram and downloadable workbook coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
