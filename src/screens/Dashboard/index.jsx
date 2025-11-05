import React, { useState } from 'react';
import ChartBarIcon from '@heroicons/react/24/outline/esm/ChartBarIcon.js';
import UsersIcon from '@heroicons/react/24/outline/esm/UsersIcon.js';
import ClockIcon from '@heroicons/react/24/outline/esm/ClockIcon.js';
import CurrencyDollarIcon from '@heroicons/react/24/outline/esm/CurrencyDollarIcon.js';
import DocumentTextIcon from '@heroicons/react/24/outline/esm/DocumentTextIcon.js';
import { VerticalNavigation } from '../../components/Navigation/Navigation';
import { StatCard, Timeline, SearchFilter, DataGrid } from '../../components/DataDisplay';

// Sample data - Replace with your actual data
const sampleStats = [
  { title: 'Total Revenue', value: '$50,000', trend: 12, icon: CurrencyDollarIcon },
  { title: 'Active Users', value: '1,234', trend: 8, icon: UsersIcon },
  { title: 'Pending Tasks', value: '45', trend: -5, icon: ClockIcon },
  { title: 'Projects', value: '89', trend: 15, icon: DocumentTextIcon },
];

const sampleActivities = [
  {
    id: 1,
    type: 'task',
    content: 'New project created: E-commerce Platform',
    datetime: '2025-11-04T13:00:00',
    icon: <DocumentTextIcon className="h-5 w-5 text-white" />,
  },
  {
    id: 2,
    type: 'comment',
    content: 'Sarah commented on Project Timeline',
    datetime: '2025-11-04T10:30:00',
    icon: <UsersIcon className="h-5 w-5 text-white" />,
  },
  // Add more activities as needed
];

const sampleTableColumns = [
  { field: 'id', label: 'ID', sortable: true },
  { field: 'name', label: 'Name', sortable: true },
  { field: 'status', label: 'Status', sortable: true },
  { field: 'date', label: 'Date', sortable: true },
  {
    field: 'actions',
    label: 'Actions',
    render: (_, row) => (
      <div className="flex space-x-2">
        <button className="text-blue-600 hover:text-blue-800">Edit</button>
        <button className="text-red-600 hover:text-red-800">Delete</button>
      </div>
    ),
  },
];

const sampleTableData = [
  { id: 1, name: 'Project A', status: 'Active', date: '2025-11-04' },
  { id: 2, name: 'Project B', status: 'Pending', date: '2025-11-03' },
  // Add more data as needed
];

const sampleFilters = [
  {
    name: 'status',
    label: 'Status',
    value: '',
    options: [
      { label: 'All', value: '' },
      { label: 'Active', value: 'active' },
      { label: 'Pending', value: 'pending' },
      { label: 'Completed', value: 'completed' },
    ],
  },
  {
    name: 'date',
    label: 'Date',
    value: '',
    options: [
      { label: 'All', value: '' },
      { label: 'Today', value: 'today' },
      { label: 'This Week', value: 'week' },
      { label: 'This Month', value: 'month' },
    ],
  },
];

const Dashboard = () => {
  const [sortConfig, setSortConfig] = useState({ field: 'id', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  const handleSort = (field) => {
    setSortConfig({
      field,
      direction:
        sortConfig.field === field && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setCurrentPage(1);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex">
        <VerticalNavigation />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {sampleStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Data Table Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Projects Overview</h2>
            <SearchFilter
              onSearch={handleSearch}
              filters={sampleFilters}
              onFilterChange={handleFilterChange}
            />
            <DataGrid
              columns={sampleTableColumns}
              data={sampleTableData}
              onSort={handleSort}
              sortConfig={sortConfig}
              pagination={{
                currentPage,
                totalPages: 5,
              }}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Activity Timeline Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <Timeline items={sampleActivities} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;