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
  layout = 'cascade',

  // Timing
  fadeInDuration = 800,
  staggerDelay = 150,

  // Word positioning
  scatterIntensity = 0.3,
  wordStartX = 15,
  wordStartXRange = 30,
  wordMinX = 8,
  wordMaxX = 75,
  wordDriftAmount = 15,
  wordWaveFrequency = 0.7,
  wordWaveAmplitude = 12,
  wordJumpChance = 0.85,
  wordJumpAmount = 25,
  wordIndentRange = 8,
  wordVerticalSpread = 80,
  wordStartY = 8,

  // Image positioning
  imageLeftMin = 2,
  imageLeftRange = 13,
  imageRightMin = 78,
  imageRightRange = 17,
  imageVerticalSpread = 70,
  imageVerticalOffset = 10,
  imageVerticalRandomness = 15,
  imageMinSize = 60,
  imageSizeRange = 40,
  imageMaxRotation = 12,
  imageOpacity = 0.6,
  imageGrayscale = 30
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
      const isLeft = i % 2 === 0;
      const x = isLeft
        ? imageLeftMin + seededRandom(seed) * imageLeftRange
        : imageRightMin + seededRandom(seed) * imageRightRange;

      const baseY = (i / images.length) * imageVerticalSpread + imageVerticalOffset;
      const y = baseY + (seededRandom(seed + 1) - 0.5) * imageVerticalRandomness;

      const rotation = (seededRandom(seed + 2) - 0.5) * imageMaxRotation;
      const imgSize = imageMinSize + seededRandom(seed + 3) * imageSizeRange;

      return {
        url,
        x: Math.max(1, Math.min(85, x)),
        y: Math.max(5, Math.min(85, y)),
        rotation,
        size: imgSize
      };
    });
  }, [images, imageLeftMin, imageLeftRange, imageRightMin, imageRightRange,
      imageVerticalSpread, imageVerticalOffset, imageVerticalRandomness,
      imageMaxRotation, imageMinSize, imageSizeRange]);

  const wordPositions = useMemo(() => {
    if (words.length === 0) return [];

    const positions = [];
    const totalWords = words.length;

    if (layout === 'cascade') {
      const verticalStep = wordVerticalSpread / totalWords;
      let currentX = wordStartX + seededRandom(42) * wordStartXRange;

      words.forEach((word, i) => {
        const seed = i * 1000;
        const drift = (seededRandom(seed) - 0.5) * wordDriftAmount;
        const waviness = Math.sin(i * wordWaveFrequency) * wordWaveAmplitude;
        const jump = seededRandom(seed + 1) > wordJumpChance
          ? (seededRandom(seed + 2) - 0.5) * wordJumpAmount
          : 0;

        currentX = currentX + drift * 0.3 + waviness * 0.2 + jump;
        currentX = Math.max(wordMinX, Math.min(wordMaxX, currentX));

        const indent = (seededRandom(seed + 3) - 0.3) * wordIndentRange;
        const y = wordStartY + (i * verticalStep);
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
  }, [words, scatterIntensity, size, config, layout, wordStartX, wordStartXRange,
      wordMinX, wordMaxX, wordDriftAmount, wordWaveFrequency, wordWaveAmplitude,
      wordJumpChance, wordJumpAmount, wordIndentRange, wordVerticalSpread, wordStartY]);

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
            opacity: visibleImages.includes(index) ? imageOpacity : 0,
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
              filter: `grayscale(${imageGrayscale}%)`
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
