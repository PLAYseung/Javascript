import { Button,ButtonToolbar} from 'react-bootstrap';

export default () => {
    function showName(name){
        console.log(name.target.value);
    }
    function showdiff(name){
        console.log(name);
    }

    return(
    <div>
        <ButtonToolbar style={{display:'block'}}>
            <Button variant='Primary' onClick={showName}>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
        </ButtonToolbar>
        <input type='text' onChange={showName} />
        <input type='text' onChange={
            name => {
                const diff = name.target.value;
                showdiff(diff);
                }} />
    </div>
)};
