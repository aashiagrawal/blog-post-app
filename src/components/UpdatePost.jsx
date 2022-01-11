import { PageHeader, Input, Button } from 'antd';
const { TextArea } = Input;
import db, {collection, updateDoc, doc, getDoc} from '../firebase'; 
import { navigate } from "@reach/router"
import React, { useState, useEffect } from 'react'



const UpdatePost = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let postRef = doc(collection(db, "posts"), props.id)
        
        getDoc(postRef)
        .then(doc => {
            let {content, title} = doc.data()
            setTitle(title)
            setContent(content)
        })

    }, [])

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)

    const onEditPost = () => {
        let postRef = doc(collection(db, "posts"), props.id)
        let payload = {title, content}

        updateDoc(postRef, payload)
             .then(function(doc) {
                console.log("Doc successfully updated!", doc.id );
            });

        navigate(`/posts`)
        
    }
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

            <div className="posts_input_container">
                <div className="post_input_container">
                    <div className="post_input_title">
                        Post Title
                    </div>

                    <div className="post_input">
                        <Input placeholder="Post Title" value={title} onChange={onTitleChange}/>
                    </div>
                </div>

                <div className="input">
                    <div className="post_input_title">
                        Post Content
                    </div>

                    <div className="post_input">
                        <TextArea rows={10} value={content} onChange={onContentChange}/>
                    </div>
                </div>

                <div className="post_input_button">
                    <Button type="primary" size="large" onClick={onEditPost}>
                        Edit Post
                    </Button> 
                </div>
            </div>
            
        </h1>
    )
}

export default UpdatePost