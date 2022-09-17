import React from "react"
 
export default function Answer(props){
       if(props.isChecked && props.isCorrect && props.isSelected){
    React.useEffect(() => {
     
        {props.rightAnswer()}
     },[])
       }
function figureClassName(){
    
   if(props.isChecked && props.isCorrect) {
      return "checked-correct"
  }
  if(!props.isSelected){
    return "non-selected"
  }
   if(!props.isChecked && props.isSelected){
       return "selected"
   }
   if(props.isChecked && !props.isCorrect){
       return "checked-incorrect"
  }
 return "faliure"
}
       
       
 //// const a =figureClassName()
  //console.log(a)
    return (
           

        <div>
            <button onClick ={props.selectAnswer} className = {figureClassName()}> {props.value} </button>
</div>
    )

}