
import {Card} from './styles';

export function Cardh({Alimento, Tipo, Valor}) {
    return (
            <Card>
                <div class="card">
                <img src="https://t3.ftcdn.net/jpg/05/31/49/32/360_F_531493238_YOdY3Y4xLpPgHMxo3zegSxl1DgJOsr4k.jpg" alt="" />
                <div>
                <h1>{Alimento}</h1>
                <h2>{Tipo}</h2>
                <span>{Valor}</span>
                <button>Adicionar ao carrinho</button>
                </div>
                </div>
            </Card>
        );
}