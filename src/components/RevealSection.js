import React from 'react';
import useInView from '../hooks/useInView';

const RevealSection = ({ children, className = '', style = {}, as: Tag = 'section', delay = 0 }) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
};

export default RevealSection;
