import { useEffect, useState } from "react";
import "./sorties.css";
import { sortiesData } from "./sortieData";

const videos = ["/videos/sortie1.mp4", "/videos/sortie2.mp4"];

export default function Sorties() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % videos.length);
        }, 20000); // toutes les 20 secondes
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sorties-paris">
            {/* --- Vidéos de fond --- */}
            <div className="video-background">
                {videos.map((src, i) => (
                    <video
                        key={i}
                        src={src}
                        autoPlay
                        muted
                        loop
                        className={`video-slide ${i === index ? "active" : ""}`}
                    />
                ))}
            </div>

            {/* --- Contenu principal --- */}
            <div className="overlay">
                <div className="content">
                    <h2 className="title-sortie">Sorties à Paris</h2>
                    <p className="description-sortie">
                        Découvrez les meilleurs endroits où sortir à Paris : restaurants,
                        spectacles, balades, expositions et lieux incontournables.
                    </p>

                    <div className="sorties-grid">
                        {sortiesData.map((sortie, i) => (
                            <div key={i} className="sortie-card">
                                <img src={sortie.image} alt={sortie.title} />
                                <h3>{sortie.title}</h3>
                                <p>{sortie.description}</p>
                                <a
                                    href={sortie.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sortie-link"
                                >
                                    En savoir plus →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
