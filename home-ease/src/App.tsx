import {createContext, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Properties from './pages/Properties';
import House from './components/House';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellProperty from './pages/SellProperty';

interface propertiesContextValue {
  searchLocation: string |number | undefined,
  minPrice: number|undefined,
  maxPrice: number|undefined,
  setSearchLocation: React.Dispatch<React.SetStateAction<string | number | undefined>>,
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>,
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>
}
export const propertiesContext = createContext<propertiesContextValue>({
  searchLocation:'',
  minPrice: undefined,
  maxPrice:undefined,
  setSearchLocation: () => {},
  setMinPrice: () => {},
  setMaxPrice: () => {}
})

function App() {
  const [searchLocation,setSearchLocation] = useState<string|number|undefined>('')
  const [minPrice, setMinPrice] = useState<number|undefined>(undefined)
  const [maxPrice, setMaxPrice] = useState<number|undefined>(undefined)

  const contextValue = { // include setSearchLocation in the context value object
    searchLocation,
    minPrice,
    maxPrice,
    setSearchLocation,
    setMinPrice,
    setMaxPrice
  };

  return (
    <div>
      <Navbar/>
      <propertiesContext.Provider value={contextValue}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="properties" element={<Properties />}/>
                <Route path='house/:id' element={<House />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Signup />} />
                <Route path='sell' element={<SellProperty />} />
            </Routes>
        </BrowserRouter>
      </propertiesContext.Provider>
      
    </div>
  );
}

export default App;
