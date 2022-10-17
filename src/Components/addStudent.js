import React, { useState } from 'react';

// API
import api from '../axios';

// Navigation
import { useNavigate } from 'react-router-dom';

export const AddStudent = () => {

    const navigate = useNavigate();

    const [fullname, setFullname] = useState();
    const [level, setLevel] = useState();
    const [size, setSize] = useState();

    const addStudentRecord = (e) => {
        e.preventDefault();
        const user = JSON.parse(window.localStorage.getItem("User"));
        api.post(
            '/request/studentRecord', 
            { token: user.token, details: {fullname, level, size, collected: false} }
        )
        .then( response => {
            navigate('/');
        } )
        .catch( err => console.log(err) )
    }

    return (
        <div className="container border add__student">
            
            <form>
                <div className="row">
                    <h3>Add New Student</h3>

                    <div className="mt-2">
                        <label>Fullname</label><br />
                        <input 
                            type="text" 
                            placeholder="Enter Fullname" 
                            value={fullname} 
                            onChange={ e => setFullname(e.target.value) } 
                        />
                    </div>

                    <div className="mt-2">
                        <label>Level</label><br />
                        <input 
                            type="text" 
                            placeholder="Enter Level" 
                            value={ level }
                            onChange={ e => setLevel(e.target.value) }
                        />
                    </div>

                    <div className="mt-2">
                        <label>Size</label><br />
                        <select name="Size" onChange={ e => setSize(e.target.value)}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="Xl">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>

                    <button
                        className="bg-success mt-4 text-white border"
                        style={{ width: "20%", margin: "2px auto" }}
                        onClick={ addStudentRecord }
                    >Add Student</button>
                </div>
            </form>

        </div>
    )
}
