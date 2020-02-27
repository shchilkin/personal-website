import React,{useState} from "react";
import ButtonBlock from "../../../../Layout/Buttons/Button-Block/Button-Block.component";
import '../../../../Layout/Buttons/Button-Block/Button-Block.style.css'
import '../../../../Layout/Buttons/Button/Button.style.css'
import '../../../../Layout/Input/Input.style.css'
import '../../../../Layout/Alert/Alert.style.css'
import Input from "../../../../Layout/Input/Input.component";

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
            <Input
                type={'text'}
                placeholder={'Enter a Username'}
                value={text}
                onChange={onChange}
                onFocus={event=> event.target.placeholder=''}
                onBlur={event=> event.target.placeholder='Enter an Username...'}
            />

            <input
                className={'Button-Block button'}
                style={{marginBottom:'1.25rem'}}
                value={'Search'}
                type={'submit'}
            />
        </form>
        {showClear && (
            <ButtonBlock onClick={clearUsers} style={{marginBottom:'1.25rem'}} text={'Clear'} />
        )}
        </div>
    )
};

export default Search