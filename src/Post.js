import React from "react"
import Title from "./Title"

const Post = ({title, desc}) => {
    return <div className={"post"}>
        <Title text={title}></Title>
        <p>{desc}</p>
    </div>
};

export default Post;