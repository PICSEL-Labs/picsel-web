export default function FeatureIconsSection() {
  const items = [
    { icon: "🗺️", label: "포토부스 검색", top: 112 },
    { icon: "📸", label: "사진 촬영", top: 94 },
    { icon: "📱", label: "QR 업로드", top: 46 },
    { icon: "📖", label: "추억 기록", top: 128 },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient: black -> pink -> white */}
      <div className="h-[200px] bg-gradient-to-b from-black to-[#FFD6E8]" />
      <div className="relative bg-gradient-to-b from-[#FFD6E8] to-white">
        {/* Wave SVG */}
        <svg
          className="absolute top-[-100px] left-0 w-full"
          height="200"
          viewBox="0 0 1280 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,170 C150,120 300,180 500,100 C700,20 900,90 1100,50 C1200,30 1250,60 1280,45"
            stroke="rgba(255,45,120,0.15)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="w-[1280px] mx-auto px-[100px] relative" style={{ height: 197 }}>
          {items.map((item, i) => {
            const positions = [149, 476, 791, 1041];
            return (
              <div
                key={item.label}
                className="absolute flex flex-col items-center"
                style={{ left: positions[i] - 100, top: item.top }}
              >
                <div className="relative w-[40px] h-[40px] flex items-center justify-center text-[24px]">
                  <div className="absolute w-[24px] h-[24px] bg-primary/30 rounded-full blur-[8px]" />
                  <span className="relative z-10">{item.icon}</span>
                </div>
                <span className="mt-[4px] text-[14px] font-medium text-text-secondary whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
