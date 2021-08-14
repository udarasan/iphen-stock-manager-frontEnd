import React, { Component } from 'react'
class signUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container">
                <h1>Sign Up Page</h1>
                <form>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="your@gmail.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Role-Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="role" />
                </div>
                <button type="button" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default signUpPage;