import { NavLink } from "react-router-dom";
import css from './NavAuth.module.css';

const NavAuth = () => {
    return (
        <div className={css.box}>
            <NavLink className={css.link} to="/register">
                Register
            </NavLink>
            <NavLink className={css.link} to="/login">
                Log In
            </NavLink>
        </div>
    );
}

export default NavAuth;