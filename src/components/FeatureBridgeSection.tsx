import Container from "./Container";

export default function FeatureBridgeSection() {
  return (
    <section className="bg-linear-to-b from-[#FFB6D3] to-[#FFC8DC]">
      <Container className="py-20 text-center lg:py-40">
        <h2 className="text-[24px] leading-9.5 font-bold sm:text-[32px] sm:leading-12 lg:text-[40px] lg:leading-14">
          <span className="text-primary">픽셀</span>에서는 누구나 쉽게 찾고
          <br />
          다시 꺼내볼 수 있어요
        </h2>
        <p className="text-text-secondary mt-5 text-[14px] leading-6 sm:text-[16px] lg:mt-8 lg:text-[18px] lg:leading-7">
          지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
          <br />
          포토부스를 찾고-찍고-기억하는 전 과정을 픽셀과 함께 더 쉽고 편하게 해봐요!
        </p>
      </Container>
    </section>
  );
}
