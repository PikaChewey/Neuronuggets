import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Neuronuggets | Scientific News Portal',
  description: 'Learn about our mission to make scientific news accessible and engaging for everyone.',
}

export default function AboutPage() {
  const team = [
    {
      name: 'Siya Patel',
      role: 'Editor-in-Chief',
      bio: 'blahblah',
      color: 'neural-red'
    }
  ]

  return (
    <div className="min-h-screen relative">      
      {/* main content */}
      <div className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-screen-xl">
          {/* hero */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="title-large mb-6">About Neuronuggets</h1>
              <p className="body-large max-w-3xl mx-auto mb-12">
                Bringing science to everyone—engaging, bite-sized articles on new discoveries. Inspired by a wholistic approach to research, made for curious minds on the go!
              </p>
            </div>
          </section>
          
          {/* what we do */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="title-medium text-center mb-12">What We Do</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-lg shadow-md p-6 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-neural-red/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neural-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="title-small mb-3">Research Summaries</h3>
                  <p className="body-small text-foreground/80">
                    blah blah
                  </p>
                </div>
                
                <div className="bg-card rounded-lg shadow-md p-6 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-space-blue/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="title-small mb-3">Title</h3>
                  <p className="body-small text-foreground/80">
                    blah blah blah
                  </p>
                </div>
                
                <div className="bg-card rounded-lg shadow-md p-6 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-precision-teal/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-precision-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="title-small mb-3">Title</h3>
                  <p className="body-small text-foreground/80">
                    blah blah blah blah
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* team */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="title-medium text-center mb-12">Our Team</h2>
              
              <div className="max-w-md mx-auto">
                {team.map((member) => (
                  <div key={member.name} className="bg-space-blue/5 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-precision-teal/20 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center p-5">
                      <div className={`h-16 w-16 rounded-full bg-${member.color}/10 flex-shrink-0 flex items-center justify-center mr-5`}>
                        <div className={`text-${member.color} w-8 h-8 relative z-10`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="title-small mb-1 text-space-blue">{member.name}</h3>
                        <p className={`text-${member.color} font-medium text-sm mb-2`}>{member.role}</p>
                        <p className="body-small text-space-blue/70">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* join us */}
          <section>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="title-medium mb-6">Join Our Mission</h2>
              <p className="body-medium max-w-3xl mx-auto mb-8">
                Whether you&apos;re a scientist looking to share your research, a science enthusiast, or someone simply curious
                about how the brain works, there&apos;s a place for you in our community.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link href="/articles" className="btn btn-neural">
                  Explore Articles
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 