import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const calculateReadTimeEmoji = (minutes) => {
    const emojis = minutes < 30
      ? "☕️".repeat(Math.ceil(minutes / 5))
      : "🍱".repeat(Math.ceil(minutes / 10));

    return `${emojis} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"}</small>
      <small>{calculateReadTimeEmoji(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
