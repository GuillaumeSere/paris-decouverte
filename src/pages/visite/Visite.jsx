import './visite.css';

export default function Visite() {
    return (
        <>
            {/* --- Carte Wemap intégrée --- */}
            <section className="map-section">
                <h2 className="map-title">Carte des lieux à visiter à Paris</h2>
                <div className="map-container">
                    <iframe
                        src="https://livemap.getwemap.com/dom?emmid=29188&token=8U2F0YW56DP6QHD1E3595MLAD#/search@48.8872742,2.3345062,11.58"
                        title="Carte interactive de Paris"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
