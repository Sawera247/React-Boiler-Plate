import React from 'react';
import { TextField } from '@mui/material';
import classNames from 'classnames';

const variants = {
  // Default style with outline
  default: 'border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
  
  // Filled style with background
  filled: 'bg-gray-100 border-transparent focus:bg-white focus:border-blue-500',
  
  // Underlined style
  underlined: 'border-b border-gray-300 focus:border-blue-500',
  
  // Rounded style
  rounded: 'rounded-full border border-gray-300 focus:border-blue-500',
  
  // Minimal style
  minimal: 'border-transparent focus:border-blue-500'
};

const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2',
  lg: 'px-4 py-3 text-lg'
};

export const Input = ({
  variant = 'default',
  size = 'md',
  className,
  useMui = false,
  error,
  helperText,
  ...props
}) => {
  // Use Material-UI TextField if specified
  if (useMui) {
    return (
      <TextField
        variant={variant === 'filled' ? 'filled' : variant === 'minimal' ? 'standard' : 'outlined'}
        size={size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium'}
        error={error}
        helperText={helperText}
        className={className}
        {...props}
      />
    );
  }

  // Custom Tailwind styled input
  return (
    <div className="relative">
      <input
        className={classNames(
          'w-full transition-colors duration-200 outline-none',
          variants[variant],
          sizes[size],
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
          className
        )}
        {...props}
      />
      {error && helperText && (
        <p className="mt-1 text-sm text-red-500">{helperText}</p>
      )}
    </div>
  );
};

// Different input style components
export const DefaultInput = (props) => <Input variant="default" {...props} />;
export const FilledInput = (props) => <Input variant="filled" {...props} />;
export const UnderlinedInput = (props) => <Input variant="underlined" {...props} />;
export const RoundedInput = (props) => <Input variant="rounded" {...props} />;
export const MinimalInput = (props) => <Input variant="minimal" {...props} />;