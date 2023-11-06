import React, { useEffect, useState } from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import { RxAvatar } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { backend_url } from "../../server";
import axios from 'axios';
import { server } from "../../server";
import { Book, Mail } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';

const ShopPreviewPage = () => {

  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const { user,isAuthenticated } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

const navigate = useNavigate()

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
 

    <Layout title={'Shop Preview'}>
   <div className="mx-auto max-w-screen-xl">
  <div className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}>
    <div className="px-4 pt-8 pb-10">
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-1 ring-green-300 ring-offset-2" />
        <img
                src={`${backend_url}${data.avatar}`}
                alt=""
                className="mx-auto h-auto w-full rounded-full"
              />
      </div>
    </div> 
  </div>
  <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
      <p className="mt-2 text-gray-600"> 
      
       {data.address}</p>
      <p className="mt-1 text-gray-600 text-[14px]"> Joined on: {data?.createdAt?.slice(0, 10)}</p>

      <p  className="mt-1 text-gray-600 text-[14px]">Total Products: {products && products?.length}</p>
      <p className='mt-1 text-gray-600 text-[14px] flex items-center gap-1'>
      <Mail size={14}/>
       {data && data?.email} </p>

    </div> 
    <div className>
      <button className={`${styles.button} flex whitespace-nowrap !rounded bg-green-600 text-white transition hover:translate-y-1`}   onClick={handleMessageSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Chat with us
      </button>
      <p className="mt-[50px] flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
       +92{data.phoneNumber}
      </p>
    </div>
  </div>
  <main className="800px:w-[100%] w-[80%] 800px:ml-0 ml-[50px] mt-5 800px:mt-['unset'] rounded-[4px] ">
  <ShopProfileData isOwner={false} />
  </main>
</div>


    </Layout>
  )
}

export default ShopPreviewPage