import Container from "./Container";

export default function EmpathySection() {
  return (
    <section className="bg-white">
      <Container className="py-25 lg:py-50 text-center">
        <h2 className="text-5.5 sm:text-7 lg:text-9 font-bold text-text-primary leading-9 sm:leading-11 lg:leading-14">
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
