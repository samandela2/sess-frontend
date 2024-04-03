import React from "react";
import BootstrapButton from "react-bootstrap/Button";
// Import your CSS file

// ...

<BootstrapButton className="btn-black">Button</BootstrapButton>;

interface Props {
  children: string;
  onClick: () => void;
  variant: string;
  color: string; // This will be the name of your CSS class
}

const Button = ({ children, onClick, variant, color }: Props) => {
  return (
    <BootstrapButton variant={variant} onClick={onClick} className={color}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
