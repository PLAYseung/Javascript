import { useState } from "react"

export default (word) =>{
    let [isShow, setItem] = useState(false);
    let [isDone,setIsDone] = useState(word.word.isDone)

    function togglShow(){
        setItem(!isShow);
    }

    function togglIsDone() {
        // setIsDone(!isDone)
        fetch(`http://localhost:3001/words/${word.word.id}`,{
            method : 'put',
            headers : {
                'Constent-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word.word,
                isDone : !isDone,
            }),
        })
        .then(res => {
            if(res.ok){
                setIsDone(!isDone);
            }
        })
    }

    function btn_dell(){
    }

    return(
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type='checkbox' checked={isDone} onChange={togglIsDone} />
            </td>
            <td>{word.word.eng}</td>
            <td>{isShow && word.word.kor}</td>
            <td>
                <button onClick={togglShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button className='btn_dell' onClick={btn_dell}>삭제</button>
            </td>
        </tr>
    )
}