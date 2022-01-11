import React, {useState} from 'react'
import { PageHeader, Input, Button } from 'antd';
import {auth, createUserWithEmailAndPassword, getAuth} from '../firebase'
import { Link } from "@reach/router"
const { TextArea } = Input;

const SignUp = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)

    const onSignUp = () => {
        console.log('sign up')
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .catch(function(error) {
                console.log('error in signup')
            });

        setEmail('')
        setPassword('')
    }
    return (
        <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Sign Up"
                />
            </div>

            <div className="sign_up_input_container" style={{marginTop: "20px"}}>
                
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2>
                            Email
                        </h2>
                    </div>

                    <div className="post_input">
                        <Input placeholder="Email" onChange={onEmailChange}/>
                    </div>
                </div>
                
                <div className="post_input_container">
                    <div className="post_input_title" style={{marginTop:'20px'}}>
                        <h2>
                            Password
                        </h2>
                    </div>

                    <div className="post_input">
                        <Input.Password placeholder="Password" onChange={onPasswordChange}/>
                    </div>
                </div>

                <div style={{width: "100%"}}>
                    <div style={{float: "left"}}>
                        <Link to="/sign_in">Have an account, Sign In</Link>
                    </div>

                    <div className="post_input_button">
                        <Button type="primary" size="large" style={{marginTop:'20px'}} onClick={onSignUp}>
                            Sign Up
                        </Button> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp
