import React from 'react';

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-5">
      {/* Subtle texture pattern */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-emerald-950/10 to-emerald-950/30"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 eco-geometric-pattern opacity-5"></div>
      </div>
      
      {/* Light beams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute eco-light-beam"
            style={{
              left: `${30 + i * 20}%`,
              top: '-20%',
              width: '1px',
              height: '140%',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)',
              transform: `rotate(${45 + i * 15}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BackgroundPattern;