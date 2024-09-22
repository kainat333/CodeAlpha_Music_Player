import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from '../player-controller';
import SongInfo from '../song-info';

interface Song {
  title: string;
  artist: string;
  src: string;
}

interface PlayerProps {
  song: Song;
}

const Player: React.FC<PlayerProps> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause any previous song
      audioRef.current = new Audio(song.src); // Load new song
      audioRef.current.play(); // Play the new song
      setIsPlaying(true); // Set the state to playing
    }
  }, [song]);

  const playSong = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="w-screen h-screen bg-[url('/pictures/image1.png')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Song Info Component */}
        <SongInfo song={song} />
        {/* Player Controls Component */}
        <PlayerControls
          isPlaying={isPlaying}
          onPlay={playSong}
          onPause={pauseSong}
        />
        {/* Audio Element */}
        <audio ref={audioRef} src={song.src} />
      </div>
    </div>
  );
};

export default Player;
