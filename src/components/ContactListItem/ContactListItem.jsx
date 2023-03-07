import { ContactCard, DeleteButton } from "./ContactListItem.styled";
import PropTypes from 'prop-types';

export const ContactListItem = ({contact: {id, name, number}, onDelete}) => {
    return (
        <ContactCard>
            <p>{name}: {number}</p>
            <DeleteButton type="button" onClick={() => onDelete(id)}>Delete</DeleteButton>
        </ContactCard>
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};