import React, {useState, useEffect } from 'react'
import { PageHeader, Card  } from 'antd';
import db, {collection, getDoc, doc} from '../firebase'

const Post = (props) => {

    console.log('props',props)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [time, setTime] = useState('')
    

    useEffect(() => {
        let postRef = doc(collection(db, "posts"), props.id)
        
        getDoc(postRef)
        .then(doc => {
            let {content, title, time} = doc.data()
            setTitle(title)
            setContent(content)
            setTime(time)
        })

    }, [])

    console.log('time', time)

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={title}
                />
            </div>
            <div classsName="post_content_container">
            <Card style={{ marginTop: '20px' }}>
                {
                    content.split('\n').map((paragraph, idx) => {
                        return <p key={idx}>{paragraph}</p>
                    })
                }
            </Card>
            </div>
        </div>
    )
}

export default Post
