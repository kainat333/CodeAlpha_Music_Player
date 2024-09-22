// Albums.tsx

import React, { useState } from 'react';
import { albums } from '../../assets/album'; // Import the albums data
import Player from '../player-index'; // Import Player component

const Albums: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);

  const handleSongClick = (songIndex: number) => {
    setCurrentSongIndex(songIndex); // Set current song index to play in Player
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Albums</h1>
      {selectedAlbum === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {albums.map((album) => (
            <div
              key={album.id}
              className="border h-80 border-gray-300 hover:border-gray-700 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden shadow-lg"
              onClick={() => setSelectedAlbum(album.id)}
            >
              <img
                src={album.imgSrc}
                alt={album.title}
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4 text-center bg-gray-800 bg-opacity-50 text-white">
                <h2 className="text-lg font-bold">{album.title}</h2>
                <p className="text-sm">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <img
              src={albums.find((album) => album.id === selectedAlbum)?.imgSrc}
              alt={albums.find((album) => album.id === selectedAlbum)?.title}
              className="w-48 h-48 object-cover mb-2 mx-auto"
            />
            {albums.find((album) => album.id === selectedAlbum)?.title} by{' '}
            {albums.find((album) => album.id === selectedAlbum)?.artist}
          </h2>
          <h3 className="text-lg font-semibold mb-2">Songs:</h3>
          <ul className="list-disc pl-5">
            {albums
              .find((album) => album.id === selectedAlbum)
              ?.songs.map((song, idx) => (
                <li key={idx} className="cursor-pointer" onClick={() => handleSongClick(idx)}>
                  {song.title} by {song.artist}
                </li>
              ))}
          </ul>
          <button
            onClick={() => setSelectedAlbum(null)}
            className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
          >
            Back to Albums
          </button>

          {/* Player Component */}
          {currentSongIndex !== null && (
            <Player
              song={albums[selectedAlbum!].songs[currentSongIndex]} // Ensure Song type matches here
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Albums;
