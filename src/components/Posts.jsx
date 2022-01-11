import React, {useState, useEffect} from 'react'
import { PageHeader, Card } from 'antd';
import PostSnippet from './PostSnippet';
import _ from 'lodash';
import db, {collection, getDocs} from '../firebase';

function Posts(props) {

    const[posts, setPosts] = useState([])

    useEffect(() => {
        console.log("line 13")
        let postRef = collection(db, "posts")
        getDocs(postRef)
        .then( postsnapshots  => {
            postsnapshots.forEach(post => {
                let data = post.data()
                let {id} = post

                // console.log("data and id: ", id, data)

                let payload = {
                    id,
                    ...data
                }
                setPosts((posts) => [...posts, payload])
            })
        })
    }, [])

    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                />
            </div>

            <div className="articles_container">
                {
                    _.map(posts, (article, idx) => {
                        return (
                            <PostSnippet 
                                key={idx}
                                id={article.id }
                                title={_.capitalize(article.title)} 
                                content={article.content} 
                                user = {props.user}
                                time={article.time}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts
