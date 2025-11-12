import { useEffect, useState } from "react";
import "./VideoBackground.css";

const videos = [
  "../../videos/paris1.mp4",
  "../../videos/paris2.mp4",
  "../../videos/paris3.mp4",
];

export default function VideoBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 60000); // change toutes les 60 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-container">
      <video
        key={videos[index]}
        src={videos[index]}
        autoPlay
        muted
        loop
        className="video"
      />
      <div className="overlay">
        <h2>Bienvenue à Paris</h2>
      </div>
    </div>
  );
}
