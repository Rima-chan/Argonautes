import Form from "./Form";
import argonautesLogo from "../assets/argonautes_logo3.png";

function Main() {
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
                </div>
            </div>
        </main>
    )
}

export default Main;