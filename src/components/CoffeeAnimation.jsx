import React, { useEffect, useRef } from 'react';
import './CoffeeAnimation.css';

const frameCount = 80;
const folderPath = '/Coffee_cup_lid_202604220105_000/Coffee_cup_lid_202604220105_';

const CoffeeAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const currentIndexRef = useRef(0);
  const hasDrawnRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Build image array
    const imgs = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `${folderPath}${i.toString().padStart(3, '0')}.jpg`;
      imgs.push(img);
    }
    imagesRef.current = imgs;

    // ---- Drawing helpers ----
    const drawImage = (img) => {
      if (!img || img.naturalWidth === 0) return;
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      // Don't clear — just paint over, so we never flash black
      ctx.drawImage(img, x, y, w, h);
      hasDrawnRef.current = true;
    };

    const drawBestFrame = (targetIndex) => {
      const target = imgs[targetIndex];
      // If the exact frame is ready, draw it
      if (target && target.complete && target.naturalWidth > 0) {
        drawImage(target);
        return;
      }
      // Otherwise find the nearest loaded frame (search outward)
      for (let offset = 1; offset < frameCount; offset++) {
        const before = targetIndex - offset;
        const after = targetIndex + offset;
        if (before >= 0) {
          const fb = imgs[before];
          if (fb && fb.complete && fb.naturalWidth > 0) {
            drawImage(fb);
            return;
          }
        }
        if (after < frameCount) {
          const fa = imgs[after];
          if (fa && fa.complete && fa.naturalWidth > 0) {
            drawImage(fa);
            return;
          }
        }
      }
    };

    // ---- Canvas sizing ----
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBestFrame(currentIndexRef.current);
    };
    resize();

    // ---- When each image loads, redraw if it's the one we need ----
    imgs.forEach((img, i) => {
      img.onload = () => {
        if (i === currentIndexRef.current || !hasDrawnRef.current) {
          resize(); // forces a redraw at current size
        }
      };
    });

    // ---- Scroll handler ----
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const range = rect.height - window.innerHeight;

      let progress = range > 0 ? scrolled / range : 0;
      progress = Math.max(0, Math.min(1, progress));

      const idx = Math.min(frameCount - 1, Math.floor(progress * frameCount));
      currentIndexRef.current = idx;

      requestAnimationFrame(() => drawBestFrame(idx));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section ref={containerRef} className="coffee-anim-container">
      <div className="coffee-anim-sticky">
        {/* Fallback static image so you never see black */}
        <img
          src={`${folderPath}000.jpg`}
          alt=""
          className="coffee-fallback-img"
        />
        <canvas ref={canvasRef} className="coffee-canvas" />

        <div className="coffee-anim-overlay">
          <div className="container">
            <h2 className="cinematic-title">Perfection in Every Drop</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeAnimation;
