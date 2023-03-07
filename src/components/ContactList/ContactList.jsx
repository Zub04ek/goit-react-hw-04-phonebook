import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { List } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(contact => {
                return (
                    <li key={contact.id}>
                        <ContactListItem contact={contact} onDelete={onDelete} />
                    </li>
                );
            })}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
};