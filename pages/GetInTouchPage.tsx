import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

// --- BACKGROUND COMPONENTS ---

const CrayonFilter: React.FC = () => (
    <defs>
        <filter id="crayonEffect" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="turbulence" seed="5" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" />
        </filter>
    </defs>
);

const FloatingCloud: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg viewBox="0 0 100 60" className={`absolute z-0 pointer-events-none ${className}`} style={style} fill="currentColor">
        <path d="M82.5,35.33A17.44,17.44,0,0,0,67.67,20,15,15,0,0,0,40,20,12.5,12.5,0,0,0,12.5,32.5a12.55,12.55,0,0,0,.29,2.78,10,10,0,0,0-10.29,9.72A10,10,0,0,0,12.5,55H82.5a17.5,17.5,0,0,0,0-35Z" transform="translate(0 -5)" />
    </svg>
);

const TwilightMountainscape: React.FC = () => (
    <div className="absolute bottom-0 left-0 w-full h-1/2 z-0 pointer-events-none">
        <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
            <CrayonFilter />
            {/* Layer 3: Farthest mountains (lightest) - #ecd7d4 */}
            <path d="M-10,200 L150,100 Q175,80 200,100 L350,130 L450,90 Q475,70 500,90 L650,140 L750,110 Q775,90 800,110 L810,120 V200 Z" fill="#ecd7d4" filter="url(#crayonEffect)" />

            {/* Layer 2: Mid-ground mountains - #e8d2d0 */}
            <path d="M-10,200 L100,120 Q130,90 160,120 L280,90 Q310,60 340,90 L480,150 L580,80 Q610,50 640,80 L750,130 L810,110 V200 Z" fill="#e8d2d0" filter="url(#crayonEffect)" />

            {/* Layer 1: Foreground mountains (darkest) - #e2c9c8 */}
            <path d="M-10,200 L80,140 L180,70 Q210,40 240,70 L350,150 L450,80 Q480,50 510,80 L620,160 L720,90 Q750,60 780,90 L810,130 V200 Z" fill="#e2c9c8" filter="url(#crayonEffect)" />
        </svg>
    </div>
);


const SnowflakeDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-20 pointer-events-none text-[#c9a9ad]/70 animate-float-down ${className}`} style={style}>
        <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M15 3 V 27 M 5.2 8 L 24.8 22 M 5.2 22 L 24.8 8" />
        </svg>
    </div>
);

const PetalDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-20 pointer-events-none text-[#e7d4d9] opacity-50 animate-fall ${className}`} style={style}>
        <svg viewBox="0 0 20 30" fill="currentColor">
            <path d="M10 0 C0 10, 0 20, 10 30 C20 20, 20 10, 10 0 Z" />
        </svg>
    </div>
);

const MessengerBird: React.FC = () => (
    <div className="absolute bottom-[1cm] left-0 w-32 h-auto pointer-events-none z-5 animate-fly-across" aria-hidden="true">
        <svg viewBox="0 0 100 80" className="w-full h-full text-[#66496a] drop-shadow-lg">
            {/* Right Wing (behind) */}
            <path 
                d="M 60 48 Q 90 28 60 8 C 40 28 60 48 60 48 Z" 
                fill="#e2c9c8" 
                className="animate-bird-flap"
                style={{ transformOrigin: '60px 48px', animationDelay: '0.2s' }}
            />
            {/* Tail */}
            <path 
                d="M 40 55 Q 20 65 35 75 L 50 60 Z" 
                fill="#e8d2d0" 
                stroke="#c9a9ad" 
                strokeWidth="1" 
            />
            {/* Body and Head */}
            <path 
                d="M 45 60 C 35 70, 70 75, 85 55 C 95 40, 70 35, 55 50 C 50 55, 45 60, 45 60 Z" 
                fill="#f5e4df" 
                stroke="#c9a9ad" 
                strokeWidth="1" 
            />
            {/* Eye */}
            <circle cx="83" cy="48" r="1.5" fill="#66496a" />
            {/* Beak & Letter */}
            <path d="M 92 50 L 100 52 L 92 54 Z" fill="#f2c47c" />
            <rect x="90" y="55" width="12" height="8" fill="#FEF9C3" stroke="#e7d4d9" strokeWidth="1" rx="1" />
            {/* Left Wing (front) */}
            <path 
                d="M 55 48 Q 25 28 55 8 C 75 28 55 48 55 48 Z" 
                fill="#e8d2d0" 
                className="animate-bird-flap"
                style={{ transformOrigin: '55px 48px' }}
            />
        </svg>
    </div>
);


