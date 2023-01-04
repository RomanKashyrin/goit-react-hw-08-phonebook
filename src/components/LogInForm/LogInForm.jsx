import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LogInForm.module.css';

const LogInForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.elements.email;
        const password = form.elements.password;

        const user = {
            email: email.value,
            password: password.value,
        }
        
        dispatch(logIn(user));
        form.reset();
    }

    return (
        <div className={css.log_in__form}>
            <h2 className={css.title}>Log in</h2>

            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    <input className={css.input} type="email" name="email" placeholder="Email" />
                </label>

                <label className={css.label}>
                    <input className={css.input} type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit" className={css.button} >Log in</button>
            </form>

        </div>
    );
}
export default LogInForm;