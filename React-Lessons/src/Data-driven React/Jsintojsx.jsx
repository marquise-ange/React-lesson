//this is used when Javascript involves in html in react 
//they can run 

/*function Jsintojsx(){
    //const firstName = "marquise"
    //const secondName = "ange"

    return(
        <h1>It's currently about {new Date().getHours() %12}</h1>
    )
}
*/


function App() {
  const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return(
    <h1>Good {timeOfDay}</h1>
  )
}

export default App 