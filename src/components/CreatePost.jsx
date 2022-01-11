import React, { useState } from 'react'
import { PageHeader, Input, Button } from 'antd';
const { TextArea } = Input;
import db, {collection, addDoc} from '../firebase'; 
import { navigate } from "@reach/router"


const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    var time = useState('')

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)

    const onCreatePost = () => {
        time = Date.now();
        time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);

        let postRef = collection(db, "posts")
        let payload = {title, content, time}

        addDoc(postRef, payload)
            .then(function(doc) {
                console.log("Doc updated!", doc.id );
            });

        setTitle('')
        setContent('')
        navigate(`/posts`)
        
    }

    const formatting = {
        fontSize: '20px',
        marginTop: '20px' 
    };

    return (
        <h1>
            <div className="create_post_container">
                <div className="page_header_container">
                    <PageHeader
                        className="site-page-header"
                        title= "Create Post"
                    />
                </div>
            </div>

            <div className="posts_input_container" style={{marginTop: "20px"}}>
                <div className="post_input_container">
                    <div className="post_input_title" style={{fontSize: '20px'}}>
                        Post Title
                    </div>

                    <div className="post_input">
                        <Input placeholder="Post Title" value={title} onChange={onTitleChange}/>
                    </div>
                </div>

                <div className="input">
                    <div className="post_input_title" style={formatting}>
                        Post Content
                    </div>

                    <div className="post_input">
                        <TextArea rows={10} value={content} onChange={onContentChange}/>
                    </div>
                </div>

                <div className="post_input_button">
                    <Button type="primary" size="large" onClick={onCreatePost} style={{marginTop:'20px'}}>
                        Create Post
                    </Button> 
                </div>
            </div>
            
        </h1>
    )
}
export default CreatePost
