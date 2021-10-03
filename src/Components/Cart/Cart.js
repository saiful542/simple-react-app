import React from 'react';

const Cart = (props) => {
    const {cart}=props || {}
    let total=0;
    for(const member of cart){
        total=total+parseInt(member.salary);
    }
    return (
        <div className="shadow rounded-3">
            <h2><i className="fas fa-user-plus"></i> Added</h2>
            <h4>Member : {cart.length} </h4>
            <h4>Total Cost : ${total}</h4>
            {
                cart.map(member=> <div className="shadow rounded-3 p-1 m-2 "><img className=" w-25 p-2 m-2 me-4 shadow rounded-3" src={member.picture} alt="" />{member.name}</div>)
            }
            
        </div>
    );
};

export default Cart;


