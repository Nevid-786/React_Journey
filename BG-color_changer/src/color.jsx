import './App.css';

function Color({name,setColor}){
    return(
        <buttton className="colorBox" style={{backgroundColor:name}} onClick={()=>setColor(name)}>{name}  

        </buttton>
    )
}
export default Color;