// UserStatusUpdateModal.js
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/user";

const UserRoleUpdateModal = ({ user, onClose, onUpdateRole }) => {
  const [selectedRole, setSelectedRole] = useState("");
const dispatch = useDispatch()

  const handleConfirmUpdate = async () => {
    try {
      await axios.put(
        `${server}/user/update-user-role/${user._id}`,
        { newRole: selectedRole },
        { withCredentials: true }
      );
      dispatch(getAllUsers());
      toast.success("User role updated successfully!");
      onUpdateRole(selectedRole);
      onClose();
   
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
      <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
        <div className="w-full flex justify-end cursor-pointer">
          <RxCross1 size={25} onClick={onClose} />
        </div>
        <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">Update User Role</h3>
        <div className="w-full flex items-center justify-center">
          {/* Add your status selection UI here */}
          <select
            className="p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Admin">Admin</option>
            <option value="user">user</option>
            {/* Add more options as needed */}
          </select>
          <Button
            className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
            onClick={handleConfirmUpdate}
            disabled={!selectedRole}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserRoleUpdateModal;
