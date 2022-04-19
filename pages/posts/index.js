import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { posts: data }
    }
  }


const post =({posts})=> {
 
    return (
        <div>
            <h1>post msg- hello friemd</h1>
            
            {posts.map(post =>
                <div key={post.id}>
                    <Link href={`posts/${post.id}`}>

                        <a><h1>{post.name}</h1></a>

                    </Link>
                </div>

                )}

        </div>
    );
}


export default post;
