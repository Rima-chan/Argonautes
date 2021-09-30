import { useState } from "react";
import DisplayMessage from "./DisplayMessage";
import Loader from "./Loader";

function Form() {
    const [inputValue, setInputValue] = useState('');
    const [ errorMessage, setErrorMessage] = useState('');
    // const errorClasses = 'italic text-xs text-red-600 mt-2';
    // const fetchErrorClasses ='text-red-600 font-bold mt-2';
    // const fetchSuccessClasses = 'font-bold text-green-600 mt-2';

    function handleInput(input) {
        setInputValue(input);
        if (inputValue && 1 <= inputValue.length && inputValue.length <=11 ) {
            setErrorMessage('');
        } else {
            setErrorMessage('Le nom doit faire entre 2 et 12 lettres');
        }
    }

    const [ data, setData] = useState({});
    const [ isLoading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    async function fetchPostName() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({name: inputValue})
        }
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/members', requestOptions);
            console.log(response);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch(err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
            setInputValue('');
        }
    }


    return (
        <form
            onSubmit={ e => { e.preventDefault(); }}
            method="POST"
            encType="application/x-www-form-urlencoded"
            className="flex flex-col">
            <label className="mb-1" htmlFor="nameInput">Nom de l'Argonaute</label>
            <span className="flex">
                <input
                    onChange={(e) => handleInput(e.target.value)}
                    value={inputValue}
                    className="form-input rounded-full border-none focus:ring-2 focus:ring-yellow-900 mr-4 py-1"
                    type="text"
                    max-length="12"
                    required
                    id="nameInput"/>
                <button
                    disabled={!inputValue || inputValue.length < 2 || inputValue.length >= 13}
                    onClick={fetchPostName}
                    type="submit"
                    className="text-xs font-semibold bg-primary hover:bg-primaryDark disabled:opacity-50 text-white rounded-full p-2"
                    aria-label="Ajouter">AJOUTER</button>
            </span>
            <DisplayMessage
                classes={'italic text-xs text-red-600 mt-2'}
                message={ errorMessage } />
            { isLoading ? (<Loader />) : ''}
            <DisplayMessage
                classes={ 'text-red-600 font-bold mt-2' }
                message={ data?.error ? data.error :  (error ? 'Oups, nous avons eu un problème...' : '')} />
            <DisplayMessage
                classes={ 'font-bold text-green-600 mt-2' }
                message= { data?.message} />
        </form>
    )
}

export default Form;