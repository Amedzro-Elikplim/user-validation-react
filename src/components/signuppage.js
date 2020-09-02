import React, { isValidElement } from 'react';
import {Link} from 'react-router-dom';

const checkEmail = RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/)

const isValid = ({...rest}) => {
    const {firstName,lastName,email,password,confirmPassword} = rest;
    if(firstName.length > 3 && lastName.length > 3 && checkEmail.test(email) && password.length >= 6 && confirmPassword.length >= 6 && password === confirmPassword){
       return true;
    }
    return false; 
}
export default class Signuptemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:'',  
            formErrors:{
                firstNameError: '',
                lastNameError: '',
                emailError: '',
                passwordError:'',
                confirmPasswordError:''
            }        
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
     

    handleChange = e => {
       const {name, value} = e.target;
       let errors = this.state.formErrors;
       switch(name){
           case "firstName":
               errors.firstNameError = value.length < 3 && value.length > 0 ? "minimum three characters required" : "";
               break;

            case "lastName":
               errors.lastNameError = value.length < 3 && value.length > 0 ? "minimum three characters required" : "";
               break;
            
            case "email":
                errors.emailError = !checkEmail.test(value) && value.length > 0 ? "email is not valid" : "";
                break;

            case "password":
                errors.passwordError = value.length < 6 && value.length > 0 ? "minimum of six characters required" : ""
                break;  
                
            case "confirmPassword":
                errors.confirmPasswordError = !(value  === this.state.password) > 0 ? "password mismatch" : ""
                break; 
                
            default:
                break;    
       }
       this.setState({errors,[name] : value});
    }
   

    handleSubmit = e =>{
        e.preventDefault();
        const {firstName, lastName, email, password, confirmPassword} = this.state;

       if(isValid(this.state)){
           
            console.log(firstName, lastName, email, password, confirmPassword);
       }else{
           //display error message from backend
           console.log("error display message")
       }
       
      
    }

  
 
    render(){
        const {formErrors} = this.state;

        return(
        <div className="container">
                {/**logout template */}
            <div className="container contain">
              <div className="row">
               <div className="card signup-card mx-auto">
                   <div className="card-body cardbody">
                     <h5 className="card-title cardtitle">REGISTER</h5>
                    
                    {/* start of form for signup */}
                     <form className="forms" onSubmit = {this.handleSubmit} noValidate>
                            <div className="form-group group">
                                <label htmlFor="fname">FirstName</label>
                                <input type="text" 
                                className="form-control" 
                                id="fnameID" 
                                onChange={this.handleChange}
                                value={this.state.firstName}
                                name="firstName"
                                noValidate
                               />
                               {/**display errors */}
                               {formErrors.firstNameError.length > 0 && (
                                <small style={{color: "red", fontFamily:"cursive"}}>{formErrors.firstNameError}</small>
                                )}
                                
                            </div>
                            

                            <div className="form-group group">
                                <label htmlFor="lnameID">Lastname</label>
                                <input type="text" 
                                className="form-control" 
                                id="lnameID" 
                                onChange={this.handleChange}
                                value={this.state.lastName}
                                name="lastName"
                                noValidate
                                 />
                                {formErrors.lastNameError.length > 0 && (
                                <small style={{color: "red", fontFamily:"cursive"}}>{formErrors.lastNameError}</small>
                                )}
                            </div>

                            <div className="form-group group">
                                <label htmlFor="emailID">Email</label>
                                <input type="email" 
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                                className="form-control" 
                                id="emailID"
                                noValidate/>
                                 {formErrors.emailError.length > 0 && (
                                <small style={{color: "red", fontFamily:"cursive"}}>{formErrors.emailError}</small>
                                )}
                            </div>

                            <div className="form-group group">
                                <label htmlFor="passwordID">Password</label>
                                <input type="password" 
                                className="form-control" 
                                value={this.state.password}
                                onChange={this.handleChange}
                                id="passwordID" 
                                name="password"
                                noValidate
                                />
                                 {formErrors.passwordError.length > 0 && (
                                <small style={{color: "red", fontFamily:"cursive"}}>{formErrors.passwordError}</small>
                                )}
                            </div>


                            <div className="form-group group">
                                <label htmlFor="confirmPasswordID">Confirm password</label>
                                <input type="password"
                                className="form-control" 
                                id="confirmPasswordID" 
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                noValidate
                                 />
                                {formErrors.confirmPasswordError.length > 0 && (
                                <small style={{color: "red", fontFamily:"cursive"}}>{formErrors.confirmPasswordError}</small>
                                )}
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