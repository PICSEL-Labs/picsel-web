import Container from "./Container";
import TwinkleStar from "./TwinkleStar";

export default function MainBannerSection() {
  return (
    <section className="pt-navbar lg:pt-navbar-lg bg-black">
      <Container className="flex flex-col py-12 lg:min-h-111 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="relative z-10 pr-32.5 lg:pr-0">
          <h1 className="text-[24px] leading-9.5 font-bold text-white sm:text-[28px] sm:leading-11 lg:text-[36px] lg:leading-14">
            포토부스를 찾고-찍고-사진 보관까지
            <br />
            <span className="text-primary">픽셀</span>에서 한번에!
          </h1>
          <p className="text-text-gray mt-4 text-[15px] font-normal lg:mt-6 lg:text-[18px]">
            내가 고른 공간에서 내가 만든 순간을 남기다
          </p>
        </div>
        <div className="h-37 w-30 shrink-0 self-center lg:h-80 lg:w-65 lg:self-auto">
          <TwinkleStar />
        </div>
      </Container>
    </section>
  );
}
