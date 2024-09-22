import React, { useState, useRef } from 'react';
import { albums } from '../../assets/album'; // Import the albums data
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa'; // Import icons

interface Song {
  title: string;
  artist: string;
  audioSrc: string; // Ensure this matches your data structure
}

const AllSongs: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlaySong = (song: Song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(song.audioSrc);
    audioRef.current.play();
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (currentSong) {
      const currentAlbum = albums.find(album => album.songs.includes(currentSong));
      if (currentAlbum) {
        const currentIndex = currentAlbum.songs.indexOf(currentSong);
        const nextIndex = (currentIndex + 1) % currentAlbum.songs.length;
        handlePlaySong(currentAlbum.songs[nextIndex]);
      }
    }
  };

  const handlePrev = () => {
    if (currentSong) {
      const currentAlbum = albums.find(album => album.songs.includes(currentSong));
      if (currentAlbum) {
        const currentIndex = currentAlbum.songs.indexOf(currentSong);
        const prevIndex = (currentIndex - 1 + currentAlbum.songs.length) % currentAlbum.songs.length;
        handlePlaySong(currentAlbum.songs[prevIndex]);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen p-6">
      <h1 className="text-3xl font-bold">All Songs</h1>
      <ul className="mt-4 list-disc pl-5 flex-grow overflow-y-auto">
        {albums.flatMap((album) =>
          album.songs.map((song, idx) => (
            <li
              key={idx}
              className="cursor-pointer mb-2"
              onClick={() => handlePlaySong(song)}
            >
              {song.title} by {song.artist}
            </li>
          ))
        )}
      </ul>

      {/* Footer for currently playing song */}
      {currentSong && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">{currentSong.title}</h2>
            <p className="text-sm">by {currentSong.artist}</p>
          </div>
          <div className="flex items-center">
            <button onClick={handlePrev} className="p-2">
              <FaBackward size={24} />
            </button>
            {isPlaying ? (
              <button onClick={handlePause} className="p-2">
                <FaPause size={24} />
              </button>
            ) : (
              <button onClick={() => handlePlaySong(currentSong)} className="p-2">
                <FaPlay size={24} />
              </button>
            )}
            <button onClick={handleNext} className="p-2">
              <FaForward size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSongs;
