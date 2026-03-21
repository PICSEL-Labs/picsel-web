import Container from "./Container";

export default function EmpathySection() {
  return (
    <section className="bg-white">
      <Container className="py-25 text-center lg:py-50">
        <h2 className="text-text-primary text-[22px] leading-9 font-bold sm:text-[28px] sm:leading-11 lg:text-[36px] lg:leading-14">
          원하는 포토부스{" "}
          <span className="text-primary decoration-primary underline decoration-[3px] underline-offset-[6px]">
            쉽게 찾고
          </span>
          ,
          <br />
          <span className="text-primary decoration-primary underline decoration-[3px] underline-offset-[6px]">
            편하게 추억
          </span>
          하고 싶지 않으신가요?
        </h2>
      </Container>
    </section>
  );
}
