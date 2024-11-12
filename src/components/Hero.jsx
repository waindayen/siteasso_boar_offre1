import React from 'react';
import { useEffect, useRef } from 'react';
import BackgroundPattern from './BackgroundPattern';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Vignettes animation
      const vignettes = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        opacity: Math.random() * 0.15,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? 'rgba(255, 255, 255,' : 'rgba(4, 120, 87,'
      }));

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        vignettes.forEach(vignette => {
          vignette.y -= vignette.speed;
          if (vignette.y + vignette.size < 0) {
            vignette.y = canvas.height + vignette.size;
            vignette.x = Math.random() * canvas.width;
          }

          const gradient = ctx.createRadialGradient(
            vignette.x, vignette.y, 0,
            vignette.x, vignette.y, vignette.size
          );
          gradient.addColorStop(0, `${vignette.color}${vignette.opacity})`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(
            vignette.x - vignette.size,
            vignette.y - vignette.size,
            vignette.size * 2,
            vignette.size * 2
          );
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"></div>
      
      {/* Animated canvas with vignettes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: 'soft-light' }}
      />
      
      {/* Texture overlay */}
      <BackgroundPattern />
      
      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto animate-fade-in">
        <span className="inline-block text-emerald-300 text-base md:text-lg font-medium mb-4 tracking-wider px-8 py-2 rounded-full eco-badge">
          POUR UN MONDE MEILLEUR
        </span>
        
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight eco-title">
          Ensemble, construisons<br className="hidden sm:block"/> un avenir meilleur
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-emerald-100 max-w-2xl mx-auto eco-text">
          Education, écologie et solidarité pour un monde plus juste et durable
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projets"
            className="group eco-button-primary"
          >
            Découvrir nos projets
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/agir"
            className="group eco-button-secondary"
          >
            Comment agir
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="eco-scroll-indicator">
          <div className="eco-scroll-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;