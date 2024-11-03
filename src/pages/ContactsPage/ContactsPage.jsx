import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList"
import { selectContacts, selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox"
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css"


const ContactsPage = () => {
const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const IsLoadnig = useSelector(selectLoading);
  const IsError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Phonebook loaded successfully!");
      });
  }, [dispatch]);

  return (
    <div className={css.container}>
        {IsLoadnig && <h2>Loading...</h2>}
        {IsError && <h2>Error...</h2>}
      <h1 className={css.headTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
        {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.headText} >You don&apos;t have contacts yet!</p>
      )}
    </div>
  )
}

export default ContactsPage