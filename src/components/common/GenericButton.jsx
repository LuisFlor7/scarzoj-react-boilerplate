import { Button } from "react-bootstrap";

export const GenericButton = ({
  variant = "primary",
  text = "Generic Button",
}) => {
  return <Button variant={variant}>{text}</Button>;
};
