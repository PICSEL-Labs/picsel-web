import Container from "./Container";

export default function FeatureIconsSection() {
  const items = [
    { icon: "📍", label: "포토부스 검색", top: 112 },
    { icon: "📸", label: "사진 촬영", top: 94 },
    { icon: "📱", label: "QR 업로드", top: 46 },
    { icon: "📖", label: "추억 기록", top: 128 },
  ];

  const positions = ["4.5%", "34.8%", "64%", "87.1%"];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-white to-[#FFD6E8]">
        {/* Desktop: percentage-based positioning */}
        <div className="hidden lg:block">
          <Container className="relative">
            <div className="relative" style={{ height: 260 }}>
              {/* Wave SVG */}
              <svg
                className="absolute top-0 left-0 right-0 w-full"
                height="200"
                viewBox="0 0 1080 200"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,150 C120,100 200,160 350,80 C500,0 580,60 700,30 C820,0 900,80 1080,100"
                  stroke="rgba(255,45,120,0.2)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {items.map((item, i) => (
                <div
                  key={item.label}
                  className="absolute flex flex-col items-center"
                  style={{ left: positions[i], top: item.top }}
                >
                  <div className="relative w-[40px] h-[40px] flex items-center justify-center text-[24px]">
                    <div className="absolute w-[24px] h-[24px] bg-primary/30 rounded-full blur-[8px]" />
                    <span className="relative z-10">{item.icon}</span>
                  </div>
                  <span className="mt-[4px] text-[14px] font-medium text-text-secondary whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Mobile/Tablet: flex layout */}
        <div className="lg:hidden px-6 py-12">
          <div className="flex justify-between items-center max-w-[500px] mx-auto">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="relative w-[36px] h-[36px] flex items-center justify-center text-[20px]">
                  <div className="absolute w-[20px] h-[20px] bg-primary/30 rounded-full blur-[6px]" />
                  <span className="relative z-10">{item.icon}</span>
                </div>
                <span className="mt-1 text-[11px] sm:text-[12px] font-medium text-text-secondary whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
