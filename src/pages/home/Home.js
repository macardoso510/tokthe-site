import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            {/* Primeiro bloco: imagem esquerda, texto direita */}
            <section className="home-section">
                <img
                    src="/sushi1.jpeg"
                    alt="Mesa posta"
                    className="home-img"
                />
                <div className="home-text">
                    <h3>História Tokthe Sushi</h3>
                    <h2>Um restaurante incrível no coração da cidade</h2>
                    <p>
                        Este lugar é aconchegante, amigável e serve culinária japonesa autêntica. 
                        Tokthe Sushi oferece uma grande variedade de sushis, sashimis e pratos quentes.
                    </p>
                </div>
            </section>

            {/* Segundo bloco: texto esquerda, imagem direita */}
            <section className="home-section reverse">
                <img
                    src="/sushi2.jpeg"
                    alt="Prato de sushi"
                    className="home-img"
                />
                <div className="home-text">
                    <h3>Experiência Única</h3>
                    <h2>Sabores que surpreendem</h2>
                    <p>
                        Ingredientes frescos, ambiente sofisticado e atendimento diferenciado. 
                        Venha viver uma experiência gastronômica inesquecível.
                    </p>
                </div>
            </section>

            {/* Texto centralizado */}
            <section className="home-center-text">
                <span className="home-center-subtitle">TOKTHE SUSHI CONCEITO & HISTÓRIA</span>
                <h2>
                    Decidimos criar um ambiente acolhedor e refinado<br />
                    onde nossos clientes possam desfrutar da melhor culinária japonesa,<br />
                    preparada com máxima dedicação e qualidade.
                </h2>
            </section>
        </div>
    );
}