// import dummy from '../db/data.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

export default () => {

    let {day}  = useParams();

    let words = useFetch(`http://localhost:3001/words?day=${day}`)

    return(
    <>
        <h2> Day {day}</h2>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
    )
}