import React from 'react';
import {Link} from 'react-router-dom';

export default class Signuptemplate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fname : null,
            lname : null,
            email : null,
            password : null,
            confirmPassword : null,

            errorMessages : {
                fname : "",
                lname : "",
                email : "",
                Password : "",
                confirmPassword : ""
            }
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
    }

    


    render(){
        return(
        <div className="container">
                {/**logout template */}
            <div className="container contain">
              <div className="row">
               <div className="card signup-card mx-auto">
                   <div className="card-body cardbody">
                     <h5 className="card-title cardtitle">REGISTER</h5>
                    
                    {/* start of form for signup */}
                     <form className="forms" onSubmit = {this.handleSubmit}>
                            <div className="form-group group">
                            <label htmlFor="fname">FirstName</label>
                            <input type="text" className="form-control" id="fname" aria-describedby="emailHelp"/>
                            </div>

                            <div className="form-group group">
                            <label htmlFor="lname">Lastname</label>
                            <input type="text" className="form-control" id="lname" aria-describedby="emailHelp"/>
                            </div>

                            <div className="form-group group">
                            <label htmlFor="useremail">Email</label>
                            <input type="email" className="form-control" id="email"/>
                            </div>

                            <div className="form-group group">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input type="password" className="form-control" id="password" aria-describedby="emailHelp"/>
                            </div>

                            <div className="form-group group">
                            <label htmlFor="exampleInputEmail1">Confirm password</label>
                            <input type="password" className="form-control" id="confirmPassword" aria-describedby="emailHelp"/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                            <Link to="/">
                            <div className="form-group register-group">
                            <small><em>Already have an account? log in</em></small> 
                            </div>
                            </Link>
                    </form>
                    {/*end of form for login */}

                </div>
              </div>
                        
            </div>
               
          </div>
        </div>
        )
    }
}