export default function MarqueeRibbon() {
  const words = ['Design', 'Develop', 'Discover'];
  
  // Create a large list of repeating items to ensure a continuous line of text
  const marqueeItems = Array(20)
    .fill(words)
    .flat();

  return (
    <div className="relative w-full overflow-hidden h-16 flex items-center bg-white z-20 pointer-events-none">
      {/* Yellow support ribbon underneath for high-fidelity layered depth */}
      <div className="absolute inset-0 bg-[#FFC107]/20 transform rotate-1 scale-105" />

      {/* Main Slanted Ribbon */}
      <div 
        className="absolute inset-x-0 w-[110%] -left-[5%] bg-[#0077C0] py-3 shadow-xl transform -rotate-1 flex items-center overflow-hidden"
        id="marquee-container"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeItems.map((word, index) => {
            const isDevelop = word === 'Develop';
            return (
              <div key={index} className="flex items-center mx-6">
                <span className={`font-extrabold text-sm md:text-base tracking-widest uppercase font-sans ${isDevelop ? 'text-[#FFC107]' : 'text-white'}`}>
                  ✦ {word}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
