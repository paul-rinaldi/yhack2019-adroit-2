import React from 'react';
import TextField from '@material-ui/core/TextField';
import style from './searchStyle.css';

const SearchPage = () => {
    const [values, setValues] = React.useState({
        search: ''
    });
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        
        console.log(values);
    };
    return (
        <div>
            <div id="cover">
            <form onSubmit={(value) => handleChange('search')}>
                <div class="tb">
                <div class="td">
                    <input type="text" placeholder="Jetblue" value="Jetblue" required />
                </div>
                <div class="td" id="s-cover">
                    <button type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                    </button>
                </div>
                </div>
            </form>
            </div>
            <form>
            </form>
        </div>
    ); 
};

export default SearchPage;