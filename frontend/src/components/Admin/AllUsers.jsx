import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import UserRoleUpdateModal from "./UserRoleUpdateModal"; // Import the new modal component
import { getAllUsers } from "../../redux/actions/user";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [openRoleModal, setOpenRoleModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${server}/user/delete-user/${id}`, { withCredentials: true });
      toast.success("User deleted successfully!");
      dispatch(getAllUsers());
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateRole = (id) => {
    const userToUpdate = users.find((user) => user._id === id);
    setSelectedUserId(id);
    setSelectedUser(userToUpdate);
    setOpenRoleModal(true);
  };

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 130, flex: 0.7 },
    { field: "email", headerName: "Email", type: "text", minWidth: 130, flex: 0.7 },
    { field: "role", headerName: "User Role", type: "text", minWidth: 130, flex: 0.7 },
    { field: "joinedAt", headerName: "Joined At", type: "text", minWidth: 130, flex: 0.8 },
   
    {
      field: 'updateRole',
      flex: 1,
      minWidth: 150,
      headerName: 'Update Role',
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleUpdateRole(params.row.id)}>
              <AiOutlineEdit />
            </Button>
          </>
        );
      },
    },
    {
      field: "deleteUser",
      flex: 1,
      minWidth: 150,
      headerName: "Delete User",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.row.id)}>
              <AiOutlineDelete />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = users ? users.map((user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    joinedAt: user.createdAt.slice(0, 10),
  })) : [];


  return (
    <>
      <div className="w-full flex justify-center pt-5">
        <div className="w-[97%]">
          <h3 className="text-[22px] font-Poppins pb-2">All Users</h3>
          <div className="w-full min-h-[45vh] bg-white rounded">
            <DataGrid rows={rows} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
          </div>
          {openRoleModal && selectedUser && (
        <UserRoleUpdateModal
          user={selectedUser}
          onClose={() => setOpenRoleModal(false)}
          onUpdateRole={(newRole) => handleUpdateRole(selectedUserId, newRole)}
        />
      )}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
