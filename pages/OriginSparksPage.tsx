import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

const StarIcon: React.FC<{ className?: string; color?: string }> = ({ className, color = '#d9b2cf' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Sparkle: React.FC<{ className?: string; style?: React.CSSProperties; color1?: string; color2?: string }> = ({ className, style, color1 = '#edb8c8', color2 = '#be9cc7' }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path d="M12 2L13.88 7.12L19 9L13.88 10.88L12 16L10.12 10.88L5 9L10.12 7.12L12 2Z" stroke={color1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 15L19.33 17.67L17 19L19.33 20.33L20 23L20.67 20.33L23 19L20.67 17.67L20 15Z" stroke={color2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" stroke="#7f6380" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Bulb Glass */}
            <path
                d="M32 50 C22.05 50 14 41.95 14 32 C14 22.05 22.05 14 32 14 C41.95 14 50 22.05 50 32 C50 41.95 41.95 50 32 50Z"
                fill="#FEF9C3"
            />
             {/* Outline for the glass */}
            <path
                d="M32 50 C22.05 50 14 41.95 14 32 C14 22.05 22.05 14 32 14 C41.95 14 50 22.05 50 32 C50 41.95 41.95 50 32 50Z"
            />
            {/* Filament */}
            <path d="M29 32 C 29 29, 35 29, 35 32 C 35 35, 29 35, 29 38 C 29 41, 35 41, 35 44" />

            {/* Socket */}
            <path d="M24 50 L 40 50" />
            <path d="M25 53 L 39 53" />
            <path d="M25 56 L 39 56" />
            <path d="M25 59 L 39 59" />
        </g>
    </svg>
);

const ChibiCatLaptopDoodle: React.FC = () => (
    <div className="relative w-64 h-64 animate-gentle-float" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Laptop base */}
            <path d="M 30 150 L 170 150 L 180 160 L 20 160 Z" fill="#c5adcf"/>
            {/* Laptop screen */}
            <rect x="40" y="80" width="120" height="70" rx="5" fill="#e7d4d9" stroke="#7f6380" strokeWidth="2"/>
            <rect x="45" y="85" width="110" height="60" fill="#ecdad8"/>
            {/* Cat body */}
            <path d="M 80 110 C 60 110, 60 150, 80 150 L 120 150 C 140 150, 140 110, 120 110 Z" fill="#edb8c8"/>
            {/* Cat tail */}
            <path d="M 130 120 Q 150 100 140 80" fill="none" stroke="#edb8c8" strokeWidth="8" strokeLinecap="round" className="origin-[130px_120px] animate-sway" />
            {/* Cat head */}
            <circle cx="100" cy="100" r="25" fill="#edb8c8"/>
            <path d="M 80 85 L 90 75 L 95 85 Z" fill="#7f6380" />
            <path d="M 120 85 L 110 75 L 105 85 Z" fill="#7f6380" />
            {/* Eyes */}
            <g className="animate-blink">
              <circle cx="95" cy="100" r="2" fill="#7f6380" />
              <circle cx="105" cy="100" r="2" fill="#7f6380" />
            </g>
        </svg>
        <Sparkle className="absolute top-10 right-0 w-8 h-8 animate-sparkle"/>
    </div>
);

const ChibiMailDoodle: React.FC = () => (
    <div className="relative w-40 h-40 animate-gentle-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            <defs>
                <filter id="mail-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            {/* Wings */}
            <path d="M 50 100 C 20 80, 20 120, 50 100 Z" fill="#ecdad8" className="origin-[50px_100px] animate-flap" />
            <path d="M 150 100 C 180 80, 180 120, 150 100 Z" fill="#ecdad8" className="origin-[150px_100px] animate-flap-reverse" />
             {/* Envelope body */}
            <rect x="60" y="80" width="80" height="50" rx="5" fill="#c5adcf" stroke="#7f6380" strokeWidth="2" filter="url(#mail-glow)"/>
            {/* Envelope flap */}
            <path d="M 60 80 L 100 110 L 140 80 Z" fill="#d9b2cf" stroke="#7f6380" strokeWidth="2"/>
        </svg>
        <Sparkle className="absolute bottom-10 left-0 w-8 h-8 animate-sparkle" style={{animationDelay: '0.5s'}}/>
    </div>
);

const SnowflakeDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-0 pointer-events-none text-[#be9cc7]/80 animate-prance ${className}`} style={style}>
        <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M15 3 V 27 M 5.2 8 L 24.8 22 M 5.2 22 L 24.8 8" />
        </svg>
    </div>
);

const ProjectItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    return (
        <div className="mb-6 bg-gradient-to-br from-white/30 to-[#d9b2cf]/20 p-6 rounded-2xl shadow-md border border-white/20 transition-all duration-300 hover:shadow-lg hover:border-white/40">
            <h3 className="font-playfair font-bold text-xl text-[#7f6380] mb-3">{title}</h3>
            <div className="space-y-3 text-[#7f6380]/90 text-base leading-relaxed">
                {children}
            </div>
        </div>
    );
};

const OriginSparksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ecdad8] via-[#e7d4d9] to-[#e3cbe3] text-[#7f6380] font-playfair overflow-hidden relative">
        <Header />
        <BackButton />
        
        {/* Decorative particles */}
        <SnowflakeDoodle className="w-5 left-[5%]" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <SnowflakeDoodle className="w-6 left-[30%]" style={{ animationDuration: '18s', animationDelay: '5s' }} />
        <SnowflakeDoodle className="w-4 left-[55%]" style={{ animationDuration: '24s', animationDelay: '2s' }} />
        <SnowflakeDoodle className="w-5 left-[85%]" style={{ animationDuration: '22s', animationDelay: '8s' }} />
        <SnowflakeDoodle className="w-4 left-[15%]" style={{ animationDuration: '26s', animationDelay: '1s' }} />
        <SnowflakeDoodle className="w-6 left-[40%]" style={{ animationDuration: '19s', animationDelay: '6s' }} />
        <SnowflakeDoodle className="w-3 left-[70%]" style={{ animationDuration: '28s', animationDelay: '3s' }} />
        <SnowflakeDoodle className="w-5 left-[95%]" style={{ animationDuration: '21s', animationDelay: '9s' }} />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 items-center min-h-screen p-8 pt-24">
            <aside className="lg:col-span-1 flex items-center justify-center">
                <ChibiCatLaptopDoodle />
            </aside>

            <main className="lg:col-span-2 flex flex-col items-center">
                <header className="mb-10 text-center">
                    <div className="flex justify-center items-center gap-3">
                         <h1 className="font-dancing text-5xl sm:text-6xl font-bold">Origin Sparks</h1>
                         <LightbulbIcon className="w-16 h-16 animate-bulb-glow" />
                    </div>
                    <p className="text-lg italic text-[#7f6380]/80 mt-2">My journey into the world of technology and creation.</p>
                </header>

                {/* Education Box */}
                <section className="w-full bg-gradient-to-br from-[#ddc4c8]/60 to-[#d9b2cf]/30 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/30 mb-10">
                    <h2 className="font-playfair font-bold text-3xl mb-4 text-[#7f6380] border-b-2 border-[#d9b2cf]/50 pb-2">Education</h2>
                    <div className="text-lg">
                        <p className="font-semibold">SASTRA Deemed to be University Thanjavur</p>
                        <p className="text-base text-[#7f6380]/80 italic">2019-2023</p>
                        <p className="mt-2">Bachelors in Technology – Computer Science Engineering</p>
                        <p className="mt-1">CGPA of 7.86 on 10</p>
                    </div>
                </section>

                {/* Projects Box */}
                <section className="w-full bg-gradient-to-br from-[#ddc4c8]/60 to-[#d9b2cf]/30 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/30">
                    <h2 className="font-playfair font-bold text-3xl mb-6 text-center italic text-[#be9cc7]">"404 Limits Not Found: My First Tech Experiments"</h2>
                    
                    <ProjectItem title="Cardiovascular Disease Prediction Analysis using Machine Learning Techniques">
                        <ul className="space-y-2">
                            <li className="flex"><span className="mr-2 text-[#edb8c8]">•</span><span>Collected and organized 2.1k data entries from three datasets, one primary and two supplementary—to predict cardiovascular disease, enhancing model accuracy and reliability.</span></li>
                            <li className="flex"><span className="mr-2 text-[#edb8c8]">•</span><span>Normalized the data to prepare it for training and testing.</span></li>
                            <li className="flex"><span className="mr-2 text-[#edb8c8]">•</span><span>Applied Machine Learning techniques via a 2-step approach: first, applied classifiers separately, then combined them in an ensemble.</span></li>
                            <li className="flex"><span className="mr-2 text-[#edb8c8]">•</span><span>Achieved 99% accuracy in binary classification (0/1) using an ensemble of KNN and Logistic Regression.</span></li>
                        </ul>
                    </ProjectItem>

                    <ProjectItem title="Python-Based Email Client with SMTP/IMAP Protocol Implementation and Local Mail Server Integration">
                        <p>Engineered a full-stack email client application using Python with SMTP/IMAP protocols, implementing secure SSL/TLS connections and MIME-enabled messaging with multi-format attachment support</p>
                        <ul className="space-y-2 mt-2">
                           <li className="flex"><span className="mr-2 text-[#edb8c8]">-</span><span>Developed local mail server architecture with domain-specific user account management, integrating TCP/IP protocol stack for reliable packet transmission and store-and-forward functionality</span></li>
                           <li className="flex"><span className="mr-2 text-[#edb8c8]">-</span><span>Built intuitive GUI interface using Tkinter with comprehensive mailbox management (Inbox, Sent, Trash), featuring real-time email composition, retrieval, deletion, and attachment download capabilities</span></li>
                           <li className="flex"><span className="mr-2 text-[#edb8c8]">-</span><span>Implemented advanced email handling features including base64 encoding for attachments, multi-part message processing, and automated folder organization with Gmail API integration support</span></li>
                        </ul>
                    </ProjectItem>
                </section>
            </main>
            
            <aside className="lg:col-span-1 flex items-center justify-center lg:relative lg:top-48">
                <ChibiMailDoodle />
            </aside>
        </div>

        {/* Decorative sparkles in background */}
        <Sparkle className="absolute top-1/4 left-5 w-12 h-12 opacity-30 animate-sparkle" style={{animationDelay: '1s'}} color1="#d1b0cf" color2="#e3cbe3" />
        <Sparkle className="absolute bottom-1/4 right-5 w-10 h-10 opacity-30 animate-sparkle" style={{animationDelay: '3s'}} color1="#c5adcf" color2="#ddc4c8" />
        <Sparkle className="absolute top-1/2 left-1/4 w-6 h-6 opacity-40 animate-sparkle" style={{animationDelay: '0.5s'}} color1="#e3cbe3" color2="#edb8c8" />
        <Sparkle className="absolute bottom-1/3 right-1/4 w-8 h-8 opacity-40 animate-sparkle" style={{animationDelay: '2s'}} color1="#be9cc7" color2="#d9b2cf" />
    </div>
  );
};

export default OriginSparksPage;