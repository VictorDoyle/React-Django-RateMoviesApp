import React from 'react';
import LandingPageCard from '../components/LandingPageCard/LandingPageCard';
import MovieContainer from '../components/MovieContainer/MovieContainer';

function Homepage() {
    const content1 = {
        title: "Save Your Movies On An Easy To-Go App",
        description: "Unlimited Uploads, Unlimited Saves",
        intent: "Save Your Favorite Movies",
        icon: "save"
    }
    const content2 = {
        title: "Rate Movies on a 5 Point Scale",
        description: "Rate Movies and Find the Highest Average Rated Movies",
        intent: "Rate Movies",
        icon: "star"
    }
    const content3 = {
        title: "Create An Account and Save Your Movie Lists For Later",
        description: "Save All The Movies So You Keep Track Of Your Watchlist",
        intent: "Create An Account Now",
        icon: "user"
    }


    return(
        <>
        <h1 style={{textAlign: "center", paddingTop: "50px"}}> Welcome To The Movie Rating App</h1>
        <div className="homepageCardContainer">
        <LandingPageCard content= {content1}/>
        <LandingPageCard content= {content2}/>
        <LandingPageCard content= {content3}/>
        </div>

        </>
        )
}

export default Homepage