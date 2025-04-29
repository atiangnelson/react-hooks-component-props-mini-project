import React from 'react'

const Articlelist = ({posts}) => {
  return (
    <div>
        <main>
            {posts.map((post)=>(
                <article>
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}

                </article>
            ))}
        </main>
    </div>
  )
}

export default Articlelist