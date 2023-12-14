import React from 'react';
import './MemberCard.css';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa6';


const MemberCard = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    const [email, setEmail] = useState(props.email ? scrambleEmail(props.email) : ''); // Initialize with scrambled email if available
    const [isEmailScrambled, setIsEmailScrambled] = useState(true);

    function scrambleEmail(inputEmail) {
        // Ensure the email is not undefined or null
        if (!inputEmail) {
            return '';
        }
        return inputEmail.split('').sort(() => Math.random() - 0.5).join('');
    }

    const toggleEmail = () => {
        if (isEmailScrambled) {
            setEmail(props.email); // Set to original email
        } else {
            setEmail(scrambleEmail(props.email)); // Rescramble
        }
        setIsEmailScrambled(!isEmailScrambled);
    };

    return (
        <Card className='memberCardMui' >
            <CardMedia
                component="img"
                alt="Profile Picture"
                height="140"
                image={props.pictureURL}
                title="Profile Picture"
            />
            <CardContent className='membercardcontent'>
                <Typography variant="h5" component="div" align='center'>
                    <bold>{props.name}</bold>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'15px'}}>
                    <b>{props.designation}</b>
                </Typography>

                <Typography variant="body2" color="textPrimary" component="p" align='center'>
                    {props.about}
                </Typography>

                {showDetails && (
                    <div className='moreInfo'>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                props.moreInfo &&
                                <div style={{textJustify:"auto"}}>
                                    {props.moreInfo}
                                </div>
                            }
                            {
                                props.email &&
                                <div style={{  color: "black" }}>
                                    {/* margin: "5px 0px", */}
                                    {/* Email: <span style={{ cursor: 'pointer', textDecoration: 'underline' }} >{email}</span><Button onClick={() => toggleEmail(!toggleEmail)} style={{ textAlign:"right", color:"#828170"}}>
                                    {toggleEmail ? 'Unscrambled' : 'Scrambled'}
                                    </Button> */}
                                        {/* Email: <span   
                                        onClick={() => toggleEmail(!toggleEmail)}>
                                             <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>{email}</span><span> </span> */}
                                            {/* <span style={{ textAlign:"right", color:"#828170"}}>{toggleEmail ? 'scrambled' : 'UnScrambled'}</span> */}
                                             {/* {email} {toggleEmail ? 'Unscrambled' : 'Scrambled'} */}
                                            {/* {email +' \n'+    (toggleEmail ? 'Unscrambled' : 'Scrambled')} */}
                                            {/* {`${email} ${toggleEmail ? 'Unscrambled' : 'Scrambled'}`} */}
                                        {/* <Button color="primary" onClick={() => toggleEmail(!toggleEmail)} style={{ marginTop: "auto" }}>
                                         {toggleEmail ? 'Unscrambled' : 'Scrambled'}
                                        </Button> */}
                                        {/* </span> */}
                                        Email: <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>{email}</span>
                        {/* <Button size="small" color="primary" onClick={toggleEmail}>
                            {isEmailScrambled ? 'Unscramble Email' : 'Scramble Email'}
                        </Button> */}
                                </div>
                            }
                            {
                                props.social &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>Website <FaLink /> </a>
                                </div>
                            }
                            {
                                props.social_2 &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social_2} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>LinkedIn <FaLink /> </a>
                                </div>
                            }
                            {
                                props.social_3 &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social_3} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>G-Scholar <FaLink /> </a>
                                </div>
                            }
                        </Typography>

                        
                    </div>
                                       
                )}
            </CardContent>
            {/* <Button color="primary" onClick={() => setShowDetails(!showDetails)} style={{ marginTop: "auto" }}>
          
                {showDetails ? 'Show Less' : 'Show More'} 
            </Button> */}
            <div style={{ display: 'flex', marginTop:"auto", align:'center', justifyContent: 'center',}} className='div_scramble'>
                {showDetails && (
                    <Button  onClick={toggleEmail} style={{margin:'auto', color:'black'}} className='button_scramble'>
                        {isEmailScrambled ? 'Unscramble Email' : 'Scramble Email'}
                    </Button>
                )}
                <Button color="primary" onClick={() => setShowDetails(!showDetails)} style={{margin:'auto'}}>
                    {showDetails ? 'Show Less' : 'Show More'}
                </Button>
            </div>
            {/* <div  style={{ display: 'flex', justifyContent: showDetails ? 'flex-start' : 'center' , align:'center'}} className='button_box '> */}
                {/* {showDetails && (
                    <Button color="warning" onClick={toggleEmail} sx={{ textAlignLast:"end" }} className='button_box2'>
                        {isEmailScrambled ? 'Unscramble Email' : 'Scramble Email'}
                    </Button>
                )} */}
{/* 
                {
                    showDetails &&(
                        <Button  color="primary" onClick={(toggleEmail)} sx={{margin:'0'}} >
                            {isEmailScrambled ? 'Unscramble Email' : 'Scramble Email'}
                        </Button> 
                    )
                }
                <Button color="primary" onClick={() => setShowDetails(!showDetails)} sx={{ marginTop: "auto" }}>
          
                        {showDetails ? '
                        
                        Show Less' : 'Show More'} 
                </Button> */}
                {/* <Button color="primary" onClick={() => setShowDetails(!showDetails)} style={{ margin:'auto'}} className='button_box2'>
                    {showDetails ? 'Show Less' : 'Show More'}
                </Button>        */}
            {/* </div> */}

        </Card>
    );
}

export default MemberCard;
