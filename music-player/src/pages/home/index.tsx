import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const content = [
    {
      id: 1,
      imgSrc: "/pictures/image1.png", // Correct path
      title: "Discover the World of ",
      span: "Music",
      description: `Explore millions of songs, from the latest hits to timeless classics. Enjoy a wide variety of genres, artists, and albums tailored to your taste.`,
    },
    {
      id: 2,
      imgSrc: "/pictures/image8.png", // Correct path
      title: "Create Custom ",
      span: "Playlists",
      description: `Curate your favorite songs into personalized playlists. Whether you're working, relaxing, or celebrating, create the perfect soundtrack for every moment.`,
    },
    {
      id: 3,
      imgSrc: "/pictures/image7.png", // Correct path
      title: "Enjoy Seamless ",
      span: "Streaming",
      description: `Stream your favorite tracks anytime, anywhere. Experience high-quality sound with uninterrupted playback on all your devices.`,
    },
    {
      id: 4,
      imgSrc: "/pictures/image10.png", // Correct path
      title: "Share Your ",
      span: "Favorites",
      description: `Connect with friends and share your favorite tracks, playlists, and albums. Let your music journey inspire others and discover new tunes together.`,
    },
  ];

  return (
    <Slider {...settings}>
      {content.map((page) => (
        <div
          key={page.id}
          className="relative flex items-center justify-center h-screen" // Set height to full screen
        >
          <img
            alt={page.imgSrc}
            src={page.imgSrc} // Using the correct path
            className="absolute inset-0 object-cover w-full h-full" // Cover the entire container
          />
          <div className="absolute top-1/2 left-10 flex flex-col transform -translate-y-1/2">
            <h1 className="text-white text-6xl font-bold">
              {page.title}
              <span className="text-white">{page.span}</span>
            </h1>
            <p className="text-white text-2xl w-96 text-justify">
              {page.description}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Home;
