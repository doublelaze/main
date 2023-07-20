
import Navbar from "./Navbar"

// eslint-disable-next-line
function Layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
