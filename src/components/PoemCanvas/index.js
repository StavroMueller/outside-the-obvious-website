import React, { useEffect, useState, useMemo } from 'react';

// Each size sets the type scale, how far lines may wander from the left
// edge, and how much each word may tilt and bob.
const sizeConfig = {
  small: {
    minHeight: '7rem',
    fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
    lineGap: '0.4em',
    indentMin: 2,
    indentMax: 14,
    jitter: 0.5
  },
  medium: {
    minHeight: '14rem',
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    lineGap: '0.7em',
    indentMin: 3,
    indentMax: 20,
    jitter: 0.7
  },
  large: {
    minHeight: '72vh',
    fontSize: 'clamp(1.3rem, 2.6vw, 2rem)',
    lineGap: '1.1em',
    indentMin: 4,
    indentMax: 26,
    jitter: 1
  }
};

// Seeded random so a given poem renders the same way every time.
const seededRandom = (seed) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

const PoemCanvas = ({
  poem,
  images = [],
  className = '',
  size = 'large',

  // Timing
  fadeInDuration = 800,
  staggerDelay = 150,

  // How much words tilt, bob and drift. 0 is a tidy poem, 1 is a windy one.
  scatterIntensity = 0.3,

  // Images: pixel width at desktop, before the responsive clamp
  imageMinSize = 230,
  imageSizeRange = 120,
  imageMaxRotation = 7,
  imageOpacity = 0.8,
  imageGrayscale = 30
}) => {
  const [visibleWordCount, setVisibleWordCount] = useState(0);
  const [visibleImageCount, setVisibleImageCount] = useState(0);
  const config = sizeConfig[size] || sizeConfig.large;

  // Lines of words, each word carrying its index in the whole poem so the
  // stagger runs in reading order.
  const lines = useMemo(() => {
    if (!poem) return [];
    let index = 0;
    return poem
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.split(/\s+/).map((word) => ({ word, index: index++ })));
  }, [poem]);

  const totalWords = useMemo(
    () => lines.reduce((sum, line) => sum + line.length, 0),
    [lines]
  );

  // Where each line starts and how each word leans within it.
  const styledLines = useMemo(() => {
    const scatter = scatterIntensity * config.jitter;
    const indentRange = config.indentMax - config.indentMin;

    return lines.map((line, lineIndex) => {
      const seed = (lineIndex + 1) * 311;
      const wave = (Math.sin(lineIndex * 0.9) + 1) / 2;
      const indent =
        config.indentMin + wave * indentRange * 0.7 + seededRandom(seed) * indentRange * 0.3;
      const extraGap = seededRandom(seed + 1) * 0.8 * scatter;

      const words = line.map(({ word, index }) => {
        const wordSeed = index * 1000 + 7;
        const caseRandom = seededRandom(wordSeed);
        let text = word;
        if (caseRandom > 0.75 && caseRandom <= 0.9) {
          text = word.toLowerCase();
        } else if (caseRandom > 0.9) {
          text = word.toUpperCase();
        }

        return {
          text,
          index,
          rotation: (seededRandom(wordSeed + 1) - 0.5) * 3 * scatter,
          bob: (seededRandom(wordSeed + 2) - 0.5) * 0.5 * scatter,
          scale: 0.96 + seededRandom(wordSeed + 3) * 0.08,
          gap: 0.35 + seededRandom(wordSeed + 4) * 0.55 * scatter,
          opacity: 0.82 + seededRandom(wordSeed + 5) * 0.18
        };
      });

      return { words, indent, extraGap };
    });
  }, [lines, scatterIntensity, config]);

  // Images sit in the margins, alternating left and right, each side spread
  // evenly down the canvas so they overlap only a little.
  const imagePositions = useMemo(() => {
    if (images.length === 0) return [];

    const perSide = [Math.ceil(images.length / 2), Math.floor(images.length / 2)];

    return images.map((url, i) => {
      const seed = (i + 1) * 7777;
      const side = i % 2;
      const slot = Math.floor(i / 2);
      const count = perSide[side];

      const edge = 2 + seededRandom(seed) * 5;
      const rotation = (seededRandom(seed + 2) - 0.5) * imageMaxRotation;
      const width = Math.round(imageMinSize + seededRandom(seed + 3) * imageSizeRange);

      // The first photograph in a column hangs from the top edge, the last
      // stands on the bottom edge, so neither is ever clipped. Any in
      // between take an even share of the height.
      const jitter = (seededRandom(seed + 1) - 0.5) * 6;
      let anchor = 'top';
      let y = 3 + jitter;
      if (count > 1 && slot === count - 1) {
        anchor = 'bottom';
      } else if (slot > 0) {
        y = (slot / (count - 1)) * 60 + 10 + jitter;
      }

      return {
        url,
        side: side === 0 ? 'left' : 'right',
        edge,
        anchor,
        y: Math.max(1, y),
        rotation,
        width
      };
    });
  }, [images, imageMaxRotation, imageMinSize, imageSizeRange]);

  const wordDelay = size === 'small' ? staggerDelay * 0.5 : staggerDelay * 0.6;

  // Stagger words appearing
  useEffect(() => {
    if (totalWords === 0) return;

    setVisibleWordCount(0);
    const timers = [];
    for (let i = 0; i < totalWords; i++) {
      timers.push(setTimeout(() => setVisibleWordCount(i + 1), i * wordDelay));
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [totalWords, wordDelay]);

  // Stagger images appearing, spaced through the run of words
  useEffect(() => {
    if (images.length === 0) return;

    setVisibleImageCount(0);
    const timers = [];
    const imageInterval = (totalWords * wordDelay) / (images.length + 1);

    images.forEach((_, index) => {
      timers.push(
        setTimeout(() => setVisibleImageCount(index + 1), (index + 1) * imageInterval)
      );
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [images, totalWords, wordDelay]);

  if (totalWords === 0) {
    return null;
  }

  return (
    <div
      className={`poem-canvas poem-canvas--${size} ${images.length > 0 ? 'poem-canvas--with-images' : ''} ${className}`}
      style={{ minHeight: config.minHeight }}
    >
      {imagePositions.length > 0 && (
        <div className="poem-images" aria-hidden="true">
          {imagePositions.map((pos, index) => (
            <div
              key={`img-${index}`}
              className="poem-image"
              style={{
                [pos.side]: `${pos.edge.toFixed(1)}%`,
                [pos.anchor]: `${pos.y.toFixed(1)}%`,
                width: `clamp(${Math.round(pos.width * 0.45)}px, ${(pos.width / 14).toFixed(1)}vw, ${pos.width}px)`,
                transform: `rotate(${pos.rotation.toFixed(2)}deg)`,
                opacity: index < visibleImageCount ? 1 : 0,
                transition: `opacity ${fadeInDuration * 1.5}ms ease-out`
              }}
            >
              <img
                src={pos.url}
                alt=""
                loading="lazy"
                style={{
                  filter: `grayscale(${imageGrayscale}%)`,
                  '--poem-image-opacity': imageOpacity
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="poem-lines" style={{ fontSize: config.fontSize, gap: config.lineGap }}>
        {styledLines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="poem-line"
            style={{
              marginLeft: `calc(${line.indent.toFixed(1)}% * var(--poem-indent-scale, 1))`,
              marginTop: lineIndex === 0 ? 0 : `${line.extraGap.toFixed(2)}em`
            }}
          >
            {line.words.map((word) => (
              <span
                key={word.index}
                className="poem-word"
                style={{
                  transform: `translateY(${word.bob.toFixed(2)}em) rotate(${word.rotation.toFixed(2)}deg) scale(${word.scale.toFixed(2)})`,
                  opacity: word.index < visibleWordCount ? word.opacity : 0,
                  marginRight: `${word.gap.toFixed(2)}em`,
                  transition: `opacity ${fadeInDuration}ms ease-out, transform 0.3s ease, color 0.3s ease`
                }}
              >
                {word.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoemCanvas;
