import Concept from './Components/Concept/Concept';
import Header from './Components/Header/Header';
import conceptsData from './Data/ConceptsData';

function App() {

  return (
    <div>
      <Header/>
      <ul id="concepts">
        {
        conceptsData.map((itm, i)=> (<Concept key={`${i}-${Math.random()}`} title={itm.title} image={itm.image} description={itm.description}/>))
        }
      </ul>
    </div>
  );
}

export default App;
