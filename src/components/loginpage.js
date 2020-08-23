 import React from 'react';
 import {Link} from 'react-router-dom';
 
 
  
 export default class Logintemplate extends React.Component{
  
  //constructor to initialize the state
  constructor(props){
    super(props);

    this.state = {
      userEmail : null,
      userPassword : null,
      errorMessage: {
         userEmail: "",
         userPassword: ""
      }
    }
  }

  //prevents auto submit
  handleSubmit = e =>{
    e.preventDefault();
  }


  //log something to the console
  writesomething = () => {
    console.log("i am a button");
  }

  //prevent link reloading page
  handleLink = e => {
     e.preventDefault();
     console.log("link is clicked");
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
                   <label htmlFor="exampleInputEmail1">Email address</label>
                   <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" noValidate/>
                 </div>

                 <div className="form-group">
                   <label htmlFor="exampleInputPassword1">Password</label>
                   <input type="password" className="form-control" id="userPassword" noValidate/>
                 </div>

                 <button type="submit" className="btn btn-primary" onClick = {this.writesomething}>Submit</button>
                 
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
