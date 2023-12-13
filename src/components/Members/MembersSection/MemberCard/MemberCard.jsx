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
            <CardContent >
                <Typography variant="h5" component="div" align='center'>
                    {props.name}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" align='center'>
                    {props.designation}
                </Typography>

                <Typography variant="body1" color="textPrimary" component="p" align='center'>
                    {props.about}
                </Typography>

                {showDetails && (
                    <div className='moreInfo'>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                props.moreInfo &&
                                <div>
                                    {props.moreInfo}
                                </div>
                            }
                            {
                                props.email &&
                                <div style={{ margin: "5px 0px", color: "black" }}>
                                    
                                        Email: <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={toggleEmail}>{email}</span>
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
                        </Typography>
                    </div>
                )}
            </CardContent>
            <Button color="primary" onClick={() => setShowDetails(!showDetails)} style={{ marginTop: "auto" }}>
                {showDetails ? 'Show Less' : 'Show More'}
            </Button>
        </Card>
    );
}

export default MemberCard;
