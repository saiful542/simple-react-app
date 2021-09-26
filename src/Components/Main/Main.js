import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';

const Main = () => {
    const [members , setMembers] = useState([])
    const [cart , setCart] = useState([])

    const add=(member)=>{  
        const newCart = [...cart , member]  
        setCart(newCart)
        
    }

    useEffect(()=>{
        fetch('./members.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])

    
    return (
        <div className="row">
            <div className="col-md-9 ">
                <div className="row row-cols-3 g-4">
                {
                     members.map(member=><Member key={member.id} add={add} member={member}></Member>)
                }
                </div>
                

            </div>

            <div className="col-md-3 ">
                <Cart cart={cart}></Cart>

            </div>
 
            
        </div>
        
    );
};

export default Main;


