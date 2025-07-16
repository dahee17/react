function Myteam(props){
    let divstyle ={
        width : '600px',
        height : '100px',
        border : '1px solid lightblue',
        margin : '10px'
    }

    return(
        <div style={divstyle}>
            <p>{props.tName}</p>
            <p>{props.userName}</p>
        </div>        
    )
}
export default Myteam