// src/App.tsx

import React from 'react';
import CompanyList from './components/CompanyList';
import ReportList from './components/ReportList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ReportList />
    </div>
  );
};

export default App;
