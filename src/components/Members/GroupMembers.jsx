import React from 'react';
import MemberSection from './MembersSection/MemberSection';
import './GroupMembers.css';
import Navbar from '../NavBar/NavBar';
import Collaborators from './Collaborators/Collaborators';
import Footer from '../Footer/Footer';
import PastMembers from './PastMembers/PastMembers';
import BSMSMembers from './BSMSMembers/BSMSMembers'

const GroupMembers = () => {
    return (
        <>
            <Navbar />
            <div className='memberWrapper'>
                <div className='groupPhoto'>
                </div>
                <MemberSection />
                <BSMSMembers/>
            </div>
            <PastMembers />
            <Collaborators />
            <Footer />
        </>
    );
}

export default GroupMembers;
