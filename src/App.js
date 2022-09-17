import React from "react"
import Answers from "./Answers"
import {decode} from 'html-entities';
import "./style.css"
export default function App(){
    const [rightAnswers, setRightAnswers] = React.useState(0)
    const [quizStart,setQuizStart] = React.useState(false)
    const [data,setData] = React.useState([])
    const [checked,setChecked] =React.useState(false)
    const [refresh, setRefresh] = React.useState(true)
     React.useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setData(data.results))
    }, [refresh])
      
      
    function refresher(){
        setRefresh(prev => !prev)
    }
    function rightAnswer(){
        console.log("working")
        setRightAnswers(prev => prev + 1)
    }
    function startQuiz(){
        setQuizStart(prev => !prev)
       
    }
   function checking(){
       if(checked){
           refresher()
           setRightAnswers(0)
       }
      
       setChecked(prev => !prev)
       
   }
    function bug(){
        display.map(dis => console.log(dis))
    }

  const display = data.map((dat, index) =>(
      <div key = {index} >
            <h1 className = "question" > {decode(dat.question)} </h1>
            <Answers 
            correctAnswer ={decode(dat.correct_answer)}
            incorrectAnswers = {dat.incorrect_answers.map( answer => (
                decode(answer)
            ))}
            checked ={checked}
            key = {index}
            rightAnswer ={() => rightAnswer()}
            />
        </div>
  ))
  
    return(
    <main>
      {
          (quizStart&&data[0]) ? 
         <div className = "question--page">
            {display}     
            <button onClick ={checking} className = "check-button">{checked ? "Play again" : "Check answers"}</button>
                 { checked && <h5 className = "end-results">{ `You scored ${rightAnswers}/5 correct answers`} </h5>}
        </div>
      :
     
                <div className = "opening-page">
                <h1 className = "start-header"> Quizical </h1>
                <button className ="start-button" onClick = {startQuiz}> start quiz </button> 
           </div> 
       }
       </main>      
    )
}
 