import React, {useState} from "react";
import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/updatePost";
import { Router, Link } from '@reach/router';
import { Menu } from 'antd';
import { FormOutlined, EditOutlined, FastForwardFilled } from '@ant-design/icons';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {auth, getAuth, onAuthStateChanged, signOut} from './firebase'


const { SubMenu } = Menu;

function App(props) {

    const [user, setUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            console.log("no user is signed in")
        }
      });
    
    const onSignOut = () => {
        console.log('signing out')
        signOut(auth).then(() => {
            console.log('user signed out')
            setUser(false)
          }).catch((error) => {
            // An error happened.
          });
    }
 
    return(
        <div className="app_container"> 
            <div className="app_main_navigation">
                <Menu mode="horizontal">

                    <Menu.Item key="posts" icon={<FormOutlined />}>
                        <Link to="/posts">Posts</Link>
                    </Menu.Item>
                    
                    {user &&
                        <Menu.Item key="create_post" icon={<EditOutlined />}>
                            <Link to="/create_post">Create Post</Link>
                        </Menu.Item>
                    }

                    <Menu.Item key="sign_out" style={{float:'right'}}icon={<EditOutlined />}>

                        {!user
                            ?
                                <Link to="/sign_in" style={{float:'right'}}>Sign In</Link>
                            :
                                <p onClick={onSignOut} style={{float:'right'}}>Sign Out</p>
                        }
                    </Menu.Item>

                </Menu>
            </div>
         

            <Router> 
                <SignUp path="sign_up"/>
                <SignIn path="sign_in" default/>
                <Posts path="posts" user={user}/>
                <Post path="post/:id"/>
                <CreatePost path="create_post"/>
                <UpdatePost path="update_post/:id"/>
            </Router>
        </div>
    )
}

export default App;