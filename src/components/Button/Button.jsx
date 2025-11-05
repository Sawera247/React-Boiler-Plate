import React from 'react';
import { Button as MuiButton } from '@mui/material';
import classNames from 'classnames';

const variants = {
  // Primary button with solid background
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  
  // Secondary button with outline
  secondary: 'border-2 border-gray-500 hover:bg-gray-100 text-gray-700',
  
  // Success button with green theme
  success: 'bg-green-500 hover:bg-green-600 text-white',
  
  // Danger button with red theme
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  
  // Ghost button with transparent background
  ghost: 'hover:bg-gray-100 text-gray-700'
};

const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

// Five different button styles using both Material-UI and custom styling
export const Button = ({ 
  variant = 'primary',
  size = 'md',
  className,
  children,
  useMui = false,
  ...props 
}) => {
  // Use Material-UI button if specified
  if (useMui) {
    return (
      <MuiButton
        variant={variant === 'ghost' ? 'text' : variant === 'secondary' ? 'outlined' : 'contained'}
        color={
          variant === 'primary' ? 'primary' :
          variant === 'secondary' ? 'secondary' :
          variant === 'success' ? 'success' :
          variant === 'danger' ? 'error' :
          'default'
        }
        size={size}
        className={className}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }

  // Custom Tailwind styled button
  return (
    <button
      className={classNames(
        'rounded-md font-medium transition-colors duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Different button style components
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;