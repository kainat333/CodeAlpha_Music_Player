// src/data/albums.ts

export interface Song {
  title: string;
  artist: string; // Singer name
  audioSrc: string; // Path to the audio file
  duration?: string; // Optional duration
}

export interface Album {
  id: number;
  title: string;
  artist: string;
  imgSrc: string; // Path to the album cover image
  songs: Song[]; // List of songs
}

export const albums: Album[] = [
  {
    id: 1,
    title: "Party",
    artist: "Arjit Singh Album",
    imgSrc: "/pictures/album1.png",
    songs: [
      {
        title: "Tm mere ho",
        artist: "Arjit Singh",
        audioSrc: "/music-files/song1.mpeg",
      },
      {
        title: "Dhondne ko zamane",
        artist: "Arjit Singh",
        audioSrc: "/music-files/song2.mpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Junoon Album",
    artist: "Atif Aslam",
    imgSrc: "/pictures/album2.png",
    songs: [
      {
        title: "Chandne jb ho raat",
        artist: "Atif Aslam",
        audioSrc: "/music-files/song3.mp3",
      },
      {
        title: "Berukhi",
        artist: "Atif Aslam",
        audioSrc: "/music-files/song1.mpeg",
      },
    ],
  },
  // Add more albums as needed
];
