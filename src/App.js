import {Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import TheRandomNowPlayingInfoFilms from "./components/films_now_playing/TheRandomNowPlayingInfoFilms";
import Header from "./components/Header";
import TopSearchInfo from "./components/seacrh/TopSearchInfo";


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/now_playing/:id' element={<TheRandomNowPlayingInfoFilms />} />
                <Route path='/search/:name' element={<TopSearchInfo />} />
            </Routes>
        </>
    );
}

export default App;
