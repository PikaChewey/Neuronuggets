'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// helper, cons efx
const FooterLink = ({ href, label }: { href: string, label: string }) => (
  <motion.li 
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Link 
      href={href} 
      className="text-primary/80 hover:text-accent transition-colors duration-200 inline-flex items-center group"
    >
      <span className="h-0.5 w-0 bg-accent group-hover:w-2 transition-all duration-200 mr-0 group-hover:mr-2"></span>
      {label}
    </Link>
  </motion.li>
)

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-6 relative overflow-hidden">
      {/* background dec */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent opacity-30"></div>
        
        {/* lines heh */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q30,40 50,10 T100,30" stroke="url(#gradient1)" fill="none" strokeWidth="0.2" />
          <path d="M0,50 Q40,30 50,50 T100,40" stroke="url(#gradient2)" fill="none" strokeWidth="0.2" />
          <path d="M0,80 Q30,60 50,90 T100,70" stroke="url(#gradient1)" fill="none" strokeWidth="0.2" />
          <path d="M20,0 Q40,30 30,50 T40,100" stroke="url(#gradient2)" fill="none" strokeWidth="0.2" />
          <path d="M70,0 Q60,40 80,50 T60,100" stroke="url(#gradient1)" fill="none" strokeWidth="0.2" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#285a84" />
              <stop offset="100%" stopColor="#285a84" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef6f53" stopOpacity="0" />
              <stop offset="50%" stopColor="#ef6f53" />
              <stop offset="100%" stopColor="#ef6f53" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="golden-container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* brand section */}
          <div className="space-y-4 md:col-span-5">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mr-3 h-10 w-10 rounded-full bg-white border border-primary/80 flex items-center justify-center overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#285a84" strokeWidth="3" />
                  <circle cx="50" cy="30" r="5" fill="#285a84" />
                  <circle cx="30" cy="50" r="5" fill="#285a84" />
                  <circle cx="70" cy="50" r="5" fill="#285a84" />
                  <line x1="50" y1="30" x2="30" y2="50" stroke="#285a84" strokeWidth="2" />
                  <line x1="50" y1="30" x2="70" y2="50" stroke="#285a84" strokeWidth="2" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#285a84" strokeWidth="1.5" opacity="0.8" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-primary">
                Neuro<span className="text-accent">nuggets</span>
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-primary/90 max-w-sm ml-0.5 pl-3 border-l-2 border-primary/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bringing science to everyone—engaging, bite-sized articles on new discoveries from across the frontiers of neuroscience research.
            </motion.p>
          </div>

          {/* nav */}
          <div className="md:col-span-3 md:col-start-8">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-0.5 w-6 bg-accent mr-3"></div>
              <h4 className="text-lg font-display font-semibold text-accent tracking-tight">
                Navigation
              </h4>
            </motion.div>
            
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, staggerChildren: 0.1 }}
            >
              <FooterLink href="/" label="Home" />
              <FooterLink href="/articles" label="Articles" />
              <FooterLink href="/team" label="Team" />
              <FooterLink href="/opportunities" label="Opportunities" />
              <FooterLink href="/socials" label="Connect" />
            </motion.ul>
          </div>
        </div>
        
        {/* bott section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 border border-primary/10 hover:border-accent/50 transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 text-primary/80 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <span className="text-primary/80 group-hover:text-accent transition-colors">LinkedIn</span>
            </a>
          </motion.div>
          
          <div className="text-sm text-primary/60">
            © {new Date().getFullYear()} Neuronuggets. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 