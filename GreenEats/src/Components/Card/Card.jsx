
import {Card} from './styles';

export function Cardh({Alimento, Tipo, Valor}) {
    return (
            <Card>
                <div class="card">
                    <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-comida-kawaii-desenhada-a-mao_52683-84890.jpg" alt="" />
                        <div class>
                        <h1>{Alimento}</h1>
                        </div>
                        <div class="bottom">
                                <span>{Valor}</span>
                                <button>+</button>
                        </div>
                </div>
            </Card>
        );
}