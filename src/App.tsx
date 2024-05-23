import React from 'react';
import CompanyList from './components/lists/CompanyList';
import ReportList from './components/lists/ReportList';
import ReportTemplateList from './components/lists/ReportTemplateList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ReportTemplateList />
    </div>
  );
};

export default App;
