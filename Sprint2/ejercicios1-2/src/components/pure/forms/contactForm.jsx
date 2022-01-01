import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const Contactform = ({add, length}) => {

    const firstnameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');
    const connectedRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            firstnameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,            
            connectedRef.current.value,
            false,
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={firstnameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='First Name'/>
                <input ref={lastnameRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Last Name'/>
                <input ref={emailRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Email'/>
                <select className='form-control form-control-lg' ref={connectedRef} defaultValue='connected' id='selectLevel'>
                    <option value='connected'>
                        connected
                    </option>
                    <option value='offline'>
                        offline
                    </option>
                    
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Contact' : 'Create your First Contact'}
                </button>
            </div>
        </form>
    );
}

Contactform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Contactform;