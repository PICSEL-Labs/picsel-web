import { Container } from "@shared/ui";

export default function Footer() {
  return (
    <footer className="border-border border-t bg-white">
      <Container>
        {/* Top links */}
        <div className="flex gap-6 py-3.5">
          <button className="text-text-primary hover:text-primary px-2 text-[14px] transition-colors">
            서비스 이용약관
          </button>
          <button className="text-text-primary hover:text-primary px-2 text-[14px] font-semibold transition-colors">
            개인정보 처리방침
          </button>
        </div>

        {/* Main */}
        <div className="flex flex-col items-start justify-between gap-6 py-3.5 sm:flex-row">
          <div>
            <span className="text-primary text-[18px] font-extrabold">PICSEL</span>
            <p className="text-text-secondary mt-4 text-[14px] leading-6.5">
              내가 고른 공간에서,
              <br />
              내가 만든 순간을 남기다
            </p>
          </div>
          <div>
            <h4 className="text-text-primary mb-4 text-[14px] font-semibold">문의</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@pixel.com"
                className="text-text-secondary hover:text-primary flex items-center gap-2 text-[14px] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@pixel.com
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary flex items-center gap-2 text-[14px] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-border border-t py-6 text-center">
          <p className="text-text-gray text-[13px]">&copy; 2026 픽셀. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
