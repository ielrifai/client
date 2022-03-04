import {
React, useState, useEffect, useCallback,
} from 'react';
import { useNavigate, Link } from 'react-router-dom';
  

export default function Home(props) {
    const navigate = useNavigate();

return (
    <div>
    <div>
        Image will go here
    </div>
    <br/>
    <br/>
    <br/>

    <div>
        Try matching the WillowTree employee to their photo
    </div>
    
    <br/>    <br/>

    <button onClick={() => {
        navigate('/practice-mode');
      }}>Practice Mode</button>
    <br/>

    <button onClick={() => {
        navigate('/timed-mode');
      }}>Timed Mode</button>
    
    </div>
);
}
  