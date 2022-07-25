// create your App component here
import React, { useState, useEffect } from "react";

function App(){
    const [aStateImage, setAStateImage] = useState(null);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(responce => responce.json())
            .then(data => {
                setAStateImage(data.message);
            })
    }, [])


    return (
        <div>
            {(!aStateImage ? <p>Loading...</p> : <img src={aStateImage} alt="A Random Dog" />)}
        </div>
    )
}

export default App;

