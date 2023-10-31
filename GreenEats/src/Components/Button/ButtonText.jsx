import {Container} from './styles';

export function ButtonText({title, isactive = false, ...rest}) {
    return (
            <Container type= "button"{...rest}>
                {title}
            </Container>
        );
}