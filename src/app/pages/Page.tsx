import React from 'react';
import { Outlet } from 'react-router-dom';

const Page = () => {
  return (
    <div className="pages-container">
      <p>Page component works!</p>
      <Outlet />
    </div>
  );
};

export default Page;
