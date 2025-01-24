import Header from './partials/Header';

const Layout = ({ children }) => {
    const navLinks = [
      // { path: '/subscripers-list', name: 'Subscripers-List' },
      { path: 'logout', name: 'Logout' },
      isLogin? 
      { path: '/logout', name: 'Logout' } : 
      { path: '/login', name: 'Login' }
    ];
  
    return (
      <div className="layout">
        <Header links={navLinks} />
        {children}
      </div>
    );
  };

  export default Layout