import React,  {useState} from 'react';
import './App.css';



const  App = () => {
  const [result , setresult] = useState("");

  const handelclick = (e) =>{
        setresult(result.concat(e.target.name));

  }

    const clear = () =>{
       setresult("");

  }

  const backspace = () =>{
   setresult(result.slice(0, result.length-1));

}


const calculate = () =>{
  try{

    // eslint-disable-next-line no-eval
    setresult(eval(result));
  }
   catch(err){
    setresult("error");
  } 

}



  return (
        <div className="container">
          <form>
            <input type="text" value={result}/>
          </form>

          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">Clear</button>
            <button className="highlight" onClick={backspace} id="backspace">C</button>
            <button className="highlight" name="/" onClick={handelclick}>&divide;</button>
            <button name="7" onClick={handelclick}>7</button>
            <button name="8" onClick={handelclick}>8</button>
            <button name="9" onClick={handelclick}>9</button>
            <button className="highlight" name="*" onClick={handelclick}>&times;</button>
            <button name="4" onClick={handelclick}>4</button>
            <button name="5" onClick={handelclick}>5</button>
            <button name="6" onClick={handelclick}>6</button>
            <button className="highlight" name="-" onClick={handelclick}>&ndash;</button>
            <button name="1" onClick={handelclick}>1</button>
            <button name="2" onClick={handelclick}>2</button>
            <button name="3" onClick={handelclick}>3</button>
            <button className="highlight" name="+" onClick={handelclick}>+</button>
            <button name="0" onClick={handelclick}>0</button>
            <button className="highlight" name="." onClick={handelclick}>.</button>
            <button className="highlight" onClick={calculate} id="result">=</button>

          </div>
        </div>
  );
}

export default App;
