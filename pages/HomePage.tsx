

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.tsx';

// Doodles & Decorative Components

const WhimsicalParticleDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => {
    const particleType = React.useMemo(() => ['dot', 'plus', 'ring'][Math.floor(Math.random() * 3)], []);

    let particle;
    switch (particleType) {
        case 'plus':
            particle = (
                <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2"></div>
                </div>
            );
            break;
        case 'ring':
             particle = <div className="w-full h-full border border-current rounded-full"></div>;
            break;
        case 'dot':
        default:
            particle = <div className="w-full h-full bg-current rounded-full"></div>;
            break;
    }
    
    return (
        <div className={`absolute z-0 pointer-events-none ${className}`} style={style}>
            {particle}
        </div>
    );
};

const CrayonFilter: React.FC = () => (
    <defs>
        <filter id="crayonEffect" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="turbulence" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" />
        </filter>
    </defs>
);

const CloudDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <svg viewBox="0 0 100 60" className={`absolute z-0 pointer-events-none ${className}`} style={style} fill="currentColor">
        <path d="M82.5,35.33A17.44,17.44,0,0,0,67.67,20,15,15,0,0,0,40,20,12.5,12.5,0,0,0,12.5,32.5a12.55,12.55,0,0,0,.29,2.78,10,10,0,0,0-10.29,9.72A10,10,0,0,0,12.5,55H82.5a17.5,17.5,0,0,0,0-35Z" transform="translate(0 -5)" />
    </svg>
);

const WhimsicalMountainDoodle: React.FC = () => (
    <div className="absolute bottom-0 left-0 w-full h-2/5 z-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 500 200" preserveAspectRatio="xMidYMax slice" className="absolute bottom-0 left-0 w-full h-full">
            <CrayonFilter />
            {/* Clouds */}
            <path d="M110,60 C90,60 70,70 90,80 L140,85 C170,90 180,70 160,65 C150,60 130,55 110,60 Z" fill="white" opacity="0.6" />
            <path d="M300,75 C280,75 270,85 290,95 L330,100 C360,105 370,85 350,80 C340,75 320,70 300,75 Z" fill="white" opacity="0.4" />

            {/* Back mountain layer */}
            <path d="M-10,210 L150,50 Q160,40 170,50 L280,140 L380,80 Q390,75 400,80 L510,160 V210 Z" fill="#d1b0b4" opacity="0.25" filter="url(#crayonEffect)" />
            
            {/* Front mountain layer (more triangular) */}
            <path d="M-10,210 L80,100 Q90,90 100,100 L220,30 Q230,20 240,30 L350,130 L450,90 Q460,85 470,90 L510,120 V210 Z" fill="#c9a9ad" opacity="0.3" filter="url(#crayonEffect)" />
        </svg>
    </div>
);

const MinimalMountainDoodle: React.FC = () => (
     <div className="absolute bottom-0 left-0 w-full h-1/4 z-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <CrayonFilter />
            <path d="M-5,105 C 150, 60, 350, 80, 505, 50 V 105 Z" fill="#e7d4d9" opacity="0.2" filter="url(#crayonEffect)" />
            <path d="M-5,105 C 100, 80, 280, 90, 505, 70 V 105 Z" fill="#f5e4df" opacity="0.25" filter="url(#crayonEffect)" />
        </svg>
    </div>
);


const SnowflakeDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-0 pointer-events-none text-[#d1b0b4]/70 animate-float-down ${className}`} style={style}>
        <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M15 3 V 27 M 5.2 8 L 24.8 22 M 5.2 22 L 24.8 8" />
        </svg>
    </div>
);

const PetalDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-0 pointer-events-none text-[#e7d4d9] opacity-40 animate-fall ${className}`} style={style}>
        <svg viewBox="0 0 20 30" fill="currentColor">
            <path d="M10 0 C0 10, 0 20, 10 30 C20 20, 20 10, 10 0 Z" />
        </svg>
    </div>
);

// Main Component

const HomePage: React.FC = () => {
  const [activeNav, setActiveNav] = useState('none');

  const imageSets: { [key: string]: string[] } = {
    none: ['origin_spark_00', 'code_chronicles_00', 'behind_the_syntax_00'],
    origin: ['origin_spark_1', 'origin_spark_2', 'origin_spark_3'],
    code: ['code_chronicles_1', 'code_chronicles_2', 'code_chronicles_3'],
    behind: ['behind_the_syntax_1', 'behind_the_syntax_2', 'behind_the_syntax_3']
  };
  
  const getImagePath = (name: string): string => {
    if (name.startsWith('origin_spark') || name.startsWith('code_chronicles') || name === 'behind_the_syntax_00') {
      return `/images/${name}.png`;
    }
    return `/images/${name}.jpg`;
  };

  const currentImages = imageSets[activeNav].map(getImagePath);

  return (
    <div className="w-full h-screen overflow-hidden flex font-playfair text-[#66496a]">
      <Header />
      {/* Left Section */}
      <section className="w-1/3 h-full bg-[#f5e4df] flex flex-col justify-center items-center p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/subtle-zebra-3d.png')] opacity-5"></div>
        
        {/* Doodles */}
        <WhimsicalMountainDoodle />
        <CloudDoodle className="top-[10%] -left-1/4 w-48 text-white/70 animate-gentle-float" style={{ animationDuration: '10s' }}/>
        <CloudDoodle className="top-[20%] -right-1/4 w-64 text-white/50 animate-gentle-float" style={{ animationDuration: '14s', animationDelay: '2s' }}/>
        
        <PetalDoodle className="w-4 left-[10%]" style={{ animationDuration: '15s', animationDelay: '2s' }} />
        <PetalDoodle className="w-6 left-[80%]" style={{ animationDuration: '12s', animationDelay: '5s' }} />
        <PetalDoodle className="w-3 left-[40%]" style={{ animationDuration: '18s', animationDelay: '9s' }} />
        
        <SnowflakeDoodle className="w-5 left-[50%]" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <SnowflakeDoodle className="w-4 left-[20%]" style={{ animationDuration: '22s', animationDelay: '6s' }} />
        <SnowflakeDoodle className="w-6 left-[85%]" style={{ animationDuration: '18s', animationDelay: '3s' }} />
        <SnowflakeDoodle className="w-3 left-[5%]" style={{ animationDuration: '25s', animationDelay: '10s' }} />
        <SnowflakeDoodle className="w-4 left-[65%]" style={{ animationDuration: '19s', animationDelay: '13s' }} />
        <SnowflakeDoodle className="w-5 left-[30%]" style={{ animationDuration: '17s', animationDelay: '1s' }} />
        <SnowflakeDoodle className="w-3 left-[75%]" style={{ animationDuration: '24s', animationDelay: '5s' }} />
        <SnowflakeDoodle className="w-6 left-[15%]" style={{ animationDuration: '21s', animationDelay: '8s' }} />
        <SnowflakeDoodle className="w-4 left-[95%]" style={{ animationDuration: '23s', animationDelay: '12s' }} />
        <SnowflakeDoodle className="w-4 left-[55%]" style={{ animationDuration: '20s', animationDelay: '15s' }} />
        
        {/* Whimsical Particles */}
        <WhimsicalParticleDoodle className="animate-float-down w-1 h-1" style={{ left: '10%', animationDuration: '22s', animationDelay: '5s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-[2px] h-[2px]" style={{ left: '30%', animationDuration: '18s', animationDelay: '1s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-1.5 h-1.5" style={{ left: '50%', animationDuration: '25s', animationDelay: '10s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-[2px] h-[2px]" style={{ left: '70%', animationDuration: '20s', animationDelay: '3s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-1 h-1" style={{ left: '90%', animationDuration: '19s', animationDelay: '8s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-1 h-1" style={{ top: '15%', left: '20%', animationDelay: '0s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-[2px] h-[2px]" style={{ top: '40%', left: '80%', animationDelay: '2s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-1.5 h-1.5" style={{ top: '75%', left: '60%', animationDelay: '4s' }} />


        <div className="relative z-10">
            <h1 className="font-dancing text-6xl font-bold mb-8 text-shadow-lg">Sivanvita</h1>
            <p className="text-lg italic max-w-sm mb-8">
              Debugging code by day, designing emotion by night—with pets and passion in every frame.
            </p>
            <Link to="/get-in-touch" className="bg-gradient-to-br from-[#66496a] to-[#8b6f8a] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              Get In Touch
            </Link>
        </div>
      </section>

      {/* Middle Section */}
      <section className="w-1/3 h-full bg-[#e7d4d9] flex flex-col justify-center items-center p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')] opacity-5"></div>
        
        {/* Doodles */}
        <CloudDoodle className="top-[15%] left-[10%] w-24 text-white/50 animate-gentle-float" style={{ animationDuration: '12s' }}/>
        <CloudDoodle className="bottom-[15%] right-[10%] w-20 text-white/40 animate-gentle-float" style={{ animationDuration: '15s', animationDelay: '3s' }}/>
        
        <PetalDoodle className="w-5 left-[20%]" style={{ animationDuration: '14s', animationDelay: '1s' }} />
        <PetalDoodle className="w-4 left-[70%]" style={{ animationDuration: '18s', animationDelay: '6s' }} />
        <PetalDoodle className="w-5 left-[50%]" style={{ animationDuration: '16s', animationDelay: '11s' }} />
        {/* FIX: Removed invalid `text` prop. The `PetalDoodle` component does not accept a `text` prop. */}
        <PetalDoodle className="w-3 left-[30%]" style={{ animationDuration: '20s', animationDelay: '3s' }} />
        {/* FIX: Removed invalid `text` prop. The `PetalDoodle` component does not accept a `text` prop. */}
        <PetalDoodle className="w-4 left-[60%]" style={{ animationDuration: '22s', animationDelay: '8s' }} />
        <PetalDoodle className="w-3 left-[90%]" style={{ animationDuration: '17s', animationDelay: '12s' }} />
        <PetalDoodle className="w-4 left-[5%]" style={{ animationDuration: '25s', animationDelay: '0s' }} />
        <PetalDoodle className="w-3 left-[45%]" style={{ animationDuration: '15s', animationDelay: '9s' }} />
        
        {/* Whimsical Particles */}
        <WhimsicalParticleDoodle className="animate-float-down w-1.5 h-1.5" style={{ left: '15%', animationDuration: '20s', animationDelay: '2s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-[2px] h-[2px]" style={{ left: '45%', animationDuration: '24s', animationDelay: '7s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-1 h-1" style={{ left: '65%', animationDuration: '17s', animationDelay: '4s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-1 h-1" style={{ left: '85%', animationDuration: '21s', animationDelay: '9s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-1 h-1" style={{ top: '25%', left: '10%', animationDelay: '1s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-[2px] h-[2px]" style={{ top: '55%', left: '90%', animationDelay: '3s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-1.5 h-1.5" style={{ top: '85%', left: '30%', animationDelay: '5s' }} />


        <nav 
            className="relative z-10 flex flex-col items-center gap-20"
            onMouseLeave={() => setActiveNav('none')}
          >
          <Link 
            to="/origin-sparks" 
            onMouseEnter={() => setActiveNav('origin')}
            className="relative font-dancing text-4xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] py-2 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:transition-transform after:duration-300 after:ease-out after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:origin-center"
          >
            Origin Spark
          </Link>
          <Link 
            to="/code-chronicles" 
            onMouseEnter={() => setActiveNav('code')}
            className="relative font-dancing text-4xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] py-2 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:transition-transform after:duration-300 after:ease-out after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:origin-center"
          >
            Code Chronicles
          </Link>
          <Link 
            to="/behind-the-syntax" 
            onMouseEnter={() => setActiveNav('behind')}
            className="relative font-dancing text-4xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] py-2 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:transition-transform after:duration-300 after:ease-out after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:origin-center"
          >
            Behind the Syntax
          </Link>
        </nav>
      </section>

      {/* Right Section */}
      <section className="w-1/3 h-full bg-[#d1b0b4] flex justify-center items-center p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] opacity-5"></div>
        
        {/* Doodles */}
        <MinimalMountainDoodle />
        <PetalDoodle className="w-6 left-[15%]" style={{ animationDuration: '16s', animationDelay: '3s' }} />
        <PetalDoodle className="w-4 left-[85%]" style={{ animationDuration: '20s', animationDelay: '8s' }} />
        <PetalDoodle className="w-5 left-[50%]" style={{ animationDuration: '14s', animationDelay: '1s' }} />

        <SnowflakeDoodle className="w-5 left-[75%]" style={{ animationDuration: '19s', animationDelay: '1s' }} />
        <SnowflakeDoodle className="w-6 left-[35%]" style={{ animationDuration: '23s', animationDelay: '6s' }} />
        <SnowflakeDoodle className="w-4 left-[5%]" style={{ animationDuration: '25s', animationDelay: '9s' }} />
        <SnowflakeDoodle className="w-5 left-[95%]" style={{ animationDuration: '21s', animationDelay: '11s' }} />
        <SnowflakeDoodle className="w-3 left-[55%]" style={{ animationDuration: '20s', animationDelay: '4s' }} />
        <SnowflakeDoodle className="w-6 left-[15%]" style={{ animationDuration: '18s', animationDelay: '0s' }} />
        <SnowflakeDoodle className="w-4 left-[45%]" style={{ animationDuration: '24s', animationDelay: '3s' }} />
        <SnowflakeDoodle className="w-5 left-[85%]" style={{ animationDuration: '22s', animationDelay: '7s' }} />
        <SnowflakeDoodle className="w-3 left-[25%]" style={{ animationDuration: '20s', animationDelay: '10s' }} />
        <SnowflakeDoodle className="w-6 left-[65%]" style={{ animationDuration: '25s', animationDelay: '13s' }} />
        
        {/* Whimsical Particles */}
        <WhimsicalParticleDoodle className="animate-float-down w-1 h-1" style={{ left: '5%', animationDuration: '23s', animationDelay: '6s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-[2px] h-[2px]" style={{ left: '25%', animationDuration: '19s', animationDelay: '0s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-1.5 h-1.5" style={{ left: '55%', animationDuration: '26s', animationDelay: '11s' }} />
        <WhimsicalParticleDoodle className="animate-float-down w-1 h-1" style={{ left: '75%', animationDuration: '18s', animationDelay: '5s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-[2px] h-[2px]" style={{ top: '20%', left: '85%', animationDelay: '1.5s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-1.5 h-1.5" style={{ top: '60%', left: '15%', animationDelay: '3.5s' }} />
        <WhimsicalParticleDoodle className="animate-fade-in-out opacity-0 w-1 h-1" style={{ top: '90%', left: '50%', animationDelay: '5.5s' }} />

        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-6">
            {currentImages.map((url, index) => (
                <div 
                    key={url}
                    className="p-1.5 bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl w-60 h-44"
                    >
                    <img 
                        src={url} 
                        alt={`A glimpse into my world ${index + 1}`} 
                        className="w-full h-full object-cover rounded-md" 
                        aria-label={`Portfolio image ${index + 1}`}
                    />
                </div>
            ))}
        </div>

      </section>
    </div>
  );
};

export default HomePage;
