import React,{useState} from "react";
import '../../../../Layout/Buttons/Button-Block/Button-Block.style.css'
import '../../../../Layout/Buttons/Button/Button.style.css'
import '../../../../Layout/Inputs/Input.style.css'
import '../../../../Layout/Alert/Alert.style.css'
import Input from "../../../../Layout/Inputs/Input.component";
import Button from "../../../../Layout/Buttons/Button/Button.component";

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
                placeholder={'Enter an Username'}
                value={text}
                onChange={onChange}
                onFocus={event=> event.target.placeholder=''}
                onBlur={event=> event.target.placeholder='Enter an Username'}
                autoComplete={'off'}
            />

            <Button
                block={true}
                style={{height:'50px'}}
                value={'Search'}
                type={'submit'}
            >
                Search
            </Button>
        </form>
        {showClear && (
            <Button onClick={clearUsers} style={{height:'50px'}} block={true}>
                Clear
            </Button>
        )}
        </div>
    )
};

export default Search