import Card from "./components/Card";
import CreateCard from "./components/Createcard";

function App(){
  
  
  return(
    <>
    <CreateCard/>
    <Card name="Lew" description="A React Developer" 
    interest1="Software Development" interest2="Web development" 
    interest3="Open source"/>
    </>
  )
}


export default App;