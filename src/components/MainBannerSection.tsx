import Container from "./Container";
import TwinkleStar from "./TwinkleStar";

export default function MainBannerSection() {
  return (
    <section className="bg-black pt-navbar lg:pt-navbar-lg">
      <Container className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-12 lg:py-0 lg:min-h-111">
        <div className="relative z-10 pr-32.5 lg:pr-0">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] leading-9.5 sm:leading-11 lg:leading-14 font-bold text-white">
            포토부스를 찾고-찍고-사진 보관까지
            <br />
            <span className="text-primary">픽셀</span>에서 한번에!
          </h1>
          <p className="mt-4 lg:mt-6 text-[15px] lg:text-[18px] text-text-gray font-normal">
            내가 고른 공간에서 내가 만든 순간을 남기다
          </p>
        </div>
        <div className="shrink-0 self-center lg:self-auto w-30 h-37 lg:w-65 lg:h-80">
          <TwinkleStar />
        </div>
      </Container>
    </section>
  );
}
