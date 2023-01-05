import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import css from './Contacts.module.css';

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>

            <div className={css.contacts_box}>
                <h1 className={css.contacts_title}>Phonebook</h1>
                <ContactForm />
                <h2 className={css.contacts_name}>Contacts</h2>
                <Filter />
                <ContactList />
            </div>
        </>
    );
}