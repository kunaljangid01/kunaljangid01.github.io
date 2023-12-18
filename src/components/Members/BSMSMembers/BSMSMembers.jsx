import React from 'react';
import './BSMSMembers.css'; 

import { Card, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const BSMSMembersCard = (props) => {
    return (
        <Card className='bsmsmembersCardMui' variant='outlined' sx={{
            ':hover': {
                transform: 'scale(1.05)',
            },  
        }}>
            {/*#F4F4F4*/}
            <CardContent className='bsmsmemebrscontent'>
                <Typography variant="h5" component="div" align='center'>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    <b>{props.designation}</b>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    {props.about}
                </Typography>

            </CardContent>
        </Card>
    );
}



const BSMSMembersSection = () => {
    const [bsmsmembers, setBSMSMembers] = useState([]);


    useEffect(() => {
        fetch('/data/bsmsmembers.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (newJson) {
                setBSMSMembers(newJson);
            });
    }, []);



    return (
        <>
            {/* <div className='bsmsmembersWrapper '> */}

                <div className='bsmsmembersCardsWrapper '>
                    
                        {
                            bsmsmembers ?
                            bsmsmembers.map((member) => {
                                    return (
                                        <BSMSMembersCard key={member} name={member.name} designation={member.designation} about={member.about} />
                                    )
                                })
                                :
                                <div>
                                    Could not load Past Members details. Either data is not available or there is an error.
                                </div>
                        }
                </div>
            {/* </div> */}
        </>
    );

}

export default BSMSMembersSection;

