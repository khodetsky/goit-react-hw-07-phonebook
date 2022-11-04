import { ListItemStyled, DeleteButton, ItemContentBox } from './ContactLictItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

export const ContactListItem = ({ contactData }) => {
    const { id, name, number } = contactData;
    const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();

    return (
    <>
       <ListItemStyled >
           <ItemContentBox>{name}</ItemContentBox>
           <ItemContentBox>{number}</ItemContentBox>
           <DeleteButton type="button" onClick={() => deleteContact(id)}>{isDeliting ? 'Deleting...' : 'Delete'}</DeleteButton>
       </ListItemStyled>
    
    </>
    )
}