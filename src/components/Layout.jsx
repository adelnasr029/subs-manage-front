import Header from './partials/Header';
import Footer from './partials/Footer'
const Layout = ({ children }) => {
  const isLogin =  localStorage.getItem("isAuthenticated")

    const navLinks = [
      { path: 'dashboard', name: 'Dashboard' },
      isLogin? 
      { path: '/logout', name: 'Logout' } : 
      { path: '/login', name: 'Login' }
    ];
  
    return (
      <div className="layout">
        <Header links={navLinks} />
        {children}
        <Footer />
      </div>
    );
  };

  export default Layout