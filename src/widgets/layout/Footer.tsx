import { Fragment } from "react";
import { Container } from "@shared/ui";

type FooterTheme = "light" | "dark";

interface FooterProps {
  theme?: FooterTheme;
}

const TERM_LINKS = [
  { label: "서비스 이용약관", href: "#" },
  { label: "개인정보 처리방침", href: "#" },
] as const;

export default function Footer({ theme = "dark" }: FooterProps) {
  const isDark = theme === "dark";

  return (
    <footer className={isDark ? "bg-bg-dark w-full" : "w-full bg-white"}>
      <Container className="flex flex-col gap-6 pt-6 pb-20 lg:flex-row lg:items-start lg:justify-between lg:py-10">
        {/* 데스크탑에서는 우측, 모바일에서는 상단으로 빠지는 약관 메뉴 */}
        <div className="flex items-center gap-2 lg:order-2">
          {TERM_LINKS.map((link, idx) => (
            <Fragment key={link.label}>
              {idx > 0 && (
                <span
                  aria-hidden
                  className={
                    isDark
                      ? "text-text-light-gray/40 lg:hidden"
                      : "text-text-secondary/40 lg:hidden"
                  }
                >
                  |
                </span>
              )}
              <button
                type="button"
                className={
                  "px-2 py-3 text-[14px] font-bold transition-colors lg:text-[16px] " +
                  (isDark
                    ? "text-text-light-gray hover:text-white"
                    : "text-text-strong hover:text-black")
                }
              >
                {link.label}
              </button>
            </Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-3 lg:order-1">
          <h4 className="text-primary text-[14px] font-extrabold lg:text-[16px]">Contact</h4>

          <a
            href="mailto:picsel.team@gmail.com"
            className={
              "hover:text-primary flex items-center gap-2 text-[14px] font-bold underline-offset-4 transition-colors hover:underline lg:text-[16px] " +
              (isDark ? "text-white" : "text-text-strong")
            }
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
            className={
              "hover:text-primary flex items-center gap-2 text-[14px] font-bold underline-offset-4 transition-colors hover:underline lg:text-[16px] " +
              (isDark ? "text-white" : "text-text-strong")
            }
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
