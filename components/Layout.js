
import Navbar from '../components/navbar'

const Layout =({children})=> {

    return (
        <div classNmae="content">
            <Navbar/>
            {children}
        </div>
    );
}


export default Layout;

