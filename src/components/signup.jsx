import React from "react";
import * as Components from './Components';

const SignUp = () => {

    return (

        <Components.Form>
            <Components.Title>Sign up</Components.Title>
            <Components.Input type='text' placeholder='Name' />
            <Components.Input type='email' placeholder='Email' />
            <Components.Input type='password' placeholder='Password' />
            <Components.Input type='password' placeholder='Confirm Password' />
            <Components.Button>Sign Up</Components.Button>
        </Components.Form>
    )
}

export default SignUp