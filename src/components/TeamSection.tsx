import Container from "./Container";

const teamMembers = [
  {
    role: "Product Manager",
    nameEn: "Kim Kyeongjin",
    nameKo: "김경진",
    tags: ["#ENTP", "#서비스기획"],
    emoji: "👩‍💼",
  },
  {
    role: "Product Designer",
    nameEn: "Jeong Daeun",
    nameKo: "정다은",
    tags: ["#INFP", "#UXUI디자인"],
    emoji: "👩‍🎨",
  },
  {
    role: "Frontend Developer",
    nameEn: "Kim Hyunjung",
    nameKo: "김현중",
    tags: ["#ENTJ", "#프론트엔드"],
    emoji: "👨‍💻",
  },
  {
    role: "Frontend Developer",
    nameEn: "Chae Surin",
    nameKo: "채수린",
    tags: ["#ESTP", "#프론트엔드"],
    emoji: "👩‍💻",
  },
  {
    role: "Backend Developer",
    nameEn: "Cho Junhee",
    nameKo: "조준희",
    tags: ["#ENFP", "#백엔드"],
    emoji: "🧑‍💻",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black pt-30 lg:pt-42.5 pb-15 lg:pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-15">
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-12 lg:leading-14">
            <span className="text-white">Team </span>
            <span className="text-primary">PICSEL</span>
          </h2>
          <p className="mt-4 lg:mt-6 text-[14px] lg:text-[16px] text-text-gray leading-6 lg:leading-6.5">
            안녕하세요.
            <br />
            포토부스에서 찍은 특별한 순간을 더 오래 남길 수 있도록
            <br />
            Picsel을 함께 만들어가는 Team Picsel입니다.
          </p>
          <p className="mt-3 lg:mt-4 text-[14px] lg:text-[16px] text-text-gray">
            앞으로의 Picsel의 꾸준한 성장을 응원해주세요💗
          </p>
          <button className="mt-5 lg:mt-6 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-full text-[14px] font-medium hover:bg-primary-dark transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram 구경가기
          </button>
        </div>

        {/* Team Cards */}
        <div className="space-y-10">
          {teamMembers.map((member) => (
            <div key={member.nameEn} className="relative">
              <div className="absolute -top-4.5 left-6 lg:left-11.75 z-10">
                <span className="text-[12px] lg:text-[14px] font-medium text-text-gray bg-black px-3 border border-border-dark rounded-full py-1.5">
                  {member.role}
                </span>
              </div>
              <div className="bg-bg-card rounded-4 border border-border-dark flex flex-col sm:flex-row items-center gap-6 lg:gap-16 p-6 sm:p-8 lg:p-16">
                <div className="w-30 h-30 sm:w-40 sm:h-40 lg:w-60 lg:h-60 rounded-4 bg-[#2C2C2E] flex items-center justify-center shrink-0">
                  <span className="text-[48px] sm:text-[56px] lg:text-[80px]">{member.emoji}</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-white">{member.nameEn}</h3>
                  <p className="text-[16px] lg:text-[20px] text-primary mt-1 font-bold">{member.nameKo}</p>
                  <div className="flex gap-2 mt-3 lg:mt-4 justify-center sm:justify-start">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 bg-primary/20 text-primary text-[11px] lg:text-[12px] font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
