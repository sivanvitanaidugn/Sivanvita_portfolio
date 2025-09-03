

import React from 'react';
import Header from '../components/Header.tsx';
import BackButton from '../components/BackButton.tsx';

const FloatingCloud: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg viewBox="0 0 100 60" className={className} style={style} fill="currentColor">
        <path d="M82.5,35.33A17.44,17.44,0,0,0,67.67,20,15,15,0,0,0,40,20,12.5,12.5,0,0,0,12.5,32.5a12.55,12.55,0,0,0,.29,2.78,10,10,0,0,0-10.29,9.72A10,10,0,0,0,12.5,55H82.5a17.5,17.5,0,0,0,0-35Z" transform="translate(0 -5)" opacity="0.1"/>
    </svg>
);

const PetalDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-0 pointer-events-none text-[#e7d4d9] opacity-40 animate-fall ${className}`} style={style}>
        <svg viewBox="0 0 20 30" fill="currentColor">
            <path d="M10 0 C0 10, 0 20, 10 30 C20 20, 20 10, 10 0 Z" />
        </svg>
    </div>
);

const ImagePlaceholder: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => (
    <div className={`bg-white/50 p-2 rounded-2xl shadow-lg border-2 border-white/30 transform transition-all duration-300 overflow-hidden ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
    </div>
);


const AboutMePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#faf5f1] via-[#f2ded9] to-[#e2ced3] text-[#66496a] font-playfair overflow-hidden relative flex items-center justify-center p-8">
            <Header />
            <BackButton />

            {/* Background elements */}
            <FloatingCloud className="absolute -top-10 -left-20 w-96 h-96 text-[#daddde]/50 animate-gentle-float" />
            <FloatingCloud className="absolute -bottom-20 -right-20 w-96 h-96 text-[#c2a1b6]/30 animate-gentle-float" style={{ animationDelay: '4s' }} />
            <PetalDoodle className="w-5 left-[10%]" style={{ animationDuration: '20s', animationDelay: '0s' }} />
            <PetalDoodle className="w-6 left-[30%]" style={{ animationDuration: '18s', animationDelay: '5s' }} />
            <PetalDoodle className="w-4 left-[60%]" style={{ animationDuration: '24s', animationDelay: '10s' }} />
            <PetalDoodle className="w-5 left-[85%]" style={{ animationDuration: '22s', animationDelay: '2s' }} />
            
            <main className="relative z-10 w-full max-w-4xl mt-24 mb-12">
                {/* Image Placeholders in a collage style */}
                <ImagePlaceholder src="/images/about_me_1.jpg" alt="My trusty canine co-worker" className="absolute -top-28 left-0 w-56 h-64 transform -rotate-12 hover:scale-105 hover:rotate-[-15deg] z-20" />
                <ImagePlaceholder src="/images/about_me_2.jpg" alt="A favorite travel snapshot" className="absolute top-1/2 -right-28 w-64 h-48 transform rotate-6 hover:scale-105 hover:rotate-[10deg] z-0" />
                <ImagePlaceholder src="/images/about_me_3.jpg" alt="Fueled by coffee and code" className="absolute -bottom-28 left-1/4 w-72 h-40 transform -rotate-3 hover:scale-105 hover:rotate-[-5deg] z-20" />
                <ImagePlaceholder src="/images/about_me_4.jpg" alt="Me, probably thinking about snacks" className="absolute top-16 -left-36 w-48 h-56 transform rotate-8 hover:scale-105 hover:rotate-[12deg] z-0" />
                <ImagePlaceholder src="/images/about_me_5.jpg" alt="A beautiful sunset" className="absolute bottom-0 -right-12 w-48 h-48 transform rotate-[-10deg] hover:scale-105 hover:rotate-[-15deg] z-20" />
                <ImagePlaceholder src="/images/about_me_6.jpg" alt="Sketches and doodles" className="absolute -top-20 -right-20 w-52 h-60 transform rotate-12 hover:scale-105 hover:rotate-[15deg] z-0" />
                <ImagePlaceholder src="/images/about_me_7.jpg" alt="My little garden" className="absolute -bottom-24 -left-12 w-56 h-56 transform -rotate-8 hover:scale-105 hover:rotate-[-12deg] z-20" />
                <ImagePlaceholder src="/images/about_me_8.jpg" alt="Favorite book nook" className="absolute -top-24 right-1/4 w-48 h-48 transform rotate-3 hover:scale-105 hover:rotate-[5deg] z-0" />

                <div className="bg-white/30 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/40 relative">
                    <header className="text-center mb-8">
                        <h1 className="font-dancing text-5xl sm:text-6xl font-bold">A Little About Me</h1>
                    </header>
                    <div className="text-center text-lg text-[#66496a]/90 leading-relaxed space-y-4 max-w-xl mx-auto">
                        <p>
                            Hello there! I'm Sivanvita, a software engineer with a heart that beats for both elegant code and enchanting design. My journey is a blend of logical problem-solving and a deep appreciation for the kind of magic you find in a Studio Ghibli film or a Disney classic.
                        </p>
                        <p>
                            By day, I build and debug, turning complex requirements into smooth, functional applications. By night, I'm a dreamer, a storyteller, and a passionate volunteer for animal welfare. I believe the best creations come from a place of empathy—whether it's for a user interacting with an interface or a stray dog needing a home.
                        </p>
                        <p>
                            This little corner of the internet is where my two worlds collide. It’s a showcase of my technical skills, wrapped in an aesthetic that truly represents me. Welcome to my story!
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutMePage;
