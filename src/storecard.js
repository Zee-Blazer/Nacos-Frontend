import React, { useState, useEffect } from 'react';

import api from './axios';

export const StoreCard = ({ data, key }) => {

    return (
        <div class="col-sm-3 mr-7 ml-7" key={key}>
            <div class="card">
                <img 
                    class="card-img-top" 
                    src={ `http://localhost:4000/File/${data.name}` } 
                    alt="Card image"
                />
                {/* <div class="card-header">Header</div>
                <div class="card-body">Basic card</div> */}
            </div>
        </div>
    )
}
