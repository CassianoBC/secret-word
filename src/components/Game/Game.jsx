
import './Game.css';

export default function Game({ verifyLetter }) {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: 000</span>
            </p>
            <h1>Adivinha a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>Dica...</span>
            </h3>
        </div>
    )
}
