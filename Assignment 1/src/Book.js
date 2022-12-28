
// import React from 'react'




const ClickFn=(author)=>{
  console.log(author);
}

const Book=({img,title,author})=>{
      return(
        <article>
          <img src={img} alt="" />
          <h1>{title}</h1>
          <h3>{author}</h3>
          <button type="button" onClick={()=>ClickFn(author)}>click for author</button>
        </article>
  
      );
    }

export default Book