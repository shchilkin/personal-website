import React,{useState} from "react";
import ButtonBlock from "../../../../Layout/Buttons/Button-Block/Button-Block.component";

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');

    const onChange = (event) => setText(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        if(text===''){
            setAlert('Please, enter a text', 'light');
        } else {
            searchUsers(text);
            setText('')
        }
    };

    return(
        <div className={'mb-3'}>
        <form  onSubmit={onSubmit} className={'form mb-3'}>
            <input
                className={'form-control mb-2'}
                type='text'
                placeholder={'Enter an Username...'}
                value={text}
                onChange={onChange}
            />
            <input className={'btn btn-dark btn-block'}
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