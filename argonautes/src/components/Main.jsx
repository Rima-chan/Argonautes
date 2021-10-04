import Form from "./Form";
import argonautesLogo from "../assets/argonautes_logo3.png";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import DisplayMessage from "./DisplayMessage";
import styled from "styled-components";

const List = styled.ul`
    column-count: 3;
`

function Main() {
    const [ data, setData ] = useState('');
    const [ isLoading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/api/members');
                const data = await response.json();
                setData(data);
                console.log(response);
            } catch(err) {
                setError(true);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, []);
    return (
        <main className="flex-grow rounded-3xl bg-gradient-to-r from-brownMiddle via-brownLight to-brownMiddle shadow-lg px-4 pt-6 pb-8 mx-4">
            <div className="">
                <div className="flex justify-center items-center mb-8">
                    <img src={ argonautesLogo } className="w-8 h-8" alt="Logo Argonaute" />
                    <h1 className="text-2xl text-center font-candal mx-4">LES ARGONAUTES</h1>
                    <img src={ argonautesLogo } className="w-8 h-8" alt="Logo Argonaute" />
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-lato font-semibold mb-4">Ajouter un(e) Argonaute</h2>
                    <Form />
                </div>
                <div>
                    <h2 className="text-lg font-lato font-semibold mb-4">Membres de l'équipage</h2>
                    { isLoading ? <Loader/> : ''}
                    {data && (
                        <List>
                            {data?.map((member, index) => (
                                <li key={`${member.name}-${index}`}>{member.name}</li>
                            ))}
                        </List>
                    )}
                </div>
                <div className="flex flex-col">
                    <DisplayMessage
                            classes={'text-red-600 font-bold mt-2'}
                            message={ data?.error || error ? 'Oups, nous avons eu un problème...' : ''} />
                    <DisplayMessage
                        message={ data && data.length === 0  ? 'Aucun membre pour le moment 💨' : ''} />
                </div>
            </div>
        </main>
    )
}

export default Main;