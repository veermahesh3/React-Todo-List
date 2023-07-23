import React from 'react';

const List=(props)=>{
 
    return <li><button className='deletebtn'
     onClick={()=>{
         props.onSelect(props.id)}}
     
     >x</button>{props.text}</li>

}

export default List;