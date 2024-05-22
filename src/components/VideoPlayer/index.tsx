// VideoPlayer.tsx
import React, { useEffect } from 'react';

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/4890008e-a86d-404c-acf2-8732008dd7ea/players/664ba584c366d7000bfa35a1/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="vid_664ba584c366d7000bfa35a1"
      style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
    >
      <img
        id="thumb_664ba584c366d7000bfa35a1"
        src="https://images.converteai.net/4890008e-a86d-404c-acf2-8732008dd7ea/players/664ba584c366d7000bfa35a1/thumbnail.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <div
        id="backdrop_664ba584c366d7000bfa35a1"
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
        }}
      />
    </div>
  );
};

export default VideoPlayer;
