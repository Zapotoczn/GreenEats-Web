import { Container } from './styles'

export function Input({title, ...rest}) {
    return (
        <Container>
            <h1>{title}</h1>
            <input {...rest} />
        </Container>
    )
}