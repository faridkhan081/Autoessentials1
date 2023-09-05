import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo.jsx";
import ShopProfileData from "../../components/Shop/ShopProfileData.jsx";

const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full flex py-10 justify-between">
          <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
            <ShopInfo isOwner={true} />
          </div>
          <div className="w-[72%] rounded-[4px]">
            <ShopProfileData isOwner={true} />
          </div>
         </div>
    </div>
  )
}

export default ShopHomePage













{/* <div>
<div
style={{
display: "flex",
fontSize: "30px",
padding: "10px",
// border: "1px solid red",
}}
>
<Link to="/" className="text-blue-600 return-home-link">
<AiOutlineHome />
</Link>
<div
style={{ width: "95%", display: "flex", justifyContent: "center" }}
>

</div>
</div>
</div> */}