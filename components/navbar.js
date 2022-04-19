import Link from 'next/link'


const navbar =()=> {
 
    return (
        <nav>
            <div className="logo">
            <h1>menu</h1>
            </div>

           
            <Link href="/"><a>home</a></Link>
            <Link href="/about"><a>about</a></Link>
            <Link href="/posts"><a>posts</a></Link>
        </nav>

    );
}


export default navbar;

