import React from 'react';
import { Skeleton } from 'antd';

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Skeleton avatar paragraph={{ rows: 30 }} />
    </>
  );
}

export default Dashboard;
