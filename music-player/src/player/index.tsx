import React, { useState, useRef } from 'react';
import PlayerControls from '../player-controller';
import SongInfo from '../song-info';

interface Song {
  title: string;
  artist: string;
  src: string;
}

const songs: Song[] = [
  { title: 'Jo tm mere ho', artist: 'Anuv jan', src: '/music-files/song1.mpeg' },
  { title: 'Song 2', artist: 'Artist 2', src: '/music-files/song2.mpeg' },
  { title: 'Song 3', artist: 'Artist 3', src: '/music-files/song2.mpeg' },
];

const Player: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSong = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-screen h-screen bg-[url('/pictures/image1.png')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Song Info Component */}
        <SongInfo song={songs[currentSongIndex]} />
        {/* Player Controls Component */}
        <PlayerControls
          isPlaying={isPlaying}
          onPlay={playSong}
          onPause={pauseSong}
          onNext={nextSong}
          onPrev={prevSong}
        />
        {/* Audio Element */}
        <audio ref={audioRef} src={songs[currentSongIndex].src} />
      </div>
    </div>
  );
};

export default Player;
