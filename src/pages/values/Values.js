import './Values.css';

export default function Values() {
    return (
        <div className="home-container">
            {/* Rodízio Individual */}
            <section className="home-section">
                <img
                    src="/sushi3.jpeg"
                    alt="Rodízio Individual"
                    className="home-img"
                />
                <div className="home-text">
                    <h3>Rodízio Individual</h3>
                    <h2>Almoço</h2>
                    <p className="valor destaque">R$ 69,90</p>
                    <h2>Jantar</h2>
                    <p className="valor destaque">R$ 79,90</p>
                </div>
            </section>

            {/* Rodízio Casal */}
            <section className="home-section">
                <div className="home-text">
                    <h3>Rodízio-Casal</h3>
                    <p className="valor destaque">R$ 149,90</p>
                </div>
            </section>

            {/* Horários e valores especiais */}
            <section className="home-section">
                <div className="home-text">
                    <h3 style={{ fontSize: '30px', textAlign:'center',marginBottom: 90 } }>Horários</h3>
                    <p style={{ fontSize: '25px', color: 'var( --color-black)'  } }>
                    
                        <strong>Jantar de Segunda à Domingo:</strong> 18h às 23,30h
                    </p>
                  
                </div>
            </section>

            {/* Promoções de código */}
            <section className="promo-section">
                <h2>Promoção de Código</h2>
                <p>
                    Use o código <span className="codigo">TOKTHE10</span> e ganhe 10% de desconto no rodízio de segunda a quinta!
                </p>
            </section>

            {/* Promoções relâmpago */}
            <section className="promo-relampago-section">
                <h2>Promoções Relâmpago</h2>
                <p>
                    Fique atento às nossas redes sociais para promoções relâmpago exclusivas!<br />
                    Válidas por tempo limitado.
                </p>
            </section>
        </div>
    );
}