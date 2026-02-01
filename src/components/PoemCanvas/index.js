import React, { useEffect, useState, useMemo } from 'react';

const PoemCanvas = ({
  poem,
  className = '',
  fadeInDuration = 800,
  staggerDelay = 150,
  scatterIntensity = 0.4
}) => {
  const [visibleWords, setVisibleWords] = useState([]);

  // Seeded random for consistent renders
  const seededRandom = (seed) => {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
  };

  const words = useMemo(() => {
    if (!poem) return [];
    return poem.split(/\s+/).filter(word => word.length > 0);
  }, [poem]);

  const wordPositions = useMemo(() => {
    if (words.length === 0) return [];

    const positions = [];
    const rows = [];
    let currentRow = [];
    let currentRowWidth = 0;
    const maxRowWidth = 85;

    words.forEach((word, i) => {
      const wordWidth = word.length * 2.5;

      if (currentRowWidth + wordWidth > maxRowWidth && currentRow.length > 0) {
        rows.push([...currentRow]);
        currentRow = [];
        currentRowWidth = 0;
      }

      currentRow.push({ word, index: i });
      currentRowWidth += wordWidth + 8;
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    rows.forEach((row, rowIndex) => {
      const baseY = 15 + (rowIndex * 18);
      let baseX = 5;

      row.forEach((item) => {
        const seed = item.index * 1000 + rowIndex;
        const randomOffsetX = (seededRandom(seed) - 0.5) * 15 * scatterIntensity;
        const randomOffsetY = (seededRandom(seed + 1) - 0.5) * 12 * scatterIntensity;
        const randomRotation = (seededRandom(seed + 2) - 0.5) * 8 * scatterIntensity;
        const randomScale = 0.9 + seededRandom(seed + 3) * 0.3;
        const caseRandom = seededRandom(seed + 4);

        let formattedWord = item.word;
        if (caseRandom > 0.7 && caseRandom <= 0.9) {
          formattedWord = item.word.toLowerCase();
        } else if (caseRandom > 0.9) {
          formattedWord = item.word.toUpperCase();
        }

        positions[item.index] = {
          word: formattedWord,
          x: Math.max(2, Math.min(88, baseX + randomOffsetX)),
          y: Math.max(5, Math.min(90, baseY + randomOffsetY)),
          rotation: randomRotation,
          scale: randomScale,
          opacity: 0.7 + seededRandom(seed + 5) * 0.3
        };

        baseX += item.word.length * 2.8 + 6 + (seededRandom(seed + 6) * 4);
      });
    });

    return positions;
  }, [words, scatterIntensity]);

  useEffect(() => {
    if (words.length === 0) return;

    setVisibleWords([]);
    const timers = [];

    words.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, index * staggerDelay);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [words, staggerDelay]);

  if (!poem || words.length === 0) {
    return null;
  }

  return (
    <div
      className={`poem-canvas ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        minHeight: '400px',
        overflow: 'hidden'
      }}
    >
      {wordPositions.map((pos, index) => (
        <span
          key={index}
          className="poem-word"
          style={{
            position: 'absolute',
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: `rotate(${pos.rotation}deg) scale(${pos.scale})`,
            opacity: visibleWords.includes(index) ? pos.opacity : 0,
            transition: `opacity ${fadeInDuration}ms ease-out, transform 0.3s ease`,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            cursor: 'default',
            userSelect: 'none'
          }}
        >
          {pos.word}
        </span>
      ))}
    </div>
  );
};

export default PoemCanvas;
