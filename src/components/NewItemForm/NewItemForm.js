import React from 'react';
import Icon from '../../ui/Icon';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const NewItemForm = ({ onDone, onCancel, placeholder, ...props }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onDone();
    }

    return (
        <form className='d-flex justify-content-between' onSubmit={onSubmit}>
            <Input placeholder={placeholder} {...props}/>
            &nbsp;
            <Button type="submit" variant='outline-primary'><Icon name='check2'/></Button>
            &nbsp;
            <Button type="button" variant='outline-primary'><Icon name='x-lg'/></Button>
        </form>
    )
}

export default NewItemForm;
