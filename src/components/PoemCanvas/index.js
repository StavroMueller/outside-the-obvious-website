import React, { useEffect, useState, useMemo } from 'react';

const PoemCanvas = ({
  poem,
  className = '',
  fadeInDuration = 800,
  staggerDelay = 150,
  scatterIntensity = 0.3
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
    const maxRowWidth = 70; // Reduced to prevent overflow

    words.forEach((word, i) => {
      const wordWidth = word.length * 3.5; // More generous width estimate

      if (currentRowWidth + wordWidth > maxRowWidth && currentRow.length > 0) {
        rows.push([...currentRow]);
        currentRow = [];
        currentRowWidth = 0;
      }

      currentRow.push({ word, index: i });
      currentRowWidth += wordWidth + 5;
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    // Calculate vertical spacing based on number of rows
    const totalRows = rows.length;
    const verticalSpacing = Math.min(14, 70 / totalRows); // Distribute rows evenly
    const startY = 10;

    rows.forEach((row, rowIndex) => {
      const baseY = startY + (rowIndex * verticalSpacing);

      // Distribute words horizontally across the row
      const rowWidth = 80;
      const wordSpacing = rowWidth / (row.length + 1);

      row.forEach((item, wordIndex) => {
        const seed = item.index * 1000 + rowIndex;
        const baseX = 10 + (wordIndex + 1) * wordSpacing - (wordSpacing / 2);

        // Reduced scatter to prevent overlap
        const randomOffsetX = (seededRandom(seed) - 0.5) * 8 * scatterIntensity;
        const randomOffsetY = (seededRandom(seed + 1) - 0.5) * 4 * scatterIntensity;
        const randomRotation = (seededRandom(seed + 2) - 0.5) * 4 * scatterIntensity;
        const randomScale = 0.95 + seededRandom(seed + 3) * 0.1;
        const caseRandom = seededRandom(seed + 4);

        let formattedWord = item.word;
        if (caseRandom > 0.7 && caseRandom <= 0.9) {
          formattedWord = item.word.toLowerCase();
        } else if (caseRandom > 0.9) {
          formattedWord = item.word.toUpperCase();
        }

        positions[item.index] = {
          word: formattedWord,
          x: Math.max(5, Math.min(90, baseX + randomOffsetX)),
          y: Math.max(5, Math.min(85, baseY + randomOffsetY)),
          rotation: randomRotation,
          scale: randomScale,
          opacity: 0.8 + seededRandom(seed + 5) * 0.2
        };
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
        height: '70vh',
        minHeight: '500px',
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
            fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
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
