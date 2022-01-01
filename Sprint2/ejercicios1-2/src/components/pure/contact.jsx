import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

// Importamos la hoja de estilos de task.scss
import '../../styles/contact.scss'


const ContactComponent = ({ contact, remove }) => {
    
    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contact.firstname} is going to unmount`);
        }
    }, [contact]);


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.firstname}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.connected}</span>
            </td>
            <td className='align-middle'>
            <i className='bi-trash contact-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );    
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
