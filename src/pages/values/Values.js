import './Values.css';

export default function Values() {
    return (
        <div className="home-container">
            {/* Rodízio Individual */}
            <section className="home-section">
                <img
                    src="/imagem-rodizio.jpg"
                    alt="Rodízio Individual"
                     style={{ marginTop: '70px', marginLeft: '50px' }} 
                    className="home-img"
                />
                <div className="home-text">
                       <h3 style={{ fontSize: '30px', textAlign:'center',marginBottom: 90,color: '#1a1a1a' } }>Valores:</h3>
                    <h3
                    style={{ fontSize: '22px', textAlign:'t',marginBottom: 90 } }>Rodízio Individual de Segunda à Quinta:</h3>
                    <p className="valor destaque">R$ 114,90</p>
                     <h3 style={{ fontSize: '22px', textAlign:'left',marginBottom: 90 } }
                     >Rodízio Individual de Sexta à Domingo:</h3>
                     <p className="valor destaque">R$ 119,90</p>
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