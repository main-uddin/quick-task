import Login from './components/login'
import JoinUs from './components/joinus'
import Sale from './components/sale'
import TagsComponent from './components/tags'

import DropDown from './components/dropdown'

import './App.css'
import FinalSection from './components/finalSection'

function App() {
  return (
    <div className='App'>
      <div className='section__one'>
        <Login />
        <Sale />
      </div>
      <div className='section__two'>
        <JoinUs />
        <TagsComponent />
      </div>

      <div className='section__three'>
        <DropDown />
        <FinalSection />
      </div>
    </div>
  )
}

export default App
