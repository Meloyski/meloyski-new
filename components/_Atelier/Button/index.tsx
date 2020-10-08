import * as React from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  children?: any;
  className?: any;
  rounded?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const defaultProps: ButtonProps = {
  size: 'medium',
  variant: 'contained',
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`at-button at-button${
        props.variant ? `--${props.variant}` : ''
      } at-button${props.size ? `--${props.size}` : ''} ${
        props.rounded && 'rounded'
      }`}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
