import { ContactListStyle} from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactLictItem';
import { useSelector } from "react-redux";
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';
import Loader from "react-spinners/ClipLoader";


export const ContactList = () => {
    const filter = useSelector(getFilter);
    const { data: contacts, isFetching } = useFetchContactsQuery();

    const filteredContacts = (contacts, filter) => {
    if (!filter) {
        return contacts;
    }
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };

    return (
        <ContactListStyle>
            {isFetching && <Loader size={60} cssOverride={{marginLeft: '60px', marginTop: '30px'}} />}
            {contacts && filteredContacts(contacts, filter).map((contact) => (
                <ContactListItem key={contact.id} contactData={contact}/>
            ))}
        </ContactListStyle>
    )
}
