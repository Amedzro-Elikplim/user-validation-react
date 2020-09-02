 import React from 'react';
 import {Link} from 'react-router-dom';
 
 const isUserExist = (...rest) => {
     //check if your is available in the backend
 }
  
 export default class Logintemplate extends React.Component{
  
  //constructor to initialize the state
  constructor(props){
    super(props);

    this.state = {
         userEmail: "",
         userPassword:"",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

   //function to validate and submit form
  handleSubmit = e =>{
    e.preventDefault();
    if(isUserExist(this.state)){
       //route user to dashboard
    }else{
      //display error message
      console.log("user does not exit")
    }
  }



   render(){
     return(
      //login card
    <div className="container contain">
     <div className="row">   
      <div className="card login-card mx-auto">
       <div className="card-body cardbody">
         <h5 className="card-title cardtitle">LOGIN</h5>
          
            {/* start of form for login */}
            <form className="forms" onSubmit = {this.handleSubmit} noValidate>
                 <div className="form-group">
                    <label htmlFor="userEmailID">Email address</label>
                    <input 
                    type="email" 
                    name="userEmail"
                    className="form-control" 
                    id="userEmailID" 
                    onChange={this.handleChange}
                    value={this.state.userEmail} />
                 </div>
                  
                 <div className="form-group">
                    <label htmlFor="userPasswordID">Password</label>
                    <input 
                    type="password"
                    className="form-control"
                    id="userPasswordID" 
                    name="userPassword"
                    value = {this.state.userPassword}
                    onChange = {this.handleChange}/>
                 </div>

                 <button type="submit" className="btn btn-primary">Submit</button>
                 
                 <Link to="/account">
                 <div className="form-group register-group">
                   <small><em>Click here to register</em></small>
                 </div>
                 </Link>
           </form>
           {/*end of form for login */}
       </div>
     </div>

     </div>
   
    </div>
     )
   }
 }
