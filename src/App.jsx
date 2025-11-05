import { Button, PrimaryButton, SecondaryButton, SuccessButton, DangerButton, GhostButton } from './components/Button/Button'
import { Input, DefaultInput, FilledInput, UnderlinedInput, RoundedInput, MinimalInput } from './components/Input/Input'
import { Navigation, HorizontalNavigation, VerticalNavigation, ResponsiveNavigation, MinimalisticNavigation, MegaMenuNavigation } from './components/Navigation/Navigation'
import { Modal, DefaultModal, BorderlessModal, DarkModal, ColorfulModal, MinimalModal } from './components/Modal/Modal'
import { Checkbox, Radio, Switch } from './components/Form/FormControls'
import { Table } from './components/Table/Table'
import { StatusBadge, StatCard, Timeline, SearchFilter, DataGrid } from './components/DataDisplay'
import Login from './screens/Auth/Login'
import Signup from './screens/Auth/Signup'
import Dashboard from './screens/Dashboard'
import React, { useState } from 'react'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 space-y-4">
        {/* Default Button (primary variant, md size) */}
        <Button>
            Hello World
        </Button>

        {/* Button with different variant */}
        <Button variant="secondary" size="lg">
            Secondary Large Button
        </Button>

        {/* Button with success variant and small size */}
        <Button variant="success" size="sm">
            Success Small Button
        </Button>

        {/* Button with danger variant and custom className */}
        <Button variant="danger" className="font-bold">
            Danger Button with Bold Text
        </Button>

        {/* Ghost variant */}
        <Button variant="ghost">
            Ghost Button
        </Button>

        {/* Using Material-UI style */}
        <Button useMui variant="primary">
            MUI Primary Button
        </Button>

        {/* Using exported variant components */}
        <PrimaryButton>
            Primary Button Component
        </PrimaryButton>

        <SecondaryButton size="lg">
            Secondary Button Component
        </SecondaryButton>

        <SuccessButton>
            Success Button Component
        </SuccessButton>

        <DangerButton>
            Danger Button Component
        </DangerButton>

        <GhostButton>
            Ghost Button Component
        </GhostButton>

        {/* Default Input */}
        <Input placeholder="Default Input" />

        {/* Input with different variant */}
        <Input variant="filled" placeholder="Filled Input" />

        {/* Input with underlined variant and small size */}
        <Input variant="underlined" size="sm" placeholder="Underlined Small Input" />

        {/* Input with rounded variant and custom className */}
        <Input variant="rounded" className="font-bold" placeholder="Rounded Input with Bold Text" />

        {/* Minimal variant */}
        <Input variant="minimal" placeholder="Minimal Input" />

        {/* Using Material-UI style */}
        <Input useMui placeholder="MUI Input" />

        {/* Using exported variant components */}
        <DefaultInput placeholder="Default Input Component" />

        <FilledInput placeholder="Filled Input Component" />

        <UnderlinedInput placeholder="Underlined Input Component" />

        <RoundedInput placeholder="Rounded Input Component" />

        <MinimalInput placeholder="Minimal Input Component" />

        {/* Horizontal Navigation */}
        <HorizontalNavigation />

        {/* Vertical Navigation */}
        <VerticalNavigation />

        {/* Responsive Navigation */}
        <ResponsiveNavigation />

        {/* Minimalistic Navigation */}
        <MinimalisticNavigation />

        {/* Mega Menu Navigation */}
        <MegaMenuNavigation />

        {/* Modal Button */}
        <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
        </Button>

        {/* Default Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Default Modal"
        >
          <p>This is a default modal.</p>
        </Modal>

        {/* Tables */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold">Tables</h2>

          {/* Default Table */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Default Table</h3>
            <Table
              headers={['Name', 'Age', 'Email']}
              data={[
                { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
                { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
                { Name: 'Bob Johnson', Age: 35, Email: 'bob@example.com' },
                { Name: 'Alice Brown', Age: 28, Email: 'alice@example.com' },
                { Name: 'Charlie Wilson', Age: 42, Email: 'charlie@example.com' }
              ]}
            />
          </div>

          {/* Striped Table */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Striped Table</h3>
            <Table
              variant="striped"
              headers={['Name', 'Age', 'Email']}
              data={[
                { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
                { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
                { Name: 'Bob Johnson', Age: 35, Email: 'bob@example.com' },
                { Name: 'Alice Brown', Age: 28, Email: 'alice@example.com' },
                { Name: 'Charlie Wilson', Age: 42, Email: 'charlie@example.com' }
              ]}
            />
          </div>

          {/* Bordered Table */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Bordered Table</h3>
            <Table
              variant="bordered"
              headers={['Name', 'Age', 'Email']}
              data={[
                { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
                { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
                { Name: 'Bob Johnson', Age: 35, Email: 'bob@example.com' },
                { Name: 'Alice Brown', Age: 28, Email: 'alice@example.com' },
                { Name: 'Charlie Wilson', Age: 42, Email: 'charlie@example.com' }
              ]}
            />
          </div>

          {/* Compact Table */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Compact Table</h3>
            <Table
              variant="compact"
              headers={['Name', 'Age', 'Email']}
              data={[
                { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
                { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
                { Name: 'Bob Johnson', Age: 35, Email: 'bob@example.com' },
                { Name: 'Alice Brown', Age: 28, Email: 'alice@example.com' },
                { Name: 'Charlie Wilson', Age: 42, Email: 'charlie@example.com' }
              ]}
            />
          </div>

          {/* Modern Table */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Modern Table</h3>
            <Table
              variant="modern"
              headers={['Name', 'Age', 'Email']}
              data={[
                { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
                { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
                { Name: 'Bob Johnson', Age: 35, Email: 'bob@example.com' },
                { Name: 'Alice Brown', Age: 28, Email: 'alice@example.com' },
                { Name: 'Charlie Wilson', Age: 42, Email: 'charlie@example.com' }
              ]}
            />
          </div>
        </div>

        {/* Data Display */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold">Data Display</h2>

          {/* Status Badges */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Status Badges</h3>
            <div className="flex space-x-2">
              <StatusBadge status="active" />
              <StatusBadge status="pending" />
              <StatusBadge status="inactive" />
              <StatusBadge status="completed" />
            </div>
          </div>

          {/* Stat Cards */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Stat Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard title="Total Users" value="1,234" trend={12} />
              <StatCard title="Revenue" value="$45,678" trend={-5} />
              <StatCard title="Orders" value="89" trend={8} />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Timeline</h3>
            <Timeline
              items={[
                {
                  id: 1,
                  type: 'task',
                  content: 'User registered',
                  datetime: '2023-01-01T10:00:00Z',
                  icon: '👤'
                },
                {
                  id: 2,
                  type: 'comment',
                  content: 'Order placed',
                  datetime: '2023-01-02T14:30:00Z',
                  icon: '📦'
                },
                {
                  id: 3,
                  type: 'task',
                  content: 'Payment processed',
                  datetime: '2023-01-03T09:15:00Z',
                  icon: '💳'
                }
              ]}
            />
          </div>

          {/* Data Grid */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Data Grid</h3>
            <DataGrid
              columns={[
                { field: 'name', label: 'Name', sortable: true },
                { field: 'email', label: 'Email', sortable: true },
                { field: 'status', label: 'Status', render: (value) => <StatusBadge status={value} /> }
              ]}
              data={[
                { name: 'John Doe', email: 'john@example.com', status: 'active' },
                { name: 'Jane Smith', email: 'jane@example.com', status: 'pending' },
                { name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive' },
                { name: 'Alice Brown', email: 'alice@example.com', status: 'completed' }
              ]}
              pagination={{
                currentPage: 1,
                totalPages: 3
              }}
            />
          </div>
        </div>

        {/* Authentication */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold">Authentication</h2>

          {/* Login Form */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Login Form</h3>
            <div className="border rounded-lg p-4 max-w-md mx-auto">
              <Login />
            </div>
          </div>

          {/* Signup Form */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Signup Form</h3>
            <div className="border rounded-lg p-4 max-w-md mx-auto">
              <Signup />
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <div className="border rounded-lg overflow-hidden">
            <Dashboard />
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Form Controls</h2>

          {/* Checkboxes */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Checkboxes</h3>
            <Checkbox label="Default Checkbox" />
            <Checkbox variant="square" label="Square Checkbox" />
            <Checkbox variant="circle" label="Circle Checkbox" />
            <Checkbox variant="outline" label="Outline Checkbox" />
            <Checkbox variant="minimal" label="Minimal Checkbox" />
            <Checkbox useMui label="MUI Checkbox" />
          </div>

          {/* Radios */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Radio Buttons</h3>
            <Radio name="radio1" label="Default Radio" />
            <Radio name="radio1" variant="large" label="Large Radio" />
            <Radio name="radio1" variant="outline" label="Outline Radio" />
            <Radio name="radio1" variant="colored" label="Colored Radio" />
            <Radio name="radio1" variant="minimal" label="Minimal Radio" />
            <Radio name="radio1" useMui label="MUI Radio" />
          </div>

          {/* Switches */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Switches</h3>
            <Switch label="Default Switch" />
            <Switch variant="large" label="Large Switch" />
            <Switch variant="slim" label="Slim Switch" />
            <Switch variant="square" label="Square Switch" />
            <Switch variant="colorful" label="Colorful Switch" />
            <Switch useMui label="MUI Switch" />
          </div>
        </div>
    </div>
  )
}

export default App
