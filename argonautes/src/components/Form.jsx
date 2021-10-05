import { useState, useEffect } from "react";
import DisplayMessage from "./DisplayMessage";
import Loader from "./Loader";
import apiUrl from "../config";

function Form() {
    const [ inputValue, setInputValue ] = useState('');
    const [ inputValidation, setInputValidation] = useState('');
    const [ data, setData] = useState({});
    const [ isLoading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    useEffect(() => {
        if (!inputValue || (1 < inputValue.length && inputValue.length < 13) ) {
            setInputValidation('');
        } else {
            setInputValidation('Le nom doit contenir entre 2 et 12 lettres');
        }
    }, [inputValue])
    async function fetchPostName() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({name: inputValue})
        }
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}`, requestOptions);
            const data = await response.json();
            setData(data);
        } catch(err) {
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
                    onChange={(e) => setInputValue(e.target.value)}
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
                    className="text-xs font-semibold bg-primary hover:bg-primaryDark disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary text-white rounded-full p-2"
                    aria-label="Ajouter">AJOUTER</button>
            </span>
            <DisplayMessage
                classes={'italic text-xs text-red-600 mt-2'}
                message={ inputValidation } />
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