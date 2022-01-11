import React from 'react'
import { Card } from 'antd';
import { Link } from '@reach/router';


function PostSnippet(props){
    console.log("props.time: ", props.time)
    return (
        <div className="post_snippet_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_inks">
                        <div>
                            {props.time}
                        </div>
                        {props.user &&
                            <Link to={`/update_post/${props.id}`} style={{marginRight: '20px'}} >
                                Edit
                            </Link>
                        }
                        <Link to={`/post/${props.id}`}>
                            Read Full Article
                        </Link>
                    </div>
                }
            >
                <p className="article_content">
                    {props.content}
                </p>
            </Card>
        </div>
    )
}

export default PostSnippet
