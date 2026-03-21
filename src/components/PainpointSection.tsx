const painpoints = [
  { emoji: "😣", text: "현재 촬영 가능한 프레임이\n무엇인지 모르겠어요", highlight: "" },
  { emoji: "😢", text: "내가 원하는 브랜드 매장을\n", highlight: "한눈에 찾기 어려워요" },
  { emoji: "🤔", text: "언제 어디서 찍었는지\n", highlight: "기억이 안 나요" },
  { emoji: "😮‍💨", text: "앨범에서 네컷사진을 찾기 번거로워서\n", highlight: "결국 다시 꺼내보지 않게 돼요" },
  { emoji: "😞", text: "보정이나 프레임 선택이\n아쉬워요", highlight: "" },
];

export default function PainpointSection() {
  const doubled = [...painpoints, ...painpoints];

  return (
    <section className="bg-gradient-to-b from-[#333333] to-white py-10 lg:py-15 overflow-hidden">
      <div className="relative">
        <div className="flex gap-4 lg:gap-6 animate-scroll w-max">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="w-60 lg:w-[305px] h-35 lg:h-42 bg-bg-card rounded-5 flex flex-col items-center justify-center px-4 lg:px-6 flex-shrink-0"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-2.5 bg-[#2C2C2E] flex items-center justify-center text-[20px] lg:text-[22px] mb-2">
                {item.emoji}
              </div>
              <p className="text-[12px] lg:text-[14px] text-text-light-gray text-center leading-5 lg:leading-6 whitespace-pre-line">
                {item.text}
                {item.highlight && (
                  <span className="text-primary font-semibold">{item.highlight}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
