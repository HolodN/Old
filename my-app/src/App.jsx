import './App.css';
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Cart from './components/cart/Cart.jsx';
import Footer from './components/footer/Footer.jsx';
import Overlay from './components/overlay/Overlay';
import React from 'react';
import axios from 'axios';
import{Routes, Route} from 'react-router-dom'
import Favorites from './components/favorites/Favorites'
import Home from './components/Home'

export const AppContext = React.createContext({})


function App(){

    // состояние корзины
    const [overlayOpen, setOverlayOpen] = React.useState(false);

    // хранение данных туров
    const [tyrs, setTyrs] = React.useState([]);

    // для хранения объектов корзины
    const[overlayItems, setOverlayItems] = React.useState([])
    
    // useEffect используется когда надо вывести что то только вначале или когда обновляется.Две квадратные скобки в конце для ограничения в один запрос.

    //Для поиска
    const[search, setSearch] = React.useState('')

    //Для хранения избранных заявок
    const[favorites, setFavorites] = React.useState([])

    React.useEffect(() =>{
async function axiosData(){
            
            const tyrsData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
            const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')
            const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
    
              setTyrs(tyrsData.data)
              setOverlayItems(cartData.data)
              setFavorites(favoritesData.data)
            }
          axiosData();
           
         
        }, [])
    

    const deleteItems=(id)=>{
        console.log(id);
        // удаляет запись c заданным id из mock.api
        axios.delete(`https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete)=> objDelete.filter(item => item.id !== id))
    }

    const isAdded =(myId)=>{
        return overlayItems.some((objIsAdded)=>objIsAdded.myId === myId)

    }

    const isFav =(myId) =>{
            return favorites.some((objIsFav)=>objIsFav.myId === myId)
    }




    return(
        <AppContext.Provider
        value={
                {
                tyrs,
                setTyrs,
                overlayItems,
                setOverlayItems,
                favorites,
                setFavorites,
                isAdded,
                isFav
                }
            }
        >
        <div className="app">
             {overlayOpen ?
              <Overlay 
                overlayProp={overlayItems} 
                closeOverlay={() => setOverlayOpen(false)} 
                deleteItems={deleteItems} 
              />
            : null}

            <Header openOverlay={() => setOverlayOpen(true)} overlayItems={overlayItems} />
            
            <Routes>
                    <Route path='/favorites'
                          element={
                            <Favorites
                                favorites={favorites}
                                setFavorites={setFavorites}
                                item={tyrs}
                                overlayItems={overlayItems}
                                setOverlayItems={setOverlayItems}
                            />
                            }
                     />

                    <Route path='/'
                         element={
                            <Home
                                item={tyrs}
                                overlayItems={overlayItems}
                                setOverlayItems={setOverlayItems}
                                setSearch={setSearch}
                                search={search}
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                         }
                     />
                </Routes>
            <Footer/>
        </div>

        </AppContext.Provider>
    )
}
export default App