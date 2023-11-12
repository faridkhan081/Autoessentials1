import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import styles from '../styles/styles';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileContent from '../components/Profile/ProfileContent';
import Layout from '../components/Layout/Layout';

function ProfilePage() {
    const [active,setActive] = useState(1)
  return (
    <Layout title={"User Profile"}>
        <Header/>

        <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className='w-[50px] 800px:w-[335px]  sticky 800px:mt-0 '>
                <ProfileSidebar active={active} setActive={setActive}/>
            </div>
            <ProfileContent active={active} setActive={setActive}/>
        </div>
    </Layout>
  )
}

export default ProfilePage