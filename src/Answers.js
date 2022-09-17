import React from "react"
import Answer from "./Answer"
export default function Answers(props){
    const [nonSelected,setNonSelected] = React.useState(false)
  const propsArray = props.incorrectAnswers
  propsArray.push(props.correctAnswer)
    function newAnswers() {
        const answersArray = []
       
       for (let i = 0; i < 4; i++ ) {
           const Index =Math.floor(Math.random () * (4)) 
        var item = {
              value : propsArray[i],
               isCorrect : i === 3,
              id : i,
              isSelected : false,
              selectAnswer : () => selectAnswer(i),
              isChecked : props.isChecked,
              rightAnswer : () => rightAnswer()
        }
           answersArray.splice(Index,0,item)
       }
        return answersArray
    }
    function rightAnswer(){
        console.log("bae")
        props.rightAnswer()
    }

      
React.useEffect(() =>{
  if(props.checked){
      if(someSelected()){
      setNonSelected(false)    
      setAnswers(prev => prev.map(answer =>{
        return  {...answer, isChecked : true}
      }))
      }else{
          setNonSelected(true)
          setAnswers(prev => prev.map(answer =>{
        return  {...answer, isChecked : true , isCorrect: false}
      }))
      }
  }else{
      setNonSelected(false)    
  }
  },[props])
    
function someSelected(){
    var count = 0
    answers.map(answer => {if(answer.isSelected){
        count ++;
    }})
        
    return count
   
}

 function selectAnswer(id) {
        setAnswers(prev => prev.map(answer => {
            if(answer.isChecked){return answer}
            return answer.id === id ? 
              {...answer, isSelected: true} :
              {...answer, isSelected: false}
        }))
    }
 const [answers , setAnswers ]= React.useState(newAnswers())

React.useEffect(() =>{
        setAnswers(newAnswers())
  },[props.correctAnswer])
const answersElements = answers.map((answer, index) => (
        <Answer 
        value ={answer.value}
        isCorrect ={answer.isCorrect}
         key ={index}
         id ={answer.id}
        isSelected ={answer.isSelected}
        selectAnswer = {answer.selectAnswer}
        isChecked = {answer.isChecked}
        rightAnswer = {() => rightAnswer()}
         />
    ))
    return(
        <div className = "Answers"  >
        
            {answersElements}
            {nonSelected && <h1 className = "noAnswerChosen"> non of the Answers were chosen </h1>}
        </div>
    )}
