'use client';

import { useEffect, useRef } from 'react';

const SPOKE_ANGLES = [0, 30, 60, 90, 120, 150];
const BASE_WIDTH = 1205;

export default function CtaOrbit({ images }: { images: string[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const panel = root?.parentElement;
    if (!root || !panel) return;

    const update = () => {
      const scale = Math.max(0.45, Math.min(1, panel.clientWidth / BASE_WIDTH));
      root.style.setProperty('--cta-orbit-scale', String(scale));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="cta-orbit" aria-hidden="true">
      <div className="cta-orbit-ring">
        <div className="cta-orbit-spin">
        {SPOKE_ANGLES.map((angle, index) => (
          <div
            key={angle}
            className="cta-orbit-spoke"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="cta-orbit-card">
              <img src={images[index % images.length]} alt="" />
            </div>
            <div className="cta-orbit-card cta-orbit-card-flipped">
              <img src={images[(index + 3) % images.length]} alt="" />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
