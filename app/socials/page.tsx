import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Connect With Us | Neuronuggets',
  description: 'Follow Neuronuggets on LinkedIn for the latest updates on neuroscience research and breakthroughs.',
}

const socialPlatform = {
  name: 'LinkedIn',
  handle: 'Neuronuggets',
  description: 'Professional updates and in-depth articles on neuroscience research',
  followers: '8.5K',
  color: 'bg-blue-700',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  link: 'https://linkedin.com/company/neuronuggets'
};

export default function SocialsPage() {
  return (
    <main className="min-h-screen relative z-10">
      {/* i need a hero */}
      <section className="pt-32 pb-16 bg-transparent">
        <div className="golden-container mx-auto">
          <h1 className="title-xl mb-6 text-center">Connect With Us</h1>
          <p className="body-lg text-center max-w-3xl mx-auto mb-8">
            Join our growing community of neuroscience enthusiasts, researchers, and curious minds.
            Follow us on LinkedIn to stay updated on the latest discoveries and breakthroughs.
          </p>
        </div>
      </section>
      
      {/* social media card */}
      <section className="py-16 bg-transparent">
        <div className="golden-container mx-auto">
          <h2 className="title-md mb-8 text-center">Find Us On Social Media</h2>
          
          <div className="max-w-md mx-auto">
            <Link 
              href={socialPlatform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e9b872] backdrop-blur-sm rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg block"
            >
              <div className="bg-[#ff7f50] h-3"></div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="text-lab-white bg-[#ff7f50] p-3 rounded-lg mr-4">
                    {socialPlatform.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-lab-white">{socialPlatform.name}</h3>
                    <p className="text-sm text-gray-400">{socialPlatform.handle}</p>
                  </div>
                </div>
                
                <p className="text-white text-sm mb-4 flex-grow">
                  {socialPlatform.description}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* media contact */}
      <section className="py-16 bg-transparent">
        <div className="golden-container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-md mb-5">Media Contact</h2>
            <p className="body-md mb-6">
              For any inquiries, please contact:
            </p>
            <div className="inline-block bg-[#e9b872] backdrop-blur-sm rounded-lg px-8 py-6">
              <h3 className="font-display font-semibold mb-2 text-lab-white">Siya</h3>
              <p className="text-sm mb-1 text-lab-white">Editor in Chief</p>
              <p className="text-lab font-medium mb-4">blahblah@gmail.com</p>
              <p className="text-xs text-white">
                We aim to respond to all media inquiries within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 