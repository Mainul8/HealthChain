import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div>
                    <Link className="navbar-brand" to="/">
                        HealthChain
                    </Link>
    
                    <Link className="navbar-brand" to="/profile">
                        Profile
                    </Link>
                            {user && user.role === "admin" && (
                                <>
                                    
                                        <Link
                                            className="navbar-brand"
                                            to="/org-request"
                                        >
                                            Approvals
                                        </Link>
                                    
                                    
                                        <Link
                                            className="navbar-brand"
                                            to="/view-org"
                                        >
                                            View Organizations
                                        </Link>
                                    
                                  
                                </>
                            )}
                            {user && user.role !== "admin" && (
                                <>
                                    
                                        <Link
                                            className="navbar-brand"
                                            to="/add-patient"
                                        >
                                            Add Patient
                                        </Link>
                                   
                                    
                                        <Link
                                            className="navbar-brand"
                                            to="/view-patient"
                                        >
                                            View Patient
                                        </Link>
                                    

                                        <Link
                                            className="navbar-brand"
                                            to="/search"
                                        >
                                            Search
                                        </Link>
                                                          
                                </>
                            )}
                           
                        <ul className="navbar-nav">
                            
                            {!user && (
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/login">
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
            </nav>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    };
};

export default connect(mapStateToProps)(Navbar);
