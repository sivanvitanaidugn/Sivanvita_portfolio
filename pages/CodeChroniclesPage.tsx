import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

const FloatingCloud: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg viewBox="0 0 100 60" className={className} style={style} fill="currentColor">
        <path d="M82.5,35.33A17.44,17.44,0,0,0,67.67,20,15,15,0,0,0,40,20,12.5,12.5,0,0,0,12.5,32.5a12.55,12.55,0,0,0,.29,2.78,10,10,0,0,0-10.29,9.72A10,10,0,0,0,12.5,55H82.5a17.5,17.5,0,0,0,0-35Z" transform="translate(0 -5)" opacity="0.1"/>
    </svg>
);

const SnowflakeDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute z-0 pointer-events-none text-[#c9a9ad]/80 animate-prance ${className}`} style={style}>
        <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M15 3 V 27 M 5.2 8 L 24.8 22 M 5.2 22 L 24.8 8" />
        </svg>
    </div>
);

const TechIcon: React.FC<{ name: string; note?: string; children: React.ReactNode; }> = ({ name, note, children }) => (
    <div className="group relative flex flex-col items-center justify-center text-center w-24">
        <div className="w-20 h-20 bg-gradient-to-br from-[#dec8ca]/50 to-[#c9a9ad]/50 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-[#edb8c8]/60 border border-white/20">
            {children}
        </div>
        <p className="mt-2 font-playfair text-sm text-[#66496a] opacity-0 h-0 transition-all duration-30_0 group-hover:opacity-100 group-hover:h-auto">{name}</p>
        {note && <p className="text-xs text-[#66496a]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">({note})</p>}
    </div>
);

const CodeChroniclesPage: React.FC = () => {
    const experiences = [
        {
            company: 'NthPhase Software Solutions',
            role: 'Software Engineer',
            dates: 'Oct 2023 - Present',
            content: (
                <ul className="space-y-2">
                    <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Engineered a full-stack email client application using Python with SMTP/IMAP protocols, implementing secure SSL/TLS connections and MIME-enabled messaging with multi-format attachment support.</span></li>
                    <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Developed local mail server architecture with domain-specific user account management, integrating TCP/IP protocol stack for reliable packet transmission and store-and-forward functionality.</span></li>
                    <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Built intuitive GUI interface using Tkinter with comprehensive mailbox management (Inbox, Sent, Trash), featuring real-time email composition, retrieval, deletion, and attachment download capabilities.</span></li>
                    <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Implemented advanced email handling features including base64 encoding for attachments, multi-part message processing, and automated folder organization with Gmail API integration support.</span></li>
                </ul>
            )
        },
        {
            company: 'FORD GTBC',
            role: 'Junior Software Engineer & Intern',
            dates: 'Jan 2023 - Sep 2023',
            content: (
                <div>
                    <div className="mb-4">
                        <h4 className="font-playfair font-semibold text-lg text-[#66496a]">Junior Software Engineer (Project MARS)</h4>
                        <p className="text-sm text-[#66496a]/70 italic">July 2023 – Sept 2023</p>
                        <ul className="space-y-2 mt-2">
                            <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Worked on transition of legacy front-end technologies to modern frameworks, focused on decoupling front-end and back-end systems for improved flexibility and scalability.</span></li>
                            <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Designed and developed backend APIs using Java and PostgreSQL to enable the creation of a unified codebase for the eCommerce platform.</span></li>
                        </ul>
                    </div>
                    <hr className="border-t border-[#c9a9ad]/50 my-4" />
                    <div>
                        <h4 className="font-playfair font-semibold text-lg text-[#66496a]">Software Intern (PDO Team)</h4>
                        <p className="text-sm text-[#66496a]/70 italic">Jan 2023 – July 2023</p>
                        <ul className="space-y-2 mt-2">
                           <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Developed an API as part of a specified task, implementing core system functionality, and received commendation for enhancing it with strong security features, including authentication and authorization, to ensure secure access to the platform.</span></li>
                           <li className="flex"><span className="mr-2 text-[#edb8c8]">◆</span><span>Conducted Sanity testing across webpage modules for six regions, ensuring functionality, performance, and compatibility, and collaborated with teams to resolve issues for region-specific user experiences.</span></li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const skills = [
        { name: 'Python', icon: '🐍' }, { name: 'Java', icon: '☕' }, { name: 'C/C++', icon: 'C++' },
        { name: 'HTML & CSS', icon: '🎨' }, { name: 'JavaScript', icon: 'JS' }, { name: 'TypeScript', icon: 'TS' },
        { name: 'React', icon: '⚛️' }, { name: 'TailwindCSS', icon: '💨' }, { name: 'Angular', icon: '🅰️', note: 'Beginner' },
        { name: 'MySQL', icon: '🐬' }, { name: 'PostgreSQL', icon: '🐘', note: 'Upskilling' }, { name: 'RDBMS', icon: '🗃️' },
        { name: 'DSA', icon: '🔗' }, { name: 'Git', icon: '🐙' }, { name: 'Agile', icon: '🔄' },
        { name: 'SDLC', icon: '📈' }, { name: 'AI Techniques', icon: '🤖' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#faf5f1] via-[#f2ded9] to-[#e2ced3] text-[#66496a] font-playfair overflow-hidden relative">
            <Header />
            <BackButton />
            
            {/* Decorative particles */}
            <SnowflakeDoodle className="w-5 left-[10%]" style={{ animationDuration: '21s', animationDelay: '1s' }} />
            <SnowflakeDoodle className="w-6 left-[35%]" style={{ animationDuration: '19s', animationDelay: '6s' }} />
            <SnowflakeDoodle className="w-4 left-[65%]" style={{ animationDuration: '23s', animationDelay: '3s' }} />
            <SnowflakeDoodle className="w-5 left-[90%]" style={{ animationDuration: '20s', animationDelay: '7s' }} />
            <SnowflakeDoodle className="w-3 left-[20%]" style={{ animationDuration: '24s', animationDelay: '2s' }} />
            <SnowflakeDoodle className="w-6 left-[50%]" style={{ animationDuration: '20s', animationDelay: '8s' }} />
            <SnowflakeDoodle className="w-4 left-[75%]" style={{ animationDuration: '28s', animationDelay: '4s' }} />
            <SnowflakeDoodle className="w-5 left-[95%]" style={{ animationDuration: '22s', animationDelay: '10s' }} />

            {/* Floating decorative elements */}
            <FloatingCloud className="absolute -top-10 -left-20 w-96 h-96 text-[#daddde]/50 animate-gentle-float" />
            <FloatingCloud className="absolute -bottom-20 -right-20 w-96 h-96 text-[#c2a1b6]/30 animate-gentle-float" style={{ animationDelay: '4s' }} />

            <div className="container mx-auto px-4 sm:px-8 py-24 relative z-10">
                <header className="text-center mb-12">
                    <h1 className="font-dancing text-5xl sm:text-6xl font-bold">Chapters of my Career</h1>
                    <p className="text-lg italic text-[#66496a]/80 mt-2">A timeline of my professional journey.</p>
                </header>
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                    {/* Left Column: Experience */}
                    <main className="w-full lg:w-3/5">
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/30 transition-all duration-300 hover:shadow-xl hover:border-white/40 hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                        <h3 className="font-playfair font-bold text-2xl text-[#66496a]">{exp.company}</h3>
                                        <span className="font-sans text-sm text-[#66496a]/70 mt-1 sm:mt-0">{exp.dates}</span>
                                    </div>
                                    <h4 className="font-dancing text-xl text-[#66496a]/90 italic mb-4">{exp.role}</h4>
                                    <div className="space-y-3 text-[#66496a]/90 text-base leading-relaxed">
                                        {exp.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* Right Column: Skills */}
                    <aside className="w-full lg:w-2/5">
                        <div className="bg-white/20 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg border border-white/30">
                            <h2 className="font-dancing text-4xl font-bold text-center my-4">My Developer Palette</h2>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 justify-items-center">
                                {skills.map(skill => (
                                    <TechIcon key={skill.name} name={skill.name} note={skill.note}>
                                        <span className="text-3xl">{skill.icon}</span>
                                    </TechIcon>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
             {/* Bottom layered landscape */}
            <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden z-0">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#c9a9ad]/40 to-transparent"></div>
                <div className="absolute -bottom-10 left-0 w-[120%] h-20 bg-[#dec8ca]/30 rounded-t-full -rotate-1"></div>
                <div className="absolute -bottom-16 left-0 w-[110%] h-24 bg-[#e2ced3]/40 rounded-t-full rotate-1"></div>
            </div>
        </div>
    );
};

export default CodeChroniclesPage;