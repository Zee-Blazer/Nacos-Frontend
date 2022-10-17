import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

// API
import api from '../axios';

export const Home = () => {

  const navigate = useNavigate();

  const [data, setData] = useState();

  const [searchWord, setSearchWord] = useState();
  const [searchResult, setSearchResult] = useState();

  const collectedShirt = (id) => {
    const user = JSON.parse(window.localStorage.getItem("User"));
    api.post('/request/collect', { token: user.token, details: { id } })
    .then( response => {
      alert('Successful!! Please reload page to see the changes');
    } )
    .catch( err => console.log(err) )
  }

  const getStudents = () => {
    let filtered = data.filter( words => {
      const fullname = words.fullname.toLowerCase();
      return fullname.indexOf(searchWord.toLowerCase()) > -1;
    } );
    setSearchResult(filtered);
  }

  useEffect( () => {
    api.get('request/studentRecord')
    .then( response => setData(response.data) )
    .catch( err => console.log(err) )
  }, [] )

  useEffect( () => {
    const user = window.localStorage.getItem("User");
    if(!user){
      navigate('/login');
    }
  }, [] )

    return (
        <div>

            <h1>Nacos Dues</h1>

            <div className="search__bar">
              <input type="text" placeholder="Search" onChange={ e => {
                setSearchWord(e.target.value)
                getStudents();
              } } />
              <button>Enter</button>
            </div>

            <p 
              style={{ color: 'lightblue', cursor: 'pointer' }}
              onClick={ () => navigate('/add') }
            >Add Student</p>

            <table id="customers">
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Level</th>
                <th>Size</th>
                <th>Status</th>
              </tr>

              { data ? 
                !searchResult ?
                data.map( (item, i) => {
                  return (
                    <tr key={ i }>
                      <td>{i+1}</td>
                      <td>{ item.fullname }</td>
                      <td> {item.level} </td>
                      <td> { item.size } </td>
                      <td> 
                        { !item.collected ? 
                          <div 
                            className={`bg-primary text-white`}
                            style={{ borderRadius: "12px", cursor: "pointer" }}
                            onClick={ () => collectedShirt(item._id) }
                          >
                            Collect
                          </div> 
                        : 
                          <div 
                            className={`bg-primary text-white bg-danger`}
                            style={{ borderRadius: "12px" }}
                          >
                            Collected
                          </div> 
                        }
                      </td>
                    </tr>
                  )
              } ) : 
              searchResult.map( (item, i) => {
                return (
                  <tr key={ i }>
                    <td>{i+1}</td>
                    <td>{ item.fullname }</td>
                    <td> {item.level} </td>
                    <td> { item.size } </td>
                    <td> 
                      { !item.collected ? 
                        <div 
                          className={`bg-primary text-white`}
                          style={{ borderRadius: "12px", cursor: "pointer" }}
                          onClick={ () => collectedShirt(item._id) }
                        >
                          Collect
                        </div> 
                      : 
                        <div 
                          className={`bg-primary text-white bg-danger`}
                          style={{ borderRadius: "12px" }}
                        >
                          Collected
                        </div> 
                      }
                    </td>
                  </tr>
                )
            } ) 
              : "Loading" }              
            </table>

            <button 
              className='bg-danger text-white p-2 border mt-6'
              onClick={ () => {
                const token = JSON.parse(window.localStorage.getItem("User")).token
                api.post('/request/logout', { token })
                .then( response => {
                  localStorage.removeItem("User");
                  navigate('/login')
                } )
                .catch( err => console.log(err) )
              } }
            >Logout</button>

        </div>
    )
}
