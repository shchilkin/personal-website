import React,{useState} from "react";
import ButtonBlock from "../../../../Layout/Buttons/Button-Block/Button-Block.component";
import '../../../../Layout/Buttons/Button-Block/Button-Block.style.css'
import '../../../../Layout/Buttons/Button/Button.style.css'
import '../../../../Layout/Input/Input.style.css'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');

    const onChange = (event) => setText(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        if(text===''){
            setAlert('Please, enter something', 'danger');
        } else {
            searchUsers(text);
            setText('')
        }
    };

    return(
        <div className={'mb-3'}>
        <form  onSubmit={onSubmit} className={'form mb-3'}>
            <input
                className={'Input'}
                type='text'
                placeholder={'Enter an Username...'}
                value={text}
                onChange={onChange}
            />
            <input
            className={'Button-Block button button-dark'}
            value={'Search'}
            type={'submit'}
            />
        </form>

        {showClear && (
            <ButtonBlock onClick={clearUsers} text={'Clear'} />
        )}
        </div>
    )
};

export default Search