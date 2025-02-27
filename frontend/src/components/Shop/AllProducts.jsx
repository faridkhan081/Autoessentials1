import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import { getAllProducts } from "../../redux/actions/product"; 

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);
  // console.log(products && products);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload(true);
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard-update-product/${id}`);
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.4,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 90,
      flex: 0.4,
    },
    {
      field: "Preview",
      flex: 0.5,
      minWidth: 90,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
      

        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.5,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: "Update",
      flex: 0.5,
      minWidth: 50,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleUpdate(params.id)}>
              <AiOutlineEdit size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "RS. " + item.discountPrice,
        Stock: item.stock,
        sold: item.sold_out,
      });
    });


    if (seller.status !== "Approved") {
      return (
        <div className="w-full p-8">
          <h3 className="text-[22px] font-Poppins pb-2">Account Under Observation</h3>
          <p>Your account is currently under observation. Access to the dashboard is restricted until it's approved by the admin.</p>
        </div>
      );
    }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelection
            OnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
