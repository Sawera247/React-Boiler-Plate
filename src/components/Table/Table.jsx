import React from 'react';
import { 
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import classNames from 'classnames';

const variants = {
  // Default style
  default: 'bg-white border border-gray-200',
  
  // Striped rows
  striped: 'bg-white [&>tbody>*:nth-child(odd)]:bg-gray-50',
  
  // Bordered cells
  bordered: 'bg-white [&>*>tr>*]:border [&>*>tr>*]:border-gray-200',
  
  // Compact style
  compact: 'bg-white text-sm [&>*>tr>*]:py-1 [&>*>tr>*]:px-2',
  
  // Modern style with shadows
  modern: 'bg-white shadow-lg rounded-lg overflow-hidden'
};

export const Table = ({
  variant = 'default',
  className,
  useMui = false,
  headers,
  data,
  ...props
}) => {
  // Use Material-UI Table if specified
  if (useMui) {
    return (
      <TableContainer component={Paper}>
        <MuiTable {...props}>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    );
  }

  // Custom Tailwind styled table
  return (
    <div className={classNames('overflow-x-auto', className)}>
      <table className={classNames(
        'min-w-full divide-y divide-gray-200',
        variants[variant]
      )}>
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Different table style components
export const DefaultTable = (props) => <Table variant="default" {...props} />;
export const StripedTable = (props) => <Table variant="striped" {...props} />;
export const BorderedTable = (props) => <Table variant="bordered" {...props} />;
export const CompactTable = (props) => <Table variant="compact" {...props} />;
export const ModernTable = (props) => <Table variant="modern" {...props} />;