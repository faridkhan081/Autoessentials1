import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import { AiOutlineEye } from 'react-icons/ai';
import { Button } from '@material-ui/core';
import styles from '../../styles/styles';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';
import { server } from '../../server';
import { toast } from 'react-toastify';
import { getAllSellers } from '../../redux/actions/sellers';
import { Link } from 'react-router-dom';
import Loader from '../Layout/Loader';

const AdminShopRequestComponent = () => {
  const dispatch = useDispatch();
  const { sellers,isLoading } = useSelector((state) => state.seller);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      // Send a request to update the status
      await axios.put(
        `${server}/shop/update-shop-status/${id}`,
        { newStatus },
        { withCredentials: true }
      );
      // Update the local state to reflect the change
      dispatch(getAllSellers());
      toast.success(`Shop status updated successfully!`);
    } catch (error) {
      console.error('Error updating shop status:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Seller ID', minWidth: 150, flex: 0.7 },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'text',
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: 'address',
      headerName: 'Seller Address',
      type: 'text',
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: 'status',
      headerName: 'status',
      type: 'text',
      minWidth: 130,
      flex: 0.8,
      
      renderCell: (params) => {
        const status = params.row.status;
        const statusColor = status === 'Approved' ? 'green' : 'red';
  
        return (
          <div style={{ color: statusColor }}>
            {status}
          </div>
        );
      },
    },
    {
      field: 'preview',
      flex: 1,
      minWidth: 150,
      headerName: 'Preview Shop',
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
         <Link to={`/shop/preview/${params.id}`}>
            <Button>
              <AiOutlineEye size={20} />
            </Button>
          </Link>
        );
      },
    },
    {
      field: 'updateStatus',
      flex: 1,
      minWidth: 150,
      headerName: 'Update Status',
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setUserId(params.row.id) || setOpen(true)}>
              Update Status
            </Button>
          </>
        );
      },
    },
  ];

  // Map your sellers data to include a unique id
  const rows = sellers.map((seller) => ({
    id: seller._id, // Use _id as id
    name: seller.name,
    email: seller.email,
    address: seller.address,
    status: seller.status, // Adjust this based on your data structure
  }));

  return (
    <>
        {
            isLoading ? (<>
               <Loader/>
            </>) : (
                <>
                <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">Shop Requests</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
        {open && (
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1 size={25} onClick={() => setOpen(false)} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Update Shop Status
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() => setOpen(false) || handleUpdateStatus(userId, 'Approved')}
                >
                  Approve
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() => setOpen(false) || handleUpdateStatus(userId, 'Rejected')}
                >
                  Reject
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
                </>
            )
        }
    </>
  );
};

export default AdminShopRequestComponent;
