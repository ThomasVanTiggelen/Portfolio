import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const titleRef = useRef('Welkom op mijn blog')

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (currentIndex < titleRef.current.length) {
        setDisplayText(prev => prev + titleRef.current[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        clearInterval(typingEffect)
      }
    }, 150)

    return () => clearInterval(typingEffect)
  }, [currentIndex])

  return (
    <>
      <Head>
        <title>Mijn Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my internship experiences" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet" />
      </Head>

      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center">
          <div className="mr-2 animate-pulse hidden sm:flex items-center bg-accent/10 px-3 py-1 rounded-full">
            <span className="text-accent text-sm font-medium mr-1">Mijn Profiel</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="text-accent"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <Link 
            href="/about" 
            className="relative block w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 border-accent hover:border-secondary transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
            aria-label="About me"
          >
            <Image
              src="/images/wiebenikfoto.jpeg"
              alt="Profile picture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-sm md:text-base font-medium text-white">Over mij</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-primary-dark to-primary text-secondary px-4 sm:px-6 font-sans">
      
        <header className="container mx-auto py-16 text-center">
          <div className="inline-block text-left border-l-4 border-accent pl-6">
            <h1 className="text-4xl sm:text-5xl font-mono font-medium mb-2 tracking-tight text-secondary">
              <span>{displayText}</span>
              <span className="ml-1.5 animate-pulse">▋</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary/80 mt-3">
              Graduaat Programmeren | Werkplekleren
            </p>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl grid md:grid-cols-5 gap-8 mb-16">
          
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-3">Over de Stage</h2>
              <p className="text-secondary/90 leading-relaxed mb-4">
                Tijdens mijn stage werk ik aan een afsluitend project dat mij
                voorbereidt op de arbeidsmarkt. Mijn doel is om als toekomstige web-
                en applicatieontwikkelaar zelfstandig taken uit te voeren en
                waardevolle ervaring op te doen. Hierbij focus ik op
                kerncompetenties zoals samenwerking, technisch ontwerp,
                applicatieontwikkeling, testen en documentatie.
              </p>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-4 py-2 bg-accent text-primary-dark rounded-md text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                {isExpanded ? 'Samenvouwen' : 'Meer lezen'}
              </button>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h2 className="text-xl font-semibold mb-3">De Bedoeling van deze Website/Blog</h2>
                  <p className="text-secondary/80 leading-relaxed">
                    Deze website dient als een digitaal portfolio waar ik mijn
                    stage-ervaringen deel. Via de blog houd ik je op de hoogte van mijn
                    voortgang, uitdagingen en successen. Elke week post ik een update
                    met de highlights van mijn stage, zoals technische uitdagingen,
                    trotsmomenten en nieuwe technologieën.
                  </p>
                  <br />
                  <h2 className="text-xl font-semibold mb-3">Waarom deze Website?</h2>
                  <p className="text-secondary/80 leading-relaxed">
                    Deze website is niet alleen een reflectie van mijn stage, maar ook
                    een manier om mijn groei als ontwikkelaar te documenteren. Het is
                    een plek waar ik mijn ervaringen kan delen, van mijn fouten kan
                    leren en mijn successen kan vieren. Na mijn stage kan ik dit
                    portfolio gebruiken bij sollicitaties om mijn vaardigheden en
                    ervaringen te laten zien.
                  </p>
                </div>
              )}
            </div>

            <div className="hidden md:block bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-medium mb-3">Laatste blogpost</h3>
              <p className="text-sm text-secondary/80 italic mb-2">
                "Week 16: Grids en Export Tickets"
              </p>
              <button 
                onClick={() => router.push('/blog')}
                className="text-xs px-3 py-1 bg-primary/20 text-secondary rounded hover:bg-primary/30 transition-colors hover:scale-[1.02]"
              >
                Lees verder →
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div 
              className="h-full bg-secondary/10 hover:bg-secondary/15 transition-colors rounded-xl border-2 border-dashed border-secondary/30 flex flex-col items-center justify-center p-8 cursor-pointer group"
              onClick={() => router.push('/blog')}
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
                <h3 className="text-xl font-medium mb-2">Verken de blog</h3>
                <p className="text-secondary/80 mb-4 text-sm">
                 Wekelijkse aantekeningen over mijn groei
                </p>
                <div className="inline-flex items-center gap-1 px-4 py-2 bg-accent text-primary-dark rounded-md text-sm font-medium">
                  Lees berichten
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
          .typing-animation {
            display: inline-block;
            overflow: hidden;
            border-right: 2px solid #FFEBD0;
            white-space: nowrap;
            animation: 
              typing 3.5s steps(30, end), 
              blink-caret 0.75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #FFEBD0 }
          }
        `}
      </style>
    </>
  )
}