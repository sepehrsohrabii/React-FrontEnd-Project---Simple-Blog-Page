import React from "react";

const NewPost =()=>{

    const onNewPostClick=()=>{
        alert("you create new post");
    }

    function onChange(e){
        console.log("you changed the input",e.target.value);
    }

    return <div>
        <input onChange={(event)=>onChange(event)} placeholder={"Your Post Text"}/>
        <button onClick={onNewPostClick}>Create New Post</button>
    </div>
};

export default NewPost;