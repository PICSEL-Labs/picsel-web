import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <Container>
        {/* Top links */}
        <div className="flex gap-[24px] py-[14px]">
          <button className="text-[14px] text-text-primary hover:text-primary transition-colors px-[8px]">
            서비스 이용약관
          </button>
          <button className="text-[14px] font-semibold text-text-primary hover:text-primary transition-colors px-[8px]">
            개인정보 처리방침
          </button>
        </div>

        {/* Main */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 py-[14px]">
          <div>
            <span className="text-[18px] font-extrabold text-primary">PICSEL</span>
            <p className="mt-[16px] text-[14px] text-text-secondary leading-[26px]">
              내가 고른 공간에서,
              <br />내가 만든 순간을 남기다
            </p>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-text-primary mb-[16px]">문의</h4>
            <div className="space-y-[12px]">
              <a href="mailto:contact@pixel.com" className="flex items-center gap-[8px] text-[14px] text-text-secondary hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contact@pixel.com
              </a>
              <a href="#" className="flex items-center gap-[8px] text-[14px] text-text-secondary hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-[24px] text-center">
          <p className="text-[13px] text-text-gray">&copy; 2026 픽셀. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
