import { useState } from 'react';
import './App.css'
import dbUniverse from './db/universe.json'
import { getRandom } from './utils/random'
import Universe from './components/Universe'


const bgVerseImages = ['verse1', 'verse2', 'verse3', 'verse4']
const bgPlanetas =['planeta1', 'planeta2']

function App() {
  const [universe, setUniverse] = useState(getRandom(dbUniverse));
  const [verseImage, setbgVerseImage] = useState(getRandom(bgVerseImages));
  const [planeta, setPlaneta] = useState(getRandom(bgPlanetas));

  const handleChangeUniverse = () => { 
    setUniverse(getRandom(dbUniverse));
    setbgVerseImage(getRandom(bgVerseImages));
    setPlaneta(getRandom(bgPlanetas));
  }
  return <main className={`app ${verseImage}`}>
    <section className='app__container'>
      
      
        <h1 className='universe__title'>INFOGALAX</h1>
        
      <Universe handleChangeUniverse={handleChangeUniverse} phrase={universe.phrase} />

      <footer className='footer__container'>
        {/* <img className='img__footer' src={`${planeta}`} alt="" /> */}
        <div className='plantilla'></div>
        <div className={`img__footer ${planeta}`}></div>
          <h3 className='foorter__title' >Fuente:{universe.author}</h3>
        </footer>
      </section>
    </main>
}

export default App