// --- MAIN PAGE COMPONENT ---

const ContactInfoItem: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ icon, text, href }) => {
    const content = (
        <div className="flex items-center gap-5 group">
            <div className="flex-shrink-0 w-[46px] h-[46px] bg-[#f2ded9] rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-[#c9a9ad]">
                 <div className="text-[#66496a] transition-colors duration-300 group-hover:text-white">
                    {icon}
                </div>
            </div>
            <span className="font-playfair text-[#66496a] text-lg font-medium transition-colors duration-300 group-hover:text-[#66496a] group-hover:font-semibold">{text}</span>
        </div>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
            {content}
        </a>
    ) : (
        <div className="block">{content}</div>
    );
};

const GetInTouchPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f5e4df] font-playfair overflow-hidden relative flex flex-col items-center justify-center p-4">
            <Header />
            <BackButton />
            
            {/* Animated Clouds */}
            <FloatingCloud className="w-28 h-auto text-white/70 animate-float-side" style={{ top: '8%', left: '-10vw', animationDuration: '50s' }} />
            <FloatingCloud className="w-20 h-auto text-white/60 animate-float-side" style={{ top: '18%', left: '-10vw', animationDuration: '70s', animationDelay: '8s' }} />
            <FloatingCloud className="w-24 h-auto text-white/80 animate-float-side" style={{ top: '4%', left: '-10vw', animationDuration: '45s', animationDelay: '15s' }} />
            <FloatingCloud className="w-36 h-auto text-white/50 animate-float-side" style={{ top: '22%', left: '-10vw', animationDuration: '80s', animationDelay: '25s' }} />
            <FloatingCloud className="w-24 h-auto text-white/60 animate-float-side" style={{ top: '12%', left: '-10vw', animationDuration: '60s', animationDelay: '35s' }} />

            {/* Falling Petals */}
            <PetalDoodle className="w-4 left-[10%]" style={{ animationDuration: '15s', animationDelay: '2s' }} />
            <PetalDoodle className="w-6 left-[80%]" style={{ animationDuration: '12s', animationDelay: '5s' }} />
            <PetalDoodle className="w-3 left-[40%]" style={{ animationDuration: '18s', animationDelay: '9s' }} />
            <PetalDoodle className="w-5 left-[65%]" style={{ animationDuration: '14s', animationDelay: '1s' }} />
            <PetalDoodle className="w-4 left-[25%]" style={{ animationDuration: '16s', animationDelay: '12s' }} />

            {/* Falling Snowflakes */}
            <SnowflakeDoodle className="w-5 left-[50%]" style={{ animationDuration: '20s', animationDelay: '0s' }} />
            <SnowflakeDoodle className="w-4 left-[20%]" style={{ animationDuration: '22s', animationDelay: '6s' }} />
            <SnowflakeDoodle className="w-6 left-[85%]" style={{ animationDuration: '18s', animationDelay: '3s' }} />
            <SnowflakeDoodle className="w-3 left-[5%]" style={{ animationDuration: '25s', animationDelay: '10s' }} />
            <SnowflakeDoodle className="w-4 left-[95%]" style={{ animationDuration: '19s', animationDelay: '13s' }} />


            <TwilightMountainscape />

            <MessengerBird />

            <main className="relative z-10 w-full max-w-2xl">
                 <div className="bg-[#e7d4d9]/50 backdrop-blur-sm rounded-[36px] shadow-lg py-12 px-8 sm:px-14 border border-white/40">
                    <header className="text-center mb-10">
                        <h1 className="font-dancing text-4xl sm:text-[40px] font-bold text-[#66496a]" style={{letterSpacing: '-1px'}}>Get In Touch</h1>
                         <svg className="mx-auto mt-1" width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.5C20.443 4.21777 96.7213 -3.12758 118 8.5" stroke="#c9a9ad" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                        <p className="font-playfair text-lg italic text-[#a29ca6] mt-4 max-w-md mx-auto">
                            Let's connect and create some magic together!
                        </p>
                    </header>

                    <div className="space-y-6">
                        <ContactInfoItem
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                            text="Sivanvita Naidu G N"
                        />
                        <ContactInfoItem
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                            text="9849472232"
                        />
                         <ContactInfoItem
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                            text="sivanvitanaidugn@gmail.com"
                            href="mailto:sivanvitanaidugn@gmail.com"
                        />
                        <ContactInfoItem
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                            text="Connect on LinkedIn"
                            href="https://www.linkedin.com/in/sivanvitanaidugn01062002/"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GetInTouchPage;