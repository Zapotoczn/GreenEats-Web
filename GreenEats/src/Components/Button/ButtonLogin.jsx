import { Button } from "./styleLogin";

export function ButtonLogin({ title, isactive = false, ...rest }) {
  return (
    <Button type="button" {...rest}>
      {title}
    </Button>
  );
}
