import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Bio() {
  return (
    <section
      className={`${pressStart.className} w-full text-sm sm:text-base leading-relaxed tracking-tight text-neutral-200`}
    >
        <h1 className="text-2xl sm:text-3xl underline mb-6">About Me</h1>
     
      <p className="mb-3">
        19 y/o <span className="text-yellow-400">developer
          </span> learning systems from <span className="text-red-500">
            first principles.
            </span>
        </p>
        <p className="mb-3">
                Student. <span className="text-blue-500">
                  Full-stack dev.
                  </span>
        </p>

 
  
     
      <p className="mb-3">
        Mostly work in <span className="text-yellow-400">
          Rust 
          </span> and <span className="text-blue-400">
            TypeScript
            </span> — my entire toolkit is <span className="text-red-500">Rust-powered.</span>
      </p>
      <p className="mb-3">I <span className="text-teal-400">
        tinker,
        </span> ship things, and occasionally shitpost on <span className="text-yellow-500">X.</span></p>
      <p className="mb-3">Gamer. <span className="text-blue-500">Music on while coding.</span></p>
      <p className="mb-3">Learning <span className="text-green-500">calisthenics</span>, Mandarin and <span className="text-teal-400">Tai Chi.</span></p>
      <p>Trying to get <span className="text-yellow-400">wings.</span></p>
    </section>
  );
}
