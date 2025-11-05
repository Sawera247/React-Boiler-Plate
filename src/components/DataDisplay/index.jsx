import React from 'react';
import { format } from 'date-fns';

// Status badge for different states
export const StatusBadge = ({ status, className }) => {
  const styles = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    inactive: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800',
    default: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status] || styles.default} ${className}`}>
      {status?.charAt(0).toUpperCase() + status?.slice(1)}
    </span>
  );
};

// Data card for displaying statistics
export const StatCard = ({ title, value, icon: Icon, trend, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        {trend && (
          <p className={`mt-2 text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </p>
        )}
      </div>
      {Icon && <Icon className="h-12 w-12 text-gray-400" />}
    </div>
  </div>
);

// Timeline component for activity tracking
export const Timeline = ({ items }) => (
  <div className="flow-root">
    <ul className="-mb-8">
      {items.map((item, itemIdx) => (
        <li key={item.id}>
          <div className="relative pb-8">
            {itemIdx !== items.length - 1 ? (
              <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
            ) : null}
            <div className="relative flex space-x-3">
              <div>
                <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                  item.type === 'task' ? 'bg-blue-500' :
                  item.type === 'comment' ? 'bg-green-500' :
                  'bg-gray-500'
                }`}>
                  {item.icon}
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">{item.content}</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime={item.datetime}>{format(new Date(item.datetime), 'MMM d, yyyy')}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// Search filter component
export const SearchFilter = ({ onSearch, filters, onFilterChange }) => (
  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div className="flex space-x-2">
      {filters.map((filter) => (
        <select
          key={filter.name}
          value={filter.value}
          onChange={(e) => onFilterChange(filter.name, e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">{filter.label}</option>
          {filter.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  </div>
);

// Data grid with sorting and pagination
export const DataGrid = ({ columns, data, onSort, sortConfig, pagination, onPageChange }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.field}
              onClick={() => column.sortable && onSort(column.field)}
              className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                column.sortable ? 'cursor-pointer hover:text-gray-900' : ''
              }`}
            >
              <div className="flex items-center space-x-1">
                <span>{column.label}</span>
                {column.sortable && sortConfig?.field === column.field && (
                  <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.field} className="px-6 py-4 whitespace-nowrap">
                {column.render ? column.render(row[column.field], row) : row[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {pagination && (
      <div className="flex items-center justify-between px-6 py-3 border-t">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onPageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => onPageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    )}
  </div>
);