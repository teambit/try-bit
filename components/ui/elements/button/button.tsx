import React, { ButtonHTMLAttributes } from 'react';
import cs from 'classnames';
import { DotsLoader } from '@teambit/teaching.ui.elements.dots-loader';

const styles = require('./button.module.scss');

export type ButtonProps = {
  /**
   * Determines whether button has a primary or secondary type of styling.
   */
  variant: 'primary' | 'secondary';
  isLoading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cs(styles.base, styles[variant])}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? <DotsLoader /> : children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  isLoading: false,
};
