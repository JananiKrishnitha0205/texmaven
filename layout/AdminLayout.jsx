// import Leftbar from '@/pages/Admin/Leftbar'
// import Topbar from '@/pages/Admin/Topbar'
// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const AdminLayout = () => {
//   return (
//     <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
//       <Leftbar />
//       <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
//         <Topbar />
//         <div className='h-[92vh] w-full'>
//         <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout


import Leftbar from '@/components/Admin/Leftbar';
// import Topbar from '@/components/Admin/Topbar'; // Ensure this is commented out or removed
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="h-screen w-screen flex overflow-hidden m-0 p-0">
      <Leftbar />
      <div className="flex-grow flex flex-col">
        {/* Ensure this div is properly managed */}
        <div className="flex-grow overflow-y-auto w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
