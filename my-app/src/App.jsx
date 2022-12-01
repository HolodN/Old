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
        // fetch('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs').then((resJson)=>{return resJson.json()})

    // вывод в консоль
    // .then((myJson)=>{console.log(myJson)})
    
    // .then((myJson)=>{setTyrs(myJson)});

    axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs').then((resJson) =>{
        setTyrs(resJson.data)
    })
    
    
    axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart').then((res) =>{
        setOverlayItems(res.data);
    })

    axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites').then((res) =>{
        setFavorites(res.data)
    
    })

    }, [])

    const deleteItems=(id)=>{
        console.log(id);
        // удаляет запись c заданным id из mock.api
        axios.delete(`https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete)=> objDelete.filter(item => item.id !== id))
    }

    return(
        <div className="app">
             {overlayOpen ?
              <Overlay 
                overlayProp={overlayItems} 
                closeOverlay={() => setOverlayOpen(false)} 
                deleteItems={deleteItems} 
              />
            : null}

            <Header openOverlay={() => setOverlayOpen(true)} />
            
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
    )
}
export default App