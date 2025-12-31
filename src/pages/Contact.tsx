export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Contact</h1>
          <p className="text-xl text-gray-300 mb-12">
            Have a question, collaboration idea, or want to get in touch?
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-navy-800 p-10 rounded-xl">
            <div className="mb-12 text-center">
              <a
                href="mailto:contact@realamericanfinance.com"
                className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition"
              >
                Email Me
              </a>
            </div>

            <div className="border-t border-white/10 pt-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-white text-center">What to Expect</h2>

              <div className="space-y-6 text-gray-300">
                <div className="bg-navy-900 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">Response Time</h3>
                  <p>I aim to respond to all emails within 48 hours. Expect thoughtful replies, not quick ones.</p>
                </div>

                <div className="bg-navy-900 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">What I Can Help With</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Questions about the frameworks or content</li>
                    <li>Collaboration or partnership opportunities</li>
                    <li>Media inquiries</li>
                    <li>Feedback or suggestions</li>
                  </ul>
                </div>

                <div className="bg-navy-900 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-2 text-white">What I Can't Help With</h3>
                  <p>
                    Real American Finance does not provide personalized financial advice. For specific financial planning
                    or investment guidance, please consult with a certified financial advisor.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-12 text-center">
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">Stay Connected</h2>
              <p className="text-gray-300 mb-6">
                Follow along on social media for daily insights on discipline, strategy, and wealth building.
              </p>

              <div className="flex justify-center gap-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h3l-7.5 8.5L22 22h-6l-4.5-6L7 22H2l7.5-8.5L2 2h6l4 5.5z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.8-8.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 6v6h-4v-5.3c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V21h-4z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.9 4.5 12 4.5 12 4.5h-.1s-3.9 0-6.9.4c-.4 0-1.3.1-2.1.9C2.2 6.5 2 8 2 8S1.8 9.6 1.8 11.3v1.4C1.8 14.4 2 16 2 16s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.8.2 7.8.4 7.8.4s3.9 0 6.9-.4c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.6.2-3.3v-1.4c0-1.7-.2-3.3-.2-3.3zM10 14.7V9.3l5.2 2.7z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
