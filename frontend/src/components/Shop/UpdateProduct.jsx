import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import { FileUp, Upload } from "lucide-react";
import axios from "axios";
import { server } from "../../server";
const UpdateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const [data,setData] = useState()
  const {id} = useParams()

  const { singleProduct, isLoading } = useSelector((state) => state.products);

 

  useEffect(() => {

  dispatch(getSingleProduct(id));
  
  
  }, [dispatch,id]);




  const [images, setImages] = useState([]);
  const [name, setName] = useState(singleProduct && singleProduct.name);
  const [description, setDescription] = useState(singleProduct && singleProduct.description);
  const [category, setCategory] = useState(singleProduct && singleProduct.category ? singleProduct.category: "");
  const [tags, setTags] = useState(singleProduct && singleProduct.tags);
  const [originalPrice, setOriginalPrice] = useState(singleProduct && singleProduct.originalPrice);
  const [discountPrice, setDiscountPrice] = useState(singleProduct && singleProduct.discountPrice);
  const [stock, setStock] = useState(singleProduct && singleProduct.stock);



  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);

    setImages((prevImages)=> [...prevImages, ...files]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImages((old) => [...old, reader.result]);
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // });
  };

  const formData = new FormData();

  const updateHandler = async (e) => {
    e.preventDefault();
    
    await axios.put(`${server}/product/update-product-info/${id}`, {
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,

    }, {withCredentials: true}).then((res) => {
        toast.success("Product info updated succesfully!");
        navigate("/dashboard-products");
        window.location.reload()
        // dispatch(loadSeller());
    }).catch((error)=> {
        toast.error(error.response.data.message);
    })
  };



  return (
    <div className="mt-[30px] w-[90%] 800px:w-[60%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Update Product</h5>
      {/* create product form */}
      <form onSubmit={updateHandler}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder={singleProduct?.name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            
           
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            placeholder={singleProduct?.description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[45px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option  value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option  value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            placeholder={singleProduct?.tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
           
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            placeholder={singleProduct?.originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
          
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice}
            placeholder={singleProduct?.discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
          
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            placeholder={singleProduct?.stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            
            
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
     
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <Upload size={28} className="mt-3 cursor-pointer" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Update"
              className="mt-2 border block w-full px-3 h-[35px] border-green-600 rounded-[3px] bg-green-500 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-600 cursor-pointer "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;