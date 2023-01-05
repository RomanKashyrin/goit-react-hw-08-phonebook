import LogInForm from "components/LogInForm/LogInForm";
import { Helmet } from "react-helmet";


export default function LogIn() {
    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <LogInForm />
        </div>
    );
}