import Container from "./Container";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-[#FFD6E8] to-[#FFB6D3]">
      <Container className="py-[80px] lg:py-[120px] text-center">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[42px] sm:leading-[52px] lg:leading-[67px]">
          <span className="gradient-text">순간을 더 잘 찾고,</span>
          <br />
          <span className="gradient-text">더 잘 기억할 수 있도록</span>
        </h2>
        <p className="mt-[32px] lg:mt-[56px] text-[16px] lg:text-[20px] text-text-secondary leading-[28px] lg:leading-[30px]">
          디지털 최소 단위인 픽셀이 모여 한 장의 사진이 되는 것처럼,
        </p>
        <p className="text-[16px] lg:text-[20px] text-text-secondary leading-[28px] lg:leading-[36px] mt-1">
          수많은 특별한 순간을 모아{" "}
          <span className="font-bold text-primary text-[18px] lg:text-[24px] leading-[36px]">나만의 포토부스 아카이브</span>
          를 함께 만들어봐요!
        </p>
      </Container>
    </section>
  );
}
