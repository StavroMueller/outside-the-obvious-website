import React, { useEffect, useState, useMemo } from 'react';

const sizeConfig = {
  small: {
    height: '120px',
    minHeight: '100px',
    fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
    verticalSpacing: 35,
    startY: 20,
    scatterMultiplier: 0.5
  },
  medium: {
    height: '200px',
    minHeight: '180px',
    fontSize: 'clamp(1rem, 2vw, 1.4rem)',
    verticalSpacing: 30,
    startY: 15,
    scatterMultiplier: 0.7
  },
  large: {
    height: '70vh',
    minHeight: '500px',
    fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
    verticalSpacing: 14,
    startY: 10,
    scatterMultiplier: 1
  }
};

const PoemCanvas = ({
  poem,
  images = [],
  className = '',
  size = 'large',
  fadeInDuration = 800,
  staggerDelay = 150,
  scatterIntensity = 0.3,
  layout = 'cascade'
}) => {
  const [visibleWords, setVisibleWords] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const config = sizeConfig[size] || sizeConfig.large;

  // Seeded random for consistent renders
  const seededRandom = (seed) => {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
  };

  const words = useMemo(() => {
    if (!poem) return [];
    return poem.split(/\s+/).filter(word => word.length > 0);
  }, [poem]);

  // Calculate image positions - scattered on left and right sides
  const imagePositions = useMemo(() => {
    if (images.length === 0) return [];

    return images.map((url, i) => {
      const seed = (i + 1) * 7777;
      // Alternate between left side (0-15%) and right side (75-95%)
      const isLeft = i % 2 === 0;
      const x = isLeft
        ? 2 + seededRandom(seed) * 13
        : 78 + seededRandom(seed) * 17;

      // Distribute vertically with some randomness
      const baseY = (i / images.length) * 70 + 10;
      const y = baseY + (seededRandom(seed + 1) - 0.5) * 15;

      const rotation = (seededRandom(seed + 2) - 0.5) * 12;
      const imageSize = 60 + seededRandom(seed + 3) * 40; // 60-100px

      return {
        url,
        x: Math.max(1, Math.min(85, x)),
        y: Math.max(5, Math.min(85, y)),
        rotation,
        size: imageSize
      };
    });
  }, [images]);

  const wordPositions = useMemo(() => {
    if (words.length === 0) return [];

    const positions = [];
    const totalWords = words.length;

    if (layout === 'cascade') {
      const verticalStep = 80 / totalWords;
      const startY = 8;
      let currentX = 15 + seededRandom(42) * 30;

      words.forEach((word, i) => {
        const seed = i * 1000;
        const drift = (seededRandom(seed) - 0.5) * 15;
        const waviness = Math.sin(i * 0.7) * 12;
        const jump = seededRandom(seed + 1) > 0.85 ? (seededRandom(seed + 2) - 0.5) * 25 : 0;

        currentX = currentX + drift * 0.3 + waviness * 0.2 + jump;
        currentX = Math.max(8, Math.min(75, currentX));

        const indent = (seededRandom(seed + 3) - 0.3) * 8;
        const y = startY + (i * verticalStep);
        const x = currentX + indent;

        const randomRotation = (seededRandom(seed + 4) - 0.5) * 2 * scatterIntensity;
        const randomScale = 0.97 + seededRandom(seed + 5) * 0.06;
        const caseRandom = seededRandom(seed + 6);

        let formattedWord = word;
        if (caseRandom > 0.75 && caseRandom <= 0.9) {
          formattedWord = word.toLowerCase();
        } else if (caseRandom > 0.9) {
          formattedWord = word.toUpperCase();
        }

        positions[i] = {
          word: formattedWord,
          x: Math.max(5, Math.min(85, x)),
          y: Math.max(3, Math.min(92, y)),
          rotation: randomRotation,
          scale: randomScale,
          opacity: 0.85 + seededRandom(seed + 7) * 0.15
        };
      });
    } else {
      const rows = [];
      let currentRow = [];
      let currentRowWidth = 0;
      const maxRowWidth = size === 'small' ? 90 : 70;

      words.forEach((word, i) => {
        const wordWidth = word.length * 3.5;
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

      const totalRows = rows.length;
      const verticalSpacing = Math.min(config.verticalSpacing, 70 / totalRows);
      const startY = config.startY;
      const scatter = scatterIntensity * config.scatterMultiplier;

      rows.forEach((row, rowIndex) => {
        const baseY = startY + (rowIndex * verticalSpacing);
        const rowWidth = 80;
        const wordSpacing = rowWidth / (row.length + 1);

        row.forEach((item, wordIndex) => {
          const seed = item.index * 1000 + rowIndex;
          const baseX = 10 + (wordIndex + 1) * wordSpacing - (wordSpacing / 2);

          const randomOffsetX = (seededRandom(seed) - 0.5) * 8 * scatter;
          const randomOffsetY = (seededRandom(seed + 1) - 0.5) * 4 * scatter;
          const randomRotation = (seededRandom(seed + 2) - 0.5) * 4 * scatter;
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
    }

    return positions;
  }, [words, scatterIntensity, size, config, layout]);

  // Stagger words appearing
  useEffect(() => {
    if (words.length === 0) return;

    setVisibleWords([]);
    const timers = [];
    const baseDelay = size === 'small' ? staggerDelay * 0.5 : staggerDelay;
    const delay = layout === 'cascade' ? baseDelay * 0.6 : baseDelay;

    words.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, index * delay);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [words, staggerDelay, size, layout]);

  // Stagger images appearing - interspersed with words
  useEffect(() => {
    if (images.length === 0) return;

    setVisibleImages([]);
    const timers = [];
    const baseDelay = size === 'small' ? staggerDelay * 0.5 : staggerDelay;
    const wordDelay = layout === 'cascade' ? baseDelay * 0.6 : baseDelay;

    // Calculate when each image should appear (spread throughout the poem)
    const totalDuration = words.length * wordDelay;
    const imageInterval = totalDuration / (images.length + 1);

    images.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, (index + 1) * imageInterval);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [images, words.length, staggerDelay, size, layout]);

  if (!poem || words.length === 0) {
    return null;
  }

  return (
    <div
      className={`poem-canvas ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: config.height,
        minHeight: config.minHeight,
        overflow: 'hidden'
      }}
    >
      {/* Scattered images */}
      {imagePositions.map((pos, index) => (
        <div
          key={`img-${index}`}
          className="poem-image"
          style={{
            position: 'absolute',
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            transform: `rotate(${pos.rotation}deg)`,
            opacity: visibleImages.includes(index) ? 0.6 : 0,
            transition: `opacity ${fadeInDuration * 1.5}ms ease-out`,
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <img
            src={pos.url}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(30%)'
            }}
          />
        </div>
      ))}

      {/* Words */}
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
            fontSize: config.fontSize,
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: size === 'small' ? 'var(--text-muted)' : 'var(--text-primary)',
            whiteSpace: 'nowrap',
            cursor: 'default',
            userSelect: 'none',
            zIndex: 1
          }}
        >
          {pos.word}
        </span>
      ))}
    </div>
  );
};

export default PoemCanvas;
