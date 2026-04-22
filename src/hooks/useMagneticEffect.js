import { useRef, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useMagneticEffect(strength = 0.3) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }, [strength, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
