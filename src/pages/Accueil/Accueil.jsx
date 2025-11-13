import VideoBackground from "../../components/VideoBackground/VideoBackground";
import MapParis from "../../components/MapParis/MapParis";
import "./accueil.css";
import cards from "../../data/cardsData";

export default function Accueil() {
    return (
        <main>
            <VideoBackground />
            <section className="accueil">
                <h2>À faire</h2>
                <div className="container">
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <a href={card.link} target="_blank" rel="noopener noreferrer">
                                <img src={card.img} alt={card.alt} />
                            </a>
                            <span>{card.title}</span>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="map">
                <h2>Carte des lieux à visiter</h2>
                <MapParis />
            </section>
        </main>

    );
}
