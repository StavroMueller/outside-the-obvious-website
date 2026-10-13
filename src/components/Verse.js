import React from 'react';

// Copy on the homepage is set the way the old site read: lowercase, one
// thought per line, each line stepping in a little. Write it as a template
// string with the shape you want; the shared indent is stripped and the
// rest is kept on screen.
const Verse = ({ as: Tag = 'p', className = 'home-copy', children }) => {
  const lines = children.replace(/^\n+|\s+$/g, '').split('\n');
  const indent = Math.min(...lines.filter((line) => line.trim()).map((line) => line.search(/\S/)));

  return <Tag className={`${className} home-verse`}>{lines.map((line) => line.slice(indent)).join('\n')}</Tag>;
};

export default Verse;
