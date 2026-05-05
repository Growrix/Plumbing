import { ReactNode } from "react";

interface Props {
  badge?: string;
  heading: string;
  subheading?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ badge, heading, subheading, children, className = "" }: Props) {
  return (
    <div className={`bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span className="inline-block bg-white/10 text-accent font-bold px-3 py-1 rounded-full text-sm mb-6 animate-fade-up">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            {heading}
          </h1>
          {subheading && (
            <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {subheading}
            </p>
          )}
          {children && (
            <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}