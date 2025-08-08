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
            <section className="home-section reverse">
                <img
                    src="/sushi4.jpeg"
                    alt="Rodízio Casal"
                    className="home-img"
                />
                <div className="home-text">
                    <h3>Rodízio Casal</h3>
                    <h2>Almoço</h2>
                    <p className="valor destaque">R$ 129,90</p>
                    <h2>Jantar</h2>
                    <p className="valor destaque">R$ 149,90</p>
                </div>
            </section>

            {/* Horários e valores especiais */}
            <section className="home-section">
                <img
                    src="/sushi5.jpeg"
                    alt="Horários e Feriados"
                    className="home-img"
                />
                <div className="home-text">
                    <h3>Horários</h3>
                    <p>
                        <strong>Almoço:</strong> 11h30 às 15h<br />
                        <strong>Jantar:</strong> 18h às 23h
                    </p>
                    <h3>Finais de Semana e Feriados</h3>
                    <p>
                        <strong>Rodízio Individual:</strong> R$ 89,90<br />
                        <strong>Rodízio Casal:</strong> R$ 169,90
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