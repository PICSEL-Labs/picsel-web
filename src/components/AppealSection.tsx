import Container from "./Container";

export default function AppealSection() {
  return (
    <section className="bg-linear-to-b from-[#FFD6E8] to-[#FFB6D3]">
      <Container className="py-20 text-center lg:py-30">
        <h2 className="text-[28px] leading-10.5 font-bold sm:text-[36px] sm:leading-13 lg:text-[48px] lg:leading-16.75">
          <span className="gradient-text">순간을 더 잘 찾고,</span>
          <br />
          <span className="gradient-text">더 잘 기억할 수 있도록</span>
        </h2>
        <p className="text-text-secondary mt-8 text-[16px] leading-7 lg:mt-14 lg:text-[20px] lg:leading-7.5">
          디지털 최소 단위인 픽셀이 모여 한 장의 사진이 되는 것처럼,
        </p>
        <p className="text-text-secondary mt-1 text-[16px] leading-7 lg:text-[20px] lg:leading-9">
          수많은 특별한 순간을 모아{" "}
          <span className="text-primary text-[18px] leading-9 font-bold lg:text-[24px]">
            나만의 포토부스 아카이브
          </span>
          를 함께 만들어봐요!
        </p>
      </Container>
    </section>
  );
}
