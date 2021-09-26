import React from 'react';

const Member = (props) => {
    const {id,name,age,salary,country,email,picture}=props.member;
    return (
       
            <div className="col ">
                <div style={{backgroundColor:''}}className="card h-100 shadow-lg rounded-3">
                    <img src={picture} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h6>Name : {name} <i className="fab fa-twitter"></i> </h6>
                        <h6>Age : {age} </h6>
                        <h6>Country : {country} </h6>
                        <h6>Salary : ${salary} </h6>
                        <h6>Mail : {email} </h6>
                        <button onClick={()=>props.add(props.member)} className="btn btn-secondary"><i className="fas fa-user-check"></i> Add Member</button>
                        <br />
                          
                    </div>
                </div>        
            </div>

            
       
    );
};

export default Member;