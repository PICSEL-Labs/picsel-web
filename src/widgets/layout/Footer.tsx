import { Container } from "@shared/ui";

export default function Footer() {
  return (
    <footer className="bg-bg-dark w-full">
      <Container className="flex flex-col gap-6 pt-6 pb-20 lg:pt-6 lg:pb-20">
        {/* Top text-button row (서비스 이용약관 / 개인정보 처리방침) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-text-light-gray px-2 py-3 text-[14px] font-bold transition-colors hover:text-white lg:text-[16px]"
          >
            서비스 이용약관
          </button>
          <span aria-hidden className="text-text-light-gray/40">
            |
          </span>
          <button
            type="button"
            className="text-text-light-gray px-2 py-3 text-[14px] font-bold transition-colors hover:text-white lg:text-[16px]"
          >
            개인정보 처리방침
          </button>
        </div>

        {/* Contact group */}
        <div className="flex flex-col gap-3">
          <h4 className="text-primary text-[14px] font-extrabold lg:text-[16px]">Contact</h4>

          <a
            href="mailto:picsel.team@gmail.com"
            className="hover:text-primary flex items-center gap-2 text-[14px] font-bold text-white underline-offset-4 transition-colors hover:underline lg:text-[16px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            picsel.team@gmail.com
          </a>

          <a
            href="https://www.instagram.com/picsel_kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary flex items-center gap-2 text-[14px] font-bold text-white underline-offset-4 transition-colors hover:underline lg:text-[16px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
            picsel_kr
          </a>
        </div>
      </Container>
    </footer>
  );
}
