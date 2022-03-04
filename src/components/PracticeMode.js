import {
React, useState, useEffect, useCallback,
} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import jsonData from '../../src/data.json'; 
import {Card} from "react-bootstrap";


  
export default function PracticeMode(props) {

    const displayData = e => {
        console.log(jsonData);
    }

    const checkIfMatch = e => {
        console.log(jsonData);
    }

return (
    <div>
    
    Practice Mode
    <br/>
    <br/>

    <button onClick={() => {
       displayData();
      }}>Query Data</button>
    <br/>

    
    <br/>
    
    <div className="card-container">
            <div className="desc">
                

                <img src='https://namegame.willowtreeapps.com/images/headshot_joel_garrett.jpg'  onClick={checkIfMatch()} />
            </div>
        </div>

    </div>
);
}
  