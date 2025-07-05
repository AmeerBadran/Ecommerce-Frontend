import React from 'react'
import TopSellingProducts from '../dashboard/TopSellingProducts';
import RecentOrdersTable from '../dashboard/RecentOrdersTable';

const UserOrders = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <RecentOrdersTable/>
      <TopSellingProducts/>
    </div>
  )
}

export default UserOrders;
