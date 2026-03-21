import Container from "./Container";
import TwinkleStar from "./TwinkleStar";

export default function MeaningSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#333333]">
      <Container className="py-[80px] lg:py-[160px]">
        {/* Headline */}
        <div className="text-center">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[42px] lg:leading-[56px]">
            <span className="text-primary">픽셀</span>은 어떤 의미인가요?
          </h2>
        </div>

        {/* Star */}
        <div className="flex justify-center mt-[30px] lg:mt-[40px]">
          <TwinkleStar size={110} />
        </div>

        {/* Body */}
        <div className="text-center mt-[30px] lg:mt-[40px]">
          <div className="flex items-center justify-center gap-0 flex-wrap">
            <span className="text-[16px] lg:text-[20px] font-bold text-primary">PICSEL</span>
            <span className="text-[16px] lg:text-[20px] text-white">은 Picture와 Select의 합성어로,</span>
          </div>
          <p className="text-[16px] lg:text-[20px] text-white mt-3">
            <span className="relative inline-block">
              <span className="relative z-10 font-bold">포토부스에서 셔터가 눌리는 찰나의 순간</span>
              <span className="absolute bottom-0 left-0 right-0 h-[8px] bg-gradient-to-r from-primary/60 to-primary-light/60 z-0" />
            </span>
            을 의미해요
          </p>
        </div>
      </Container>
    </section>
  );
}
