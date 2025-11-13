import { useEffect, useState } from "react";
import "./actualites.css";

const videos = [
    "/videos/actu1.mp4",
    "/videos/actu2.mp4",
    "/videos/actu3.mp4",
    "/videos/actu4.mp4",
];

const newsData = [
    {
        title: "Croisière du nouvel an à Paris des Bateaux Parisiens",
        description:
            "Quoi de mieux que de passer sa soirée du nouvel an sur une des plus belles avenues de Paris.",
        link: "https://www.getyourguide.com/s?partner_id=AJ93XDC&cmp=nye-fr-parisiens-short-url&visitor-id=20UIBBWOENZED3O4ZOK0WS6HO7ZLV1NT&et=59583&lc=16",
    },
    {
        title: "Exposition Monet",
        description:
            "Le musée Marmottan Monet présente du 9 octobre 2025 au 1er mars 2026 l’exposition « L’empire du sommeil »",
        link: "https://www.marmottan.fr/",
    },
    {
        title: "Le Marché de Noël géant de La Défense 2025",
        description:
            "Le Marché de Noël de La Défense s'installe sur le Parvis de La Défense dans les Hauts-de-Seine pour sa 30e édition, du 13 novembre au 28 décembre 2025. Plus de 300 chalets, une patinoire, la présence quotidienne du Père Noël et des animations festives vous attendent.",
        link: "https://www.sortiraparis.com/actualites/noel-et-fetes/articles/46516-marche-de-noel-geant-de-la-defense-dates-et-programme",
    },
];

export default function Actualites() {
    const [index, setIndex] = useState(0);

    // changement de vidéo toutes les 20 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % videos.length);
        }, 20000);
        return () => clearInterval(interval);
    }, []);


    return (

        <>
            <div className="actualites">
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
                        <h2 className="title-actu">Actualités à Paris</h2>
                        <p className="description-actu">
                            Découvrez les dernières nouvelles, expositions, festivals et
                            événements à ne pas manquer dans la capitale française.
                        </p>

                        <div className="news-cards">
                            {newsData.map((news, i) => (
                                <a
                                    key={i}
                                    href={news.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="news-card"
                                >
                                    <h3>{news.title}</h3>
                                    <p>{news.description}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


