import React, { Component } from 'react'
const apiBaseUrl='http://localhost:8081/api/v1';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.handleChange=this.handleChange.bind(this)
    }
    
    handelSubmit=()=>{
        console.log('submit press!')
        fetch(apiBaseUrl+'/user/login?email='+this.state.email+'&password='+this.state.password+'')
        .then(response => response.json())
        .then(data => console.log(data));
    }
    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value
        })
        
      }
    render() {
        return (

            <div className="container">
                <form>
                    <div className="mb-3 form-group">
                        <label htmlFor="email" >Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={this.state.email}
                            placeholder="your@gmail.com"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="password" >Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            name="password"
                            value={this.state.password}
                            placeholder="password" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handelSubmit}>Login</button>
                </form>
            </div>

        );
    }
}

export default LoginPage;