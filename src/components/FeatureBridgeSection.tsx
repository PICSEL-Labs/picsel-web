import Container from "./Container";

export default function FeatureBridgeSection() {
  return (
    <section className="bg-linear-to-b from-[#FFB6D3] to-[#FFC8DC]">
      <Container className="py-20 lg:py-40 text-center">
        <h2 className="text-6 sm:text-8 lg:text-10 font-bold leading-9.5 sm:leading-12 lg:leading-14">
          <span className="text-primary">픽셀</span>에서는 누구나 쉽게 찾고
          <br />
          다시 꺼내볼 수 있어요
        </h2>
        <p className="mt-5 lg:mt-8 text-3.5 sm:text-4 lg:text-4.5 text-text-secondary leading-6 lg:leading-7">
          지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
          <br />
          포토부스를 찾고-찍고-기억하는 전 과정을 픽셀과 함께 더 쉽고 편하게 해봐요!
        </p>
      </Container>
    </section>
  );
}
