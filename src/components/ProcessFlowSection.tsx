import Container from "./Container";

export default function ProcessFlowSection() {
  const items = [
    { icon: "📍", label: "포토부스 검색", top: 112 },
    { icon: "📸", label: "사진 촬영", top: 94 },
    { icon: "📱", label: "QR 업로드", top: 46 },
    { icon: "📖", label: "추억 기록", top: 128 },
  ];

  const positions = ["4.5%", "34.8%", "64%", "87.1%"];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-linear-to-b from-white to-[#FFD6E8]">
        {/* Desktop: percentage-based positioning */}
        <div className="hidden lg:block">
          <Container className="relative">
            <div className="relative" style={{ height: 260 }}>
              {/* Wave SVG */}
              <svg
                className="absolute top-0 right-0 left-0 w-full"
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
                  <div className="relative flex h-10 w-10 items-center justify-center text-[24px]">
                    <div className="bg-primary/30 absolute h-6 w-6 rounded-full blur-sm" />
                    <span className="relative z-10">{item.icon}</span>
                  </div>
                  <span className="text-text-secondary mt-1 text-[14px] font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Mobile/Tablet: flex layout */}
        <div className="px-6 py-12 lg:hidden">
          <div className="mx-auto flex max-w-125 items-center justify-between">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="relative flex h-9 w-9 items-center justify-center text-[20px]">
                  <div className="bg-primary/30 absolute h-5 w-5 rounded-full blur-[6px]" />
                  <span className="relative z-10">{item.icon}</span>
                </div>
                <span className="text-text-secondary mt-1 text-[11px] font-medium whitespace-nowrap sm:text-[12px]">
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
