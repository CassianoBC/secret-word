import './GameOver.css'

export default function GameOver({ retry }) {
    return (
        <div>
            <h1>Fim de Jogo</h1>
            <button onClick={retry}>Reiniciar Jogo</button>
        </div>
    )
}
