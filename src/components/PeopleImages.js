import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PeopleImages = (props) => {
    const person = props.person;

    return(
        <div className="card-container">
        <div className="desc">
            

            <img src='https://namegame.willowtreeapps.com/images/headshot_joel_garrett.jpg'  onClick={checkIfMatch()} />
        </div>
    </div>
    )
};

export default ReservationCard;