
import React from 'react';
import Header from '../components/Header.tsx';
import BackButton from '../components/BackButton.tsx';

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

const ImagePlaceholder: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => (
    <div className={`flex items-center justify-center bg-[#e2ced3]/50 rounded-2xl shadow-lg border border-white/30 overflow-hidden ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
);

const TimelineItem: React.FC<{
    title: string;
    description: string;
    imageContent: React.ReactNode;
    imagePosition: 'left' | 'right';
    icon: string;
}> = ({ title, description, imageContent, imagePosition, icon }) => {
    const isImageLeft = imagePosition === 'left';
    return (
        <div className="relative flex justify-center items-center w-full my-8">
            <div className={`w-1/2 px-8 ${isImageLeft ? 'order-1' : 'order-3'}`}>{imageContent}</div>
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-[#dec8ca] to-[#c9a9ad] rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-white/50 order-2">
                {icon}
            </div>
            <div className={`w-1/2 px-8 ${isImageLeft ? 'order-3' : 'order-1'}`}>
                <div className={`bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30 w-full transform transition-transform duration-300 hover:scale-105`}>
                    <h3 className="font-dancing text-2xl font-bold text-[#66496a] mb-2">{title}</h3>
                    <p className="text-[#66496a]/90 text-base leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Responsive version for mobile
const TimelineItemMobile: React.FC<{
    title: string;
    description: string;
    imageContent: React.ReactNode;
    icon: string;
}> = ({ title, description, imageContent, icon }) => {
    return (
        <div className="relative flex flex-col items-center w-full my-4">
             <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-[#dec8ca] to-[#c9a9ad] rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-white/50">
                {icon}
            </div>
            <div className="w-full max-w-sm mt-4">{imageContent}</div>
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30 w-full max-w-sm mt-4">
                <h3 className="font-dancing text-2xl font-bold text-[#66496a] mb-2">{title}</h3>
                <p className="text-[#66496a]/90 text-base leading-relaxed">{description}</p>
            </div>
        </div>
    );
}


const BehindTheSyntaxPage: React.FC = () => {
    const milestones = [
        {
            title: "MySQL 5-Star Gold Rank on HackerRank",
            description: "Achieved within a week by applying my unique 'learn with work' approach—simultaneously mastering and executing SQL skills without disrupting productivity, making me an efficient, fast-learning asset for any team.",
            imageContent: <ImagePlaceholder src="images/hackerrank_badge.png" alt="HackerRank 5-star badge" className="w-60 h-60 mx-auto" />,
            imagePosition: 'left' as 'left',
            icon: '⭐'
        },
        {
            title: "AWS Technical Essentials Certificate",
            description: "Got hands-on with AWS basics, unlocking the power of cloud magic by mastering key services and savvy best practices for smarter, faster, and secure cloud adventures!",
            imageContent: <ImagePlaceholder src="images/aws_certificate.png" alt="AWS Certificate logo" className="aspect-[4/3] max-w-md mx-auto" />,
            imagePosition: 'right' as 'right',
            icon: '☁️'
        },
        {
            title: "BlueCross Volunteer",
            description: "I’m a BlueCross volunteer who’s basically a full-time dog hugger—helping with vaccination and adoption drives, walking, feeding, and pampering indies. I’ve fostered two stray fluffballs and couldn’t resist adopting one myself. Life’s better with wagging tails and a little chaos! 🌞🐶✨",
            imageContent: (
                <div className="grid grid-cols-2 gap-2">
                    <ImagePlaceholder src="images/volunteer_photo_1.jpg" alt="Photo 1 with a dog" className="aspect-square"/>
                    <ImagePlaceholder src="images/volunteer_photo_2.jpg" alt="Photo 2 at adoption drive" className="aspect-square"/>
                </div>
            ),
            imagePosition: 'left' as 'left',
            icon: '🐾'
        },
        {
            title: "Couture Sparks, Freely Fueled",
            description: "Blending creativity with curiosity, I immerse myself in couture dress sketching as a self-taught fashion enthusiast. My ideas often rush in at the quirkiest moments—just before sleep or mid-shower—fueling spontaneous, artistic explorations that bring bold, original sketches to life.",
            imageContent: <ImagePlaceholder src="images/fashion_sketch.png" alt="Image of a fashion sketch" className="aspect-square" />,
            imagePosition: 'right' as 'right',
            icon: '👗'
        },
        {
            title: "National Service Scheme (NSS) Volunteer",
            description: "Former NSS volunteer with a spirited commitment to civic engagement—led campus cleanliness drives, championed girl child education through awareness marches, and actively participated in Swachh Bharat initiatives. Also facilitated blood donation camps, tree plantations, and community outreach programs, fostering grassroots impact with empathy, discipline, and social responsibility.",
            imageContent: <ImagePlaceholder src="images/nss_event.jpg" alt="Photo from an NSS event" className="aspect-video" />,
            imagePosition: 'left' as 'left',
            icon: '🤝'
        },
        {
            title: "Tech Ops, Festival Edition",
            description: "SDE by craft, curator by spirit — I led tech for the merchandise team and orchestrated logistics in hospitality for Daksh and Kuruksastra, bridging code and coordination to engineer systems, manage resources, and craft experiences with precision, empathy, and expressive flair.",
            imageContent: <ImagePlaceholder src="images/college_fest.jpg" alt="Photo from Daksh or Kuruksastra college fest" className="aspect-video" />,
            imagePosition: 'right' as 'right',
            icon: '🎉'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#faf5f1] via-[#f2ded9] to-[#e2ced3] text-[#66496a] font-playfair overflow-x-hidden relative">
            <Header />
            <BackButton />

            {/* Decorative particles */}
            <SnowflakeDoodle className="w-5 left-[8%]" style={{ animationDuration: '22s', animationDelay: '2s' }} />
            <SnowflakeDoodle className="w-6 left-[28%]" style={{ animationDuration: '20s', animationDelay: '7s' }} />
            <SnowflakeDoodle className="w-4 left-[58%]" style={{ animationDuration: '25s', animationDelay: '4s' }} />
            <SnowflakeDoodle className="w-5 left-[88%]" style={{ animationDuration: '21s', animationDelay: '9s' }} />
            <SnowflakeDoodle className="w-3 left-[18%]" style={{ animationDuration: '23s', animationDelay: '3s' }} />
            <SnowflakeDoodle className="w-6 left-[48%]" style={{ animationDuration: '19s', animationDelay: '8s' }} />
            <SnowflakeDoodle className="w-4 left-[78%]" style={{ animationDuration: '27s', animationDelay: '5s' }} />
            <SnowflakeDoodle className="w-5 left-[98%]" style={{ animationDuration: '24s', animationDelay: '11s' }} />
            
            {/* Floating decorative elements */}
            <FloatingCloud className="absolute -top-10 -left-20 w-96 h-96 text-[#daddde]/50 animate-gentle-float" />
            <FloatingCloud className="absolute -bottom-20 -right-20 w-96 h-96 text-[#c2a1b6]/30 animate-gentle-float" style={{ animationDelay: '4s' }} />

            <div className="container mx-auto px-4 sm:px-8 py-24 relative z-10">
                <header className="text-center mb-16">
                    <h1 className="font-dancing text-5xl sm:text-6xl font-bold">Behind the Syntax</h1>
                    <p className="text-lg italic text-[#66496a]/80 mt-2">Stories beyond the code.</p>
                </header>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-[#c9a9ad]/50 rounded-full transform -translate-x-1/2"></div>
                    {milestones.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
                
                {/* Mobile Timeline */}
                 <div className="md:hidden relative flex flex-col items-center">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-[#c9a9ad]/50 rounded-full transform -translate-x-1/2"></div>
                     <div className="w-full">
                        {milestones.map((item, index) => (
                           <TimelineItemMobile key={index} {...item} />
                        ))}
                    </div>
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

export default BehindTheSyntaxPage;
