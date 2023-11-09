import { Button } from "./ButtonStyle";

export function ButtonCadastro({ title, isactive = false, ...rest }) {
  return (
    <Button type="button" {...rest}>
      {title}
    </Button>
  );
}
