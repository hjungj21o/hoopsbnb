import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }
 

    render() {

        const { logout, currentUser, openModal } = this.props

        const sessionLinks = () => (
            <nav className="login-signup">
                <div className="nav">
                    <button className="form-button" onClick={() => openModal('login')}>Login</button>

                    <button className="form-button" onClick={() => openModal('signup')}>Signup</button>
                </div>
            </nav>
        );

        const personalGreeting = () => (
            <div className="header-group">
                <h2 className="header-name">{currentUser.first_name}</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="fixed-nav-bar">
                <div className="nav-left">
                    <Link to="/" className="logo">Hoopsbnb</Link>
                </div>
                <div className="nav-right">
                    {whichUser}
                </div>
            </nav>
            
            </>
        );
    }
}

export default Greeting;

// import React from 'react';



// const Greeting = ( { logout, currentUser, openModal } ) => {
//     // debugger;
//     const sessionLinks = () => (
//         <div className="nav">
//             <nav className="login-signup">
//                 <button className="form-button" onClick={() => openModal('login')}>Login</button>
                
//                 <button className="form-button" onClick={() => openModal('signup')}>Signup</button>
//             </nav>
//         </div>
//     );
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <h2 className="header-name">Hi, {currentUser.firstName}!</h2>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );
//     // debugger;

//     return currentUser ? personalGreeting() : sessionLinks();
// };


// export default Greeting;
