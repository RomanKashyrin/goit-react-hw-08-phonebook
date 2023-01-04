import Navigation from "components/Navigation/Navigation";
import NavAuth from "components/NavAuth/NavAuth";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import css from './AppBar.module.css';


const AppBar = () => {
    const {isLoggedIn} = useAuth();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <NavAuth />}
        </header>
    );
}

export default AppBar;