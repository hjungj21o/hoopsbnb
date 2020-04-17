import React from 'react';
import { Link } from 'react-router-dom';

class SplashGreeting extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    
    componentDidUpdate() {
        if (!this.props.currentUser && this.state.active) {
            this.state.active = false;
        };
    }

    toggleClass() {
        const currentState = this.state.active
        this.setState( {active: !currentState } )

    }
 
    render() {
        const { logout, currentUser, openModal } = this.props

        const sessionLinks = () => (
            <nav className="login-signup">
                <div className="nav">
                    <button className="form-button" onClick={() => openModal('login')}>Log in</button>

                    <button className="form-button" onClick={() => openModal('signup')}>Sign up</button>
                </div>
            </nav>
        );

        const personalGreeting = () => (
            <div className="header-dropdown">
                <button className="header-name" onClick={this.toggleClass} >
                    {currentUser.first_name}
                    &nbsp;
                    <i className="fas fa-user-circle" />
                </button>
                <ul className={this.state.active ? "dropdown-menu-on" : "dropdown-menu-off"} >
                    <li className="dropdown-first"><Link to={`/users/${currentUser.id}/bookings`}>Reservations</Link></li>
                    <li className="dropdown-first">Messages</li>
                    <li className="dropdown-first">Saved</li>
                    <hr/>
                    <li className="dropdown-second">Manage Owned Hoops</li>
                    <li className="dropdown-second">Account</li>
                    <hr/>
                    <li className="dropdown-third">Help</li>
                    <li className="dropdown-third" onClick={logout} >Logout</li>
                </ul>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="fixed-nav-bar">
                <div className="nav-left">
                        <Link to="/" className="logo"><img src={"https://hoopsbnb-seed.s3.amazonaws.com/logo.png"} alt="logo" /></Link>
                </div>
                <div className="nav-right">
                    {whichUser}
                </div>
            </nav>
            
            </>
        );
    }
}

export default SplashGreeting;
