import Entry from "./Components/Entry"
import Header from "./Components/Header"
import Jokes from "./Components/Jokes"

  function App(){
return(
    <>
    <Jokes 
    setup="Why don't scientists trust atoms?"
    punchline="Because they make up everything!"

    />

    <Jokes 
    setup="Why did the bicycle fall over?"
    punchline="Because it was two-tired!"

    />
    <Jokes 
    setup="What do you call a bear with no teeth?"
    punchline="A gummy bear!"

    />

    <Jokes
    setup="Why did the computer go to the doctor?"
    punchline="Because it had a virus!"

     />

    </>
)
  }

  export default App




//this was an example of studying props 
/*function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App
*/