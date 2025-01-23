import Header from './partials/Header';

const Layout = ({ children }) => {
    const navLinks = [
      // { path: '/subscripers-list', name: 'Subscripers-List' },
      { path: 'logout', name: 'Logout' },
    ];
  
    return (
      <div className="layout">
        <Header links={navLinks} />
        {children}
      </div>
    );
  };

  export default Layout