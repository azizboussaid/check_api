import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList(props) {
    const [listOfUSer, seListOfUSer] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;

                seListOfUSer(persons);
            })
    }, []);
    
    return (
        <div style={{ color: "black" }}>
            <div class="container">
                {listOfUSer && listOfUSer.map(el => {
                    return ( 
                      
                        <div class="card" id={el.id}>
                            <p class="card__name" style={{ marginTop: "20px" }}>{el.name} | @{el.username}</p>
                            <p className="card__name">phone: {el.phone}</p>
                            
                            <hr style={{ width:'60%',margin: "10px 0px"}}/>
                            <div class="grid-child-posts" style={{}}>
                                <p>City: {el.address.city} </p>
                                <p>Street: {el.address.street}</p>
                                <p>Suite: {el.address.suite}</p>
                                <p>Zipcode: {el.address.zipcode}</p>
                                <p>Company name: {el.company.name}</p>
                                <p>Catch phrase: {el.company.catchPhrase}</p>
                                <p>bs: {el.company.bs}</p>
                            </div>
                        </div>)
                })}

            </div>

        </div>
    );
}

export default UserList; 






