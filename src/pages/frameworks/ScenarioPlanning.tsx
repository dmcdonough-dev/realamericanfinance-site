export default function ScenarioPlanning() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Scenario Planning</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Pre-built responses to the financial shocks most people never prepare for. When something hits, you don't improvise — you execute.
          </p>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">Core Idea</h2>
            <p className="text-lg text-gray-300 mb-4">
              Scenario Planning is about thinking through the worst-case situations before they happen and building
              playbooks so you know exactly what to do when they arrive. It removes panic, eliminates guesswork, and
              gives you confidence that you can handle whatever comes.
            </p>
            <p className="text-lg text-gray-300">
              Most people wait until a crisis hits, then scramble to figure it out. By then, it's too late to make
              good decisions. Scenario Planning lets you stress-test your financial life in advance and prepare
              responses when you're thinking clearly.
            </p>
          </div>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">Key Scenarios to Plan For</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Job Loss</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Your income disappears, but your expenses don't. What do you do on day 1, day 30, and day 90?
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>How many months can you survive on savings?</li>
                  <li>What expenses get cut immediately?</li>
                  <li>What backup income sources can you activate?</li>
                  <li>When do you file for unemployment or tap emergency funds?</li>
                </ul>
              </div>

              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Market Downturn</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Your investments drop 20%, 30%, 40%. Emotions spike. What's your plan?
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Do you hold, sell, or buy more?</li>
                  <li>How much cash do you keep on hand to avoid panic selling?</li>
                  <li>What triggers would force you to adjust your strategy?</li>
                  <li>How do you stay disciplined when everyone around you is panicking?</li>
                </ul>
              </div>

              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Unexpected Expense</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Health emergency, car breakdown, family crisis, legal issue. Something expensive and urgent hits.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>What accounts do you tap first?</li>
                  <li>How do you avoid high-interest debt?</li>
                  <li>What spending gets paused to cover the cost?</li>
                  <li>How do you rebuild your buffer afterward?</li>
                </ul>
              </div>

              <div className="border-l-4 border-crimson pl-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Income Reduction</h3>
                <p className="text-lg text-gray-300 mb-3">
                  Pay cut, reduced hours, business slowdown. Your income drops but doesn't disappear entirely.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>What's your new baseline budget?</li>
                  <li>What lifestyle adjustments happen immediately?</li>
                  <li>How do you maintain savings and investments?</li>
                  <li>What steps do you take to restore full income?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">How to Build Your Playbooks</h2>
            <ol className="list-decimal list-inside text-lg text-gray-300 space-y-4">
              <li>
                <strong className="text-white">Define the scenarios:</strong> Pick 3-5 realistic financial shocks that
                could happen to you based on your life, career, and situation.
              </li>
              <li>
                <strong className="text-white">Map the timeline:</strong> For each scenario, define what happens on
                day 1, day 30, and day 90. Be specific.
              </li>
              <li>
                <strong className="text-white">Pre-decide your responses:</strong> What will you cut, sell, pause, or
                double down on? Write it down now so you don't have to decide under pressure.
              </li>
              <li>
                <strong className="text-white">Tie to your Wealth Architecture:</strong> Make sure funding sources are
                clear — which layer provides the cash for each scenario?
              </li>
              <li>
                <strong className="text-white">Review annually:</strong> As your life and numbers change, update your
                playbooks to reflect your current reality.
              </li>
            </ol>
          </div>

          <div className="bg-navy-900 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">When to Use It</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
              <li>You want to feel prepared for financial uncertainty</li>
              <li>You've experienced a shock before and never want to be caught off guard again</li>
              <li>You're risk-averse and want backup plans in place</li>
              <li>You're building wealth and want to protect it from disruption</li>
              <li>You value peace of mind and strategic thinking</li>
            </ul>
          </div>

          <div className="bg-crimson/10 border border-crimson p-8 rounded-xl">
            <h2 className="text-2xl font-heading font-bold mb-4 text-white">Key Principle</h2>
            <p className="text-lg text-gray-300">
              Scenario Planning works because it removes fear, uncertainty, and emotional decision-making. When you've
              already thought through the worst-case scenario, you can act with clarity and confidence instead of panic.
            </p>
          </div>

          <p className="mt-12 text-center text-gray-500">
            Scenario Planning playbook PDF with fillable templates coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
