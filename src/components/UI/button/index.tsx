import React from "react";
import { Button as ButtonComponent } from "reactstrap";
import { ColorButtom } from "../../../assets";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  color?: ColorButtom;
}

const Button = (props: Props): JSX.Element => {
  const { children, type, onClick, className, color } = props;
  return (
    <React.Fragment>
      <ButtonComponent
        color={color}
        type={type}
        onClick={onClick}
        className={className}
        {...(onClick && { onClick: onClick })}
      >
        {children}
      </ButtonComponent>
    </React.Fragment>
  );
};

export default Button;
