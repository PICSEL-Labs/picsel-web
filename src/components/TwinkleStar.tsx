export default function TwinkleStar({
  size,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const style = size ? { width: size, height: size * 1.23 } : undefined;
  return (
    <div className={`relative ${!size ? "w-full h-full" : ""} ${className}`} style={style}>
      {/* Main 4-point star */}
      <svg viewBox="0 0 340 418" fill="none" className="w-full h-full">
        <defs>
          <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFE8F0" />
            <stop offset="100%" stopColor="#FFB8D4" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <path
          d="M170 0 Q172 130 200 170 Q240 172 340 209 Q240 246 200 248 Q172 288 170 418 Q168 288 140 248 Q100 246 0 209 Q100 172 140 170 Q168 130 170 0Z"
          fill="url(#starGrad)"
        />
      </svg>
      {/* Small pink stars */}
      <svg className="absolute top-[5%] right-[2%] animate-twinkle" style={{ animationDelay: "0.3s" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 0C8.4 5 11 7.6 16 8C11 8.4 8.4 11 8 16C7.6 11 5 8.4 0 8C5 7.6 7.6 5 8 0Z" fill="#FF2D78"/>
      </svg>
      <svg className="absolute bottom-[30%] left-[2%] animate-twinkle" style={{ animationDelay: "0.8s" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 0C8.4 5 11 7.6 16 8C11 8.4 8.4 11 8 16C7.6 11 5 8.4 0 8C5 7.6 7.6 5 8 0Z" fill="#FF2D78"/>
      </svg>
      <svg className="absolute top-[55%] right-[12%] animate-twinkle" style={{ animationDelay: "1.2s" }} width="26" height="38" viewBox="0 0 26 38" fill="none">
        <path d="M13 0Q14 12 20 19Q14 26 13 38Q12 26 6 19Q12 12 13 0Z" fill="#FFB8D4"/>
      </svg>
      <svg className="absolute top-[15%] left-[15%] animate-twinkle" style={{ animationDelay: "1.8s" }} width="26" height="38" viewBox="0 0 26 38" fill="none">
        <path d="M13 0Q14 12 20 19Q14 26 13 38Q12 26 6 19Q12 12 13 0Z" fill="#FFB8D4"/>
      </svg>
    </div>
  );
}
