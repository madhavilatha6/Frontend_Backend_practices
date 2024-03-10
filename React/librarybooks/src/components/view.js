import './view.css'
import React from 'react';


function Book(){
    return(
        <div>
            <div className="library">
                <h1>created function componant and added succefully in App</h1>
            </div>
          
        </div>
    )
}
export function Allbooks(){
    return(
        <div>
            {Items.map((item,index)=>{
                <h1 key={index}>{item}</h1>

            })}
        </div>
    )
}

export default {Book};
