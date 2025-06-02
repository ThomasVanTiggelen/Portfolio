import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Over Mij | Mijn Portfolio</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-primary-dark to-primary text-secondary px-4 sm:px-6 font-sans py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center text-accent hover:text-accent/80 transition-colors">
              ← Terug Naar Home
            </Link>
            <h1 className="text-3xl font-mono font-medium">Over Mij</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="relative h-64 w-64 mx-auto rounded-xl overflow-hidden border-2 border-accent/30 shadow-lg hover:shadow-accent/20 transition-all duration-300">
                <Image
                  src="/images/wiebenikfoto.jpeg"
                  alt="Thomas Van Tiggelen"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-accent/20 shadow-lg">
              <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Thomas Van Tiggelen
              </h2>
              
              <p className="text-lg mb-4 text-secondary/90">
                <span className="font-medium text-accent">21 jaar</span> | <span className="font-medium text-accent">Fullstack Developer</span> | <span className="font-medium text-accent">Passie voor technologie</span>
              </p>

              <div className="prose prose-invert max-w-none mb-6">
                <p className="mb-3">
                  Al sinds mijn kinderjaren ben ik gefascineerd door computers en technologie. Dit is uitgegroeid tot een volwaardige passie voor programmeren en software ontwikkeling.
                </p>
                <p>
                  Ik ben gemotiveerd om continu te leren en mijn vaardigheden te verbeteren, zowel in bekende technologieën als nieuwe innovaties in het vakgebied.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <a 
                  href="https://www.linkedin.com/in/thomas-van-tiggelen-10968b2a2/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md transition-all hover:shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Mijn vaardigheden
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Java', 'C#', 'Git', 'Tapestry'].map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-accent/10 hover:bg-accent/20 text-accent rounded-full text-sm transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-accent/20 shadow-lg relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl"></div>
  
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary inline-block">
            Stagegegevens
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-accent/30 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-accent/20 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Bedrijfsinformatie</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium text-accent min-w-[120px]">Naam:</span>
                  <span>Pension Architects</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-accent min-w-[120px]">Locatie:</span>
                  <span>België</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-accent min-w-[120px]">Sector:</span>
                  <span>Pensioenbeheer & Softwareontwikkeling</span>
                </div>
                <div>
                  <p className="mt-4 text-secondary/90 leading-relaxed">
                    Pension Architects is een Belgisch bedrijf dat sinds 2009 gespecialiseerd is in het administratief en actuarieel beheer van pensioenplannen. Ze combineren hun kennis van pensioenen met technologie om processen te automatiseren en te optimaliseren.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-accent/30 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-accent/20 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Mijn rol</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Junior Java Developer binnen het developmentteam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Meewerken aan sprints en toegewezen tickets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Bugfixes en kleine systeemverbeteringen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Werken aan de stabiliteit van het interne beheersysteem</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white/5 rounded-lg p-5 border border-white/10 hover:border-accent/30 transition-all relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-accent/20 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Stage-inhoud</h3>
            </div>
            
            <p className="text-secondary/90 leading-relaxed">
              Tijdens mijn werkplekleren kreeg ik een gevarieerd takenpakket binnen het developmentteam van Pension Architects. Per sprint werden mij tickets toegewezen met een bepaalde moeilijkheidsgraad (uitgedrukt in story points). Ik werkte aan zowel lage- als hogeprioriteitstaken, waaronder bugfixes, systeemoptimalisaties en opdrachten. Dit gaf mij de kans om diverse aspecten van het systeem te leren kennen en mijn Java-vaardigheden verder te ontwikkelen.
            </p>
          </div>
        </div>
     </div>
   </div>
  </>
)}