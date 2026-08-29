import { useState, useEffect, useRef } from 'react';

export type ScrollDirection = 'down' | 'up' | 'none';

export function useScrollState() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [scrollY, setScrollY] = useState<number>(0);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 5) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current - 5) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
      setScrollY(currentScrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollDirection, scrollY };
}
