import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      // Cancel any pending animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafId.current = requestAnimationFrame(() => {
        if (cursorRef.current && ringRef.current) {
          // Use transform instead of left/top for better performance
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
          ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };

    window.addEventListener('mousemove', updateCursorPosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main glow dot */}
      <div
        ref={cursorRef}
        className="cursor-glow"
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'rgba(34, 197, 94, 0.4)',
          boxShadow: '0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4), 0 0 45px rgba(34, 197, 94, 0.2)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
      {/* Outer glow ring */}
      <div
        ref={ringRef}
        className="cursor-glow-ring"
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
        }}
      />
    </>
  );
}

