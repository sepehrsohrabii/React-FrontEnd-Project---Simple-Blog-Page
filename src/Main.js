import React from "react"
import NewPost from "./NewPost"
import Post from "./Post"


const posts = [
    {
        title: "post 1",
        desc: "desc post 1",
    },
    {
        title: "post 2",
        desc: "desc post 2",
    },
    {
        title: "post 3",
        desc: "desc post 3",
    },
    {
        title: "post 4",
        desc: "desc post 4",
    },
    {
        title: "post 5",
        desc: "desc post 5",
    },
];

const Main = () => {
    return <div className={"postList"}>
        <NewPost/>
        <h1>Post List</h1>
        {
            posts.map(post=>{
                return <Post title={post.title} desc={post.desc}/>
            })
        }
    </div>
};

export default Main;