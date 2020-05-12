import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './searchbar_container';

class NonSplashGreeting extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.linkToReservations = this.linkToReservations.bind(this);
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

    linkToReservations() {
        this.props.history.push(`/users/${this.props.currentUser.id}/bookings`)
    }
 
    render() {
        const { logout, currentUser, openModal } = this.props

        const sessionLinks = () => (
            <nav className="nonsplash-login-signup">
                <div className="nonsplash-nav">
                    <a href="https://github.com/hjungj21o/hoopsbnb" target="_blank" className="github">Github</a>
                    <button className="nonsplash-form-button" onClick={() => openModal('signup')}>Sign up</button>
                    <button className="nonsplash-form-button" onClick={() => openModal('login')}>Log in</button>
                </div>
            </nav>
        );

        const personalGreeting = () => (
            <div className="nonsplash-header-dropdown">
                <a href="https://github.com/hjungj21o/hoopsbnb" target="_blank" className="github">Github</a>
                <button className="nonsplash-header-name" onClick={this.toggleClass} onBlur={this.toggleClass} >
                    {currentUser.first_name}
                    &nbsp;
                    <i className="fas fa-user-circle" />
                </button>
                <ul className={this.state.active ? "nonsplash-dropdown-menu-on" : "nonsplash-dropdown-menu-off"}>
                    <li className="nonsplash-dropdown-first" onMouseDown={this.linkToReservations}>Reservations</li>
                    <hr/>
                    <li className="nonsplash-dropdown-second" onMouseDown={logout} >Logout</li>
                </ul>
            </div>
        );
        const whichUser = currentUser ? personalGreeting() : sessionLinks();

        return (
            <>
            <nav className="nonsplash-fixed-nav-bar">
                <div className="nav-left">
                    <Link to="/" className="nonsplash-logo"><img src={window.logo_ball} alt="logo" /></Link>
                </div>
                <SearchBarContainer />
                <div className="nav-right">
                    {whichUser}
                </div>
            </nav>
            
            </>
        );
    }
}

export default NonSplashGreeting;