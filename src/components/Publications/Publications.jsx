import React, { useEffect } from 'react';
import './Publications.css';
import { useState } from 'react';

import Popup from 'reactjs-popup';
import { Card, CardMedia, Typography, Button, Box } from '@mui/material';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const underlineAuthors = ["Vinod K Kurmi", "Rajeev Ranjan Dwivedi", "Rini Smita Thakur", "Parinita Nema", "Akanksha Singh", "Shivangi Rai", "Kunal Jangid",
                            "Riyansha Singh", "Udhbav Dalavi",
                            ]; // Add the authors you want to underline here

const PublicationCard = (props) => {

    const renderAuthors = (authors) => {
        return authors.split(', ').map((author, index) => {
            const isUnderlined = underlineAuthors.includes(author.trim());
            return (
                <span key={index} style={isUnderlined ? { textDecoration: 'underline' } : {}}>
                    {author}{index < authors.split(', ').length - 1 ? ', ' : ''}
                </span>
            );
        });
    };


    return (
        <Card sx={{ display: 'flex' }} variant='outlined' className='publicationCard'>
            {/* <CardMedia
                component="img"
                sx={{ width: "30%", maxWidth: "200px", objectFit: "contain", repeat: "no-repeat" }}
                image={props.publication.image}
                alt="publication image"
                className='publicationImage'
            /> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: "15px" }}>
                <Typography variant="h5" component="div" >
                    {/* {props.publication.title} */}
                    {props.publication.title && Object.entries(props.publication.links).map(([name, url]) => {
                        return (
                            <Button key={props.publication.title} variant="contained" href={url} target="_blank" rel='noreferrer' sx={{ margin: "5px" , fontSize: "20px", backgroundColor: "white", color: "black" }} >
                                {name}
                            </Button>
                        )
                    }) 
                    }
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" >
                    {/* {props.publication.authors} */}
                    {renderAuthors(props.publication.authors)}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" sx={{ fontStyle: "italic" }} >
                    {props.publication.conference}
                </Typography>
                {/* <Box sx={{ flexGrow: 1, marginTop: "10px" }} >
                    {props.publication.links && Object.entries(props.publication.links).map(([name, url]) => {
                        return (
                            <Button key={name} variant="contained" href={url} target="_blank" rel='noreferrer' sx={{ margin: "5px" }} >
                                {name}
                            </Button>
                        )
                    }) 
                    }
                    {props.publication.details && Object.entries(props.publication.details).map(([name, value]) => {
                        return (

                            <Popup key={name} trigger={<Button variant="contained" sx={{ margin: "5px" }} >
                                {name}
                            </Button>} modal>
                                {
                                    close => (
                                        <div className='modal'>
                                            <button className="close" onClick={close}>
                                                &times;
                                            </button>
                                            <div className="header"> {name.toUpperCase()} </div>
                                            <div className="content">
                                                {name.toUpperCase() === "BIBTEX" ?
                                                    <pre>
                                                        {value.split("\n").map(function (item, idx) {
                                                            return (
                                                                <span key={idx}>
                                                                    {item}
                                                                    <br />
                                                                </span>
                                                            )
                                                        })}
                                                    </pre>
                                                    :

                                                    value.split("\n").map(function (item, idx) {
                                                        return (
                                                            <span key={idx}>
                                                                {item}
                                                                <br />
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="actions">
                                                <Button variant="contained" className='button' onClick={() => {
                                                    close();
                                                }} >
                                                    Close
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                            </Popup>
                        )
                    })}
                    <Typography variant="body1" color="textPrimary" component="p" >
                        {props.publication.abstract}
                    </Typography>
                </Box> */}
            </Box>
        </Card>
    )
}

const Publications = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        fetch('/data/publications.json'
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
            .then(function (myJson) {
                setPublications(myJson);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className='publicationsWrapper'>
                <h1>
                    Publications
                </h1>
                {
                    publications ?
                        publications.map((publication) => {
                            return (
                                <div key={publication.title} className='publicationsCardsWrapper'>
                                    <PublicationCard publication={publication} />
                                </div>
                            )
                        })
                        :
                        <div>
                            Could not load publications. Either data is not available or there is an error.
                        </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default Publications;
