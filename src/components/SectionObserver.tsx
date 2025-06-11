import { useEffect, useRef } from 'react';

interface SectionObserverProps {
  children: React.ReactNode;
  className?: string;
}

const SectionObserver = ({ children, className = "" }: SectionObserverProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add active class to all scroll-reveal elements within the section
            const revealElements = entry.target.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
            revealElements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

export default SectionObserver; 