import { useState } from "react"
import UserName from "./userName";

export default (Props) => {

    let [names,chName] = useState('Jane')
    let [age,chage] = useState(Props.age)

    let msg = age > 19 ? '성인 입니다' : '미성년자 입니다';

    function changeName() {
        let newName = names == 'Mike' ? 'Jane' : 'Mike';
        chName(newName)
        chage(age+1)
    }

    return(
        <div>
            <p>{names} {age} : {msg}</p>
            <UserName name={names}/>
            <button onClick={changeName}>change</button>
        </div>
    )
}