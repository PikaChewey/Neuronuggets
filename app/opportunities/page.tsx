import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Opportunities | Neuronuggets',
  description: 'Join our team of science communicators and contribute to making cutting-edge research accessible to the public.',
}

// curent job  data
const jobOpening = {
  title: 'Staff Writer',
  department: 'Editorial',
  type: 'Full-time',
  location: 'Remote (US/EU)',
  description: 'Join our core team of science writers to produce regular articles across multiple disciplines. Staff writers work closely with editors to develop compelling narratives around scientific discoveries.',
};

// app stages data
const applicationStages = [
  {
    number: 1,
    title: 'Title 1',
    description: 'blah'
  },
  {
    number: 2,
    title: 'Title 2',
    description: 'blah'
  },
  {
    number: 3,
    title: 'Title 3',
    description: 'blah'
  },
  {
    number: 4,
    title: 'Title 4',
    description: 'blah'
  },
  {
    number: 5,
    title: 'title 5',
    description: 'blah'
  }
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen relative z-10">
      {/* hero */}
      <section className="pt-32 pb-16 bg-transparent">
        <div className="golden-container mx-auto">
          <h1 className="title-xl mb-6 text-center">Join Our Team</h1>
          <p className="body-lg text-center max-w-3xl mx-auto mb-8">
            We&apos;re seeking passionate individuals who share our mission of making science accessible. 
            Join our team and help us create engaging content about neuroscience.
          </p>
        </div>
      </section>
      
      {/* current opening section */}
      <section className="py-16 bg-transparent">
        <div className="golden-container mx-auto">
          <h2 className="title-md mb-8 text-center">Current Opening</h2>
          
          <div className="max-w-3xl mx-auto">
            <div 
              className="bg-[#e9b872] backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-lab-white">{jobOpening.title}</h3>
                    <p className="text-lab">{jobOpening.department}</p>
                  </div>
                  <div className="flex space-x-3 mt-2 sm:mt-0">
                    <span className="inline-block px-3 py-1 bg-[#ff7f50] rounded-full text-xs font-medium text-lab-white">
                      {jobOpening.type}
                    </span>
                    <span className="inline-block px-3 py-1 bg-[#ff7f50] rounded-full text-xs font-medium text-lab-white">
                      {jobOpening.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-space-blue mb-4">
                  {jobOpening.description}
                </p>
                
                <div className="flex justify-end">
                  <Link 
                    href="#application-process" 
                    className="px-4 py-2 bg-[#ff7f50] hover:bg-[#ff7f50]/80 text-white font-medium rounded-md transition-colors duration-250"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* application process section */}
      <section id="application-process" className="py-16 bg-transparent">
        <div className="golden-container mx-auto">
          <h2 className="title-md mb-8 text-center">Application Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {applicationStages.map((stage, index) => (
                <div key={index} className="mb-8 relative pl-12">
                  {/* timeline connector */}
                  {index < applicationStages.length - 1 && (
                    <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-lab-white/30"></div>
                  )}
                  
                  {/* stage */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-lab flex items-center justify-center text-space-blue font-semibold">
                    {stage.number}
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold mb-2 text-space-blue">{stage.title}</h3>
                  <p className="text-space-blue text-sm">{stage.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="mailto:blahblah@gmail.com" 
                className="px-6 py-3 bg-[#ff7f50] hover:bg-[#ff7f50]/80 text-white font-medium rounded-md transition-colors duration-250"
              >
                Submit Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 