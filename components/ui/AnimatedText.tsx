"use client"; 
import React, { useState, useEffect, useMemo } from 'react';

const TextAnimation = () => {
  const phrases = useMemo(() => ["nerd.", "designer.", "gamer."], []);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [delta, setDelta] = useState(50); 
  const typingSpeed = 70; 
  const waitBeforeDelete = 2000; 
  const waitBeforeNewPhrase = 200; 

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const tick = () => {
      let newText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(newText);

      let newDelta = typingSpeed;

      if (!isDeleting && newText === currentPhrase) {
        newDelta = waitBeforeDelete;
        setIsDeleting(true);
      } else if (isDeleting && newText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        newDelta = waitBeforeNewPhrase;
      }

      setDelta(newDelta);
    };

    const timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentPhraseIndex, delta]);

  const cursorStyle = {
    opacity: 1,
    animation: "blink 0.6s infinite",
  };

  return (
    <div className='text-white' style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold' }}>
      <span>I'm a </span>
      <span>{text}</span>
      <span style={cursorStyle} className="cursor">_</span>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          animation: blink 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default TextAnimation;
