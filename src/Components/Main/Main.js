
import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
const obj={}
const Main = () => {
    const [members , setMembers] = useState([])
    const [cart , setCart] = useState([])

    
    
    const add=(member)=>{  
        const newCart = [...cart , member]  
        setCart(newCart)
        let Id=member.name;
        const store=JSON.parse(localStorage.getItem('sCart'))
        console.log(store)
        if(!store)
        {
            obj[Id]=1;
            console.log('yes')
        }
        else{
            console.log('yes')
            if(!obj[Id])
            {
                obj[Id]=1;
            }
            else{
                console.log(obj[Id])
                obj[Id]=obj[Id]+1

            }
        }
        localStorage.setItem('sCart',JSON.stringify(obj))
        
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
                <Card> hello</Card>
                

            </div>

            <div className="col-md-3 ">
                <Cart cart={cart}></Cart>

            </div>
 
            
        </div>
        
    );
};

export default Main;


