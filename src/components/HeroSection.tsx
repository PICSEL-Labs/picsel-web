import TwinkleStar from "./TwinkleStar";

export default function HeroSection() {
  return (
    <section id="intro" className="bg-black pt-[90px]">
      <div className="w-[1280px] mx-auto px-[100px] relative" style={{ height: 444 }}>
        {/* Left text */}
        <div className="absolute left-[100px] top-[120px]">
          <h1 className="text-[36px] leading-[56px] font-bold text-white">
            포토부스를 찾고-찍고-사진 보관까지
            <br />
            <span className="text-primary">픽셀</span>에서 한번에!
          </h1>
          <p className="mt-6 text-[18px] text-text-gray font-normal">
            내가 고른 공간에서 내가 만든 순간을 남기다
          </p>
        </div>
        {/* Right twinkle */}
        <div className="absolute right-[100px] top-[13px]">
          <TwinkleStar size={260} />
        </div>
      </div>
    </section>
  );
}
