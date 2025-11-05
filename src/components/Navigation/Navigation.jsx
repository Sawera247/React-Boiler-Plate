import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   Bars3Icon as MenuIcon,
//   XMarkIcon,
//   ChevronDownIcon,
// } from '@heroicons/react/20/solid';
import classNames from 'classnames';

// Navigation items - you can customize these based on your needs
const navigationItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Reports', path: '/reports' },
  { name: 'Settings', path: '/settings' },
];

// Base Navigation Component
export const Navigation = ({
  variant = 'horizontal',
  className,
  ...props
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Common link styles
  const linkStyles = {
    horizontal: 'px-3 py-2 rounded-md text-sm font-medium',
    vertical: 'px-4 py-2 text-sm font-medium',
    responsive: 'block px-3 py-2 rounded-md text-base font-medium',
    minimalistic: 'px-2 py-1 text-sm',
    mega: 'flex items-center px-4 py-2 text-sm font-medium',
  };

  // Common active link styles
  const activeLinkStyles = {
    horizontal: 'bg-gray-900 text-white',
    vertical: 'bg-gray-800 text-white',
    responsive: 'bg-gray-900 text-white',
    minimalistic: 'text-blue-600',
    mega: 'text-blue-600',
  };

  // Common inactive link styles
  const inactiveLinkStyles = {
    horizontal: 'text-gray-300 hover:bg-gray-700 hover:text-white',
    vertical: 'text-gray-300 hover:bg-gray-700 hover:text-white',
    responsive: 'text-gray-300 hover:bg-gray-700 hover:text-white',
    minimalistic: 'text-gray-600 hover:text-blue-600',
    mega: 'text-gray-600 hover:text-blue-600',
  };

  const renderLink = (item) => (
    <Link
      key={item.name}
      to={item.path}
      className={classNames(
        linkStyles[variant],
        location.pathname === item.path
          ? activeLinkStyles[variant]
          : inactiveLinkStyles[variant]
      )}
    >
      {item.name}
    </Link>
  );

  return (
    <nav className={classNames('', className)} {...props}>
      {navigationItems.map(renderLink)}
    </nav>
  );
};

// 1. Horizontal Navigation
export const HorizontalNavigation = ({ className, ...props }) => (
  <div className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Navigation
          variant="horizontal"
          className="flex space-x-4"
          {...props}
        />
      </div>
    </div>
  </div>
);

// 2. Vertical Navigation
export const VerticalNavigation = ({ className, ...props }) => (
  <div className="bg-gray-800 w-64 min-h-screen">
    <div className="flex flex-col py-4">
      <Navigation
        variant="vertical"
        className="flex flex-col space-y-1"
        {...props}
      />
    </div>
  </div>
);

// 3. Responsive Navigation
export const ResponsiveNavigation = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {isOpen ? (
                <span className="block h-6 w-6">✕</span>
              ) : (
                <span className="block h-6 w-6">☰</span>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block">
            <Navigation
              variant="responsive"
              className="flex space-x-4"
              {...props}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={classNames('lg:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Navigation
            variant="responsive"
            className="flex flex-col"
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

// 4. Minimalistic Navigation
export const MinimalisticNavigation = ({ className, ...props }) => (
  <div className="border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-12">
        <Navigation
          variant="minimalistic"
          className="flex space-x-8"
          {...props}
        />
      </div>
    </div>
  </div>
);

// 5. Mega Menu Navigation
export const MegaMenuNavigation = ({ className, ...props }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const megaMenuItems = [
    {
      name: 'Products',
      items: [
        { name: 'Analytics', description: 'Get a better understanding of your traffic' },
        { name: 'Engagement', description: 'Speak directly to your customers' },
        { name: 'Security', description: "Your customers' data will be safe and secure" },
      ],
    },
    {
      name: 'Solutions',
      items: [
        { name: 'Marketing', description: 'Boost your conversion rates' },
        { name: 'Sales', description: 'Improve your sales process' },
        { name: 'Service', description: '24/7 customer support' },
      ],
    },
  ];

  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Navigation variant="mega" className="flex space-x-8" {...props} />

          <div className="flex space-x-8">
            {megaMenuItems.map((menuItem) => (
              <div
                key={menuItem.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(menuItem.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                  <span>{menuItem.name}</span>
                  <span className="h-4 w-4">▼</span>
                </button>

                {activeMenu === menuItem.name && (
                  <div className="absolute left-0 w-80 mt-2 bg-white border rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      {menuItem.items.map((item) => (
                        <div key={item.name} className="group py-2">
                          <div className="text-sm font-medium text-gray-900">
                            {item.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
