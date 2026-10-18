import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function HomeSection() {
  return (
    // 🛠️ CHANGED CONTAINER CLASSES: Added py-20 to balance vertical elements and keep the section clear of other sections
    <section 
      id="home" 
      className="  lg:min-h-[70vh] w-full flex flex-col lg:flex-row items-center lg:justify-center  px-6 md:px-12 py-20 lg:py-0 select-none scroll-mt-20"
    >
      {/* 🚀 THE FIXED WRAPPER: This container keeps your profile elements side-by-side and centers them together on the screen */}
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        
        {/* Left Side: Profile Image */}
        {/* Restored to your preferred desktop bounds (w-96 h-96) while staying beautifully compact on mobile devices */}
        <div className="w-[55%] sm:w-[40%] md:w-80 md:h-80 lg:w-96 lg:h-96 aspect-square shrink-0">
            <Image 
              src="/Images/man.jpg" 
              alt="Hassaan Naveed"  
              className="w-full h-full object-cover rounded-2xl shadow-xl hover:-translate-y-1 transition-transform duration-300"
              width={300}
              height={300} 
            />
        </div>

        {/* Right Side: Text Information */}
        <div className="Right-side flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-2xl">
            {/* 🛠️ FIXED SYNTAX BUG: Cleaned up your closing text-font)] bracket snippet */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight text-font mb-2">
              hi, <span className="text-hover font-bold">hassaan</span> here.
            </h1>
            
            <div> 
                {/* 🛠️ FIXED SYNTAX BUG: Changed your text-(...) variables to proper CSS bracket layout targets */}
                <p className="text-base sm:text-lg lg:text-xl pt-3 w-full lg:w-[85%] text-[#8892b0] leading-relaxed text-center lg:text-left " >
I am a full stack developer who builds modern, intelligent web applications. I bring a unique blend of clean frontend design, robust backend architecture, and the practical integration of Al tools to every project I build
</p>
            </div>

            <a href="mailto:hassaanonlinux@gmail.com" className="mt-6">
             <button className="text-hover border border-hover font-bold py-3 px-8 rounded flex items-center gap-2 hover:-translate-y-1 active:translate-y-0 transition-transform duration-300">
                <Mail size={20} />
                Say hi!
             </button>
            </a>
        </div>

      </div>
    </section>
  );
}
