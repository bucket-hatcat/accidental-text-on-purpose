import { useEffect, useState } from "react";

function RandomWords(props) {
    const [words, setWords] = useState({});
// console.log(props);

const makeAPICall = () => {
    fetch(`https://random-words-api.vercel.app/`)
    .then((res) => res.json())
    .then ((data) => {
        // console.log(data);
        setWords(data);
    });
};

useEffect(() => {
    makeAPICall();
},

return (
    <div className="Word"
    <h1>hello</h1>
)