import React, { useEffect, useState, useMemo } from 'react';

const PoemCanvas = ({
  poem,
  className = '',
  fadeInDuration = 800,
  staggerDelay = 150,
  scatterIntensity = 0.4
}) => {
  const [visibleWords, setVisibleWords] = useState([]);

  const words = useMemo(() => {
    return poem.split(/\s+/).filter(word => word.length > 0);
  }, [poem]);

  const wordPositions = useMemo(() => {
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

      row.forEach((item, wordIndex) => {
        const randomOffsetX = (Math.random() - 0.5) * 15 * scatterIntensity;
        const randomOffsetY = (Math.random() - 0.5) * 12 * scatterIntensity;
        const randomRotation = (Math.random() - 0.5) * 8 * scatterIntensity;
        const randomScale = 0.9 + Math.random() * 0.3;

        positions[item.index] = {
          word: item.word,
          x: Math.max(2, Math.min(88, baseX + randomOffsetX)),
          y: Math.max(5, Math.min(90, baseY + randomOffsetY)),
          rotation: randomRotation,
          scale: randomScale,
          opacity: 0.7 + Math.random() * 0.3
        };

        baseX += item.word.length * 2.8 + 6 + (Math.random() * 4);
      });
    });

    return positions;
  }, [words, scatterIntensity]);

  useEffect(() => {
    const timers = [];

    words.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, index * staggerDelay);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [words, staggerDelay]);

  const formatWord = (word) => {
    if (Math.random() > 0.7) {
      return word.toLowerCase();
    }
    if (Math.random() > 0.9) {
      return word.toUpperCase();
    }
    return word;
  };

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
          {formatWord(pos.word)}
        </span>
      ))}
    </div>
  );
};

export default PoemCanvas;
