import React,{useState} from "react";

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
        <div>
        <form  onSubmit={onSubmit} className={'form'}>
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
            <button className={'btn btn-light btn-block'} onClick={clearUsers}>
            Clear
            </button>
        )}
        </div>
    )
};

export default Search