import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

export default () => {

    // let day  = useParams().day;
    let {day}  = useParams();
    let wordList = dummy.words.filter(word => word.day==Number(day));


    return(
    <>
        <h2> Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}