import React from 'react';

interface Song {
  title: string;
  artist: string;
}

interface SongInfoProps {
  song: Song;
}

const SongInfo: React.FC<SongInfoProps> = ({ song }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">{song.title}</h2>
      <p className="text-gray-600">{song.artist}</p>
    </div>
  );
};

export default SongInfo;
