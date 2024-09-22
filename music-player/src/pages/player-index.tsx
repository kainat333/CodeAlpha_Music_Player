import React, { useState, useRef, useEffect } from 'react';
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
];

const Player: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    }
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
        audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
      }
    };
  }, []);

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
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Song Info */}
        <SongInfo song={songs[currentSongIndex]} />
        {/* Player Controls */}
        <PlayerControls
          isPlaying={isPlaying}
          onPlay={playSong}
          onPause={pauseSong}
          onNext={nextSong}
          onPrev={prevSong}
        />
        {/* Time and Progress Bar */}
        <div className="flex flex-col items-end">
          <div className="text-white">{`${Math.floor(currentTime)} / ${Math.floor(duration)}`}</div>
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={(e) => {
              const seekTime = Number(e.target.value);
              if (audioRef.current) {
                audioRef.current.currentTime = seekTime;
                setCurrentTime(seekTime);
              }
            }}
            className="w-full"
          />
        </div>
      </div>
      <audio ref={audioRef} src={songs[currentSongIndex].src} />
    </div>
  );
};

export default Player;
