import logo from './logo.svg';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getCatsFetch } from './catState';
import './App.css';

function App() {

  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCatsFetch())
  },[]);
  console.log('List of cats: ', cats)
  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats. Lots of cats for your viewing pleasure</p>
      <hr/>
      <div>
        <ul>
          {cats.map((cat)=> (
            <li key={cat.id}>
              {/* <div>
                <img alt={cat.name} src={cat.image.url} width="200" height={200} />
              </div> */}
              <div>
                <h2>{cat.name}</h2>
                <h5>Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
