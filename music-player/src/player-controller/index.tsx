import React from 'react';
import { LucidePlay, LucidePause, LucideSkipForward, LucideSkipBack } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ isPlaying, onPlay, onPause, onNext, onPrev }) => {
  return (
    <div className="flex justify-between mt-4">
      <button onClick={onPrev} className="text-2xl">
        <LucideSkipBack />
      </button>
      {isPlaying ? (
        <button onClick={onPause} className="text-3xl">
          <LucidePause />
        </button>
      ) : (
        <button onClick={onPlay} className="text-3xl">
          <LucidePlay />
        </button>
      )}
      <button onClick={onNext} className="text-2xl">
        <LucideSkipForward />
      </button>
    </div>
  );
};

export default PlayerControls;
