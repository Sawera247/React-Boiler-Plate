import React from 'react';
import { Dialog as MuiDialog, DialogContent, DialogTitle } from '@mui/material';
// import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

const variants = {
  // Default style
  default: 'bg-white shadow-xl rounded-lg',
  
  // Borderless style
  borderless: 'bg-white shadow-2xl',
  
  // Dark theme
  dark: 'bg-gray-800 text-white',
  
  // Colorful theme
  colorful: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
  
  // Minimal style
  minimal: 'bg-white border'
};

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full'
};

export const Modal = ({
  variant = 'default',
  size = 'md',
  isOpen,
  onClose,
  title,
  children,
  useMui = false,
  className,
  ...props
}) => {
  // Use Material-UI Dialog if specified
  if (useMui) {
    return (
      <MuiDialog
        open={isOpen}
        onClose={onClose}
        maxWidth={size}
        fullWidth
        {...props}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>{children}</DialogContent>
      </MuiDialog>
    );
  }

  if (!isOpen) return null;

  // Custom Tailwind styled modal
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div
          className={classNames(
            'relative w-full transform transition-all',
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
            <span className="h-6 w-6">✕</span>
          </button>

          {/* Title */}
          {title && (
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Different modal style components
export const DefaultModal = (props) => <Modal variant="default" {...props} />;
export const BorderlessModal = (props) => <Modal variant="borderless" {...props} />;
export const DarkModal = (props) => <Modal variant="dark" {...props} />;
export const ColorfulModal = (props) => <Modal variant="colorful" {...props} />;
export const MinimalModal = (props) => <Modal variant="minimal" {...props} />;