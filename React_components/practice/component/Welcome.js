import { useState } from "react";

export default function Welcome(){
    let [name,chName] = useState('None')

    function changeName() {
        name = name === 'Mike' ? "Jane" : "Mike";
        console.log(name);
        chName(name)
    }

    return(
    <div>
        <h1>State</h1>
        <h2 id='name'>{name}</h2>
        <button onClick={changeName}>Change</button>
    </div>
)};