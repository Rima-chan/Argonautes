import { useState } from "react";
import Error from "./Error";

function Form() {
    const [inputValue, setInputValue] = useState('');
    const [ errorMessage, setErrorMessage] = useState('');
    function postName() {
        if (inputValue === '') {
            setErrorMessage('On ne peut pas ajouter un membre sans nom !')
        } else if (inputValue < 2 || inputValue > 13) {
            setErrorMessage('Le prénom doit avoir entre 2 et 13 lettres !')
        }
        console.log(inputValue);
    }
    function handleInput(input) {
        setInputValue(input)
        if (inputValue === '') {
            setErrorMessage('On ne peut pas ajouter un membre sans nom !')
        } else if (inputValue < 2 || inputValue > 13) {
            setErrorMessage('Le prénom doit avoir entre 2 et 13 lettres !')
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
                    className="form-input rounded-full border-none focus:ring-2 focus:ring-yellow-900 mr-4 py-1"
                    type="text"
                    id="nameInput"/>
                <button
                    disabled={!inputValue || inputValue.length < 2 || inputValue.length > 12}
                    onClick={postName}
                    type="submit"
                    className="text-xs font-semibold bg-primary hover:bg-primaryDark disabled:opacity-50 text-white rounded-full p-2"
                    aria-label="Ajouter">AJOUTER</button>
            </span>
            <Error error={errorMessage} />
        </form>
    )
}

export default Form;