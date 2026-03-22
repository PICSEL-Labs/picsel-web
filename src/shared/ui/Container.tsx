interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-(--spacing-page) lg:px-(--spacing-page-lg) ${className}`}>
      {children}
    </div>
  );
}
