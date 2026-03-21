const painpoints = [
  { emoji: "😣", text: "현재 촬영 가능한 프레임이\n무엇인지 모르겠어요" },
  { emoji: "😢", text: "내가 원하는 브랜드 매장을\n한눈에 찾기 어려워요" },
  { emoji: "🤔", text: "언제 어디서 찍었는지\n기억이 안 나요" },
  { emoji: "😮‍💨", text: "앨범에서 네컷사진을 찾기 번거로워서\n결국 다시 꺼내보지 않게 돼요" },
  { emoji: "😞", text: "보정이나 프레임 선택이\n아쉬워요" },
];

export default function PainpointSection() {
  const doubled = [...painpoints, ...painpoints];

  return (
    <section className="bg-black py-[20px] overflow-hidden">
      <div className="relative">
        <div className="flex gap-[24px] animate-scroll w-max">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="w-[305px] h-[168px] bg-bg-card rounded-[20px] flex flex-col items-center justify-center px-[24px] flex-shrink-0"
            >
              <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2C2C2E] flex items-center justify-center text-[22px] mb-[8px]">
                {item.emoji}
              </div>
              <p className="text-[14px] text-text-light-gray text-center leading-[24px] whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
