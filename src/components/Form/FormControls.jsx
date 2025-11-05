import React from 'react';
import {
  Checkbox as MuiCheckbox,
  Radio as MuiRadio,
  Switch as MuiSwitch,
  FormControlLabel
} from '@mui/material';
import classNames from 'classnames';

// Checkbox Styles
const checkboxVariants = {
  default: 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2',
  square: 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-none focus:ring-green-500 focus:ring-2',
  circle: 'w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-full focus:ring-purple-500 focus:ring-2',
  outline: 'w-4 h-4 text-gray-600 bg-transparent border-2 border-gray-600 focus:ring-gray-500 focus:ring-2',
  minimal: 'w-3 h-3 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2'
};

export const Checkbox = ({ variant = 'default', useMui = false, label, className, ...props }) => {
  if (useMui) {
    return (
      <FormControlLabel
        control={<MuiCheckbox {...props} />}
        label={label}
        className={className}
      />
    );
  }

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className={classNames(
          'transition-colors duration-200',
          checkboxVariants[variant],
          className
        )}
        {...props}
      />
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};

// Radio Styles
const radioVariants = {
  default: 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2',
  large: 'w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2',
  outline: 'w-4 h-4 text-purple-600 bg-transparent border-2 border-purple-600 focus:ring-purple-500 focus:ring-2',
  colored: 'w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500 focus:ring-2',
  minimal: 'w-3 h-3 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 focus:ring-2'
};

export const Radio = ({ variant = 'default', useMui = false, label, className, ...props }) => {
  if (useMui) {
    return (
      <FormControlLabel
        control={<MuiRadio {...props} />}
        label={label}
        className={className}
      />
    );
  }

  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className={classNames(
          'transition-colors duration-200',
          radioVariants[variant],
          className
        )}
        {...props}
      />
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};

// Switch Styles
const switchVariants = {
  default: 'bg-gray-200 peer-checked:bg-blue-600',
  large: 'bg-gray-200 peer-checked:bg-green-600 w-14 h-7',
  slim: 'bg-gray-200 peer-checked:bg-purple-600 w-8 h-4',
  square: 'bg-gray-200 peer-checked:bg-indigo-600 rounded-none',
  colorful: 'bg-pink-200 peer-checked:bg-pink-600'
};

export const Switch = ({ variant = 'default', useMui = false, label, className, ...props }) => {
  if (useMui) {
    return (
      <FormControlLabel
        control={<MuiSwitch {...props} />}
        label={label}
        className={className}
      />
    );
  }

  return (
    <label className="inline-flex items-center">
      <div className="relative inline-block">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className={classNames(
          'w-11 h-6 rounded-full transition-colors duration-200',
          switchVariants[variant],
          className
        )} />
        <div className={classNames(
          'absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200',
          'peer-checked:translate-x-5'
        )} />
      </div>
      {label && <span className="ml-3">{label}</span>}
    </label>
  );
};