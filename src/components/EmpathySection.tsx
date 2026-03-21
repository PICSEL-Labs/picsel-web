import Container from "./Container";

export default function EmpathySection() {
  return (
    <section className="bg-white">
      <Container className="py-[100px] lg:py-[200px] text-center">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-text-primary leading-[36px] sm:leading-[44px] lg:leading-[56px]">
          원하는 포토부스{" "}
          <span className="text-primary underline decoration-primary decoration-[3px] underline-offset-[6px]">쉽게 찾고</span>,
          <br />
          <span className="text-primary underline decoration-primary decoration-[3px] underline-offset-[6px]">편하게 추억</span>
          하고 싶지 않으신가요?
        </h2>
      </Container>
    </section>
  );
}
