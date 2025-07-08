import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header";
import Hero from "./Hero";
import TilesContainer from "./TilesContainer";
import PostDetails from "./PostDetails";
import ArticlesPage from "./ArticlesPage";
import CreateArticlePage from "./CreateArticlePage";


function App() {
    return (
    <Router>
       <main>
         <Header />
         <Routes>
           <Route path="/" element={
            <>
              <Hero />
              <TilesContainer />
              </>
           } />
           <Route path="/post/:id" element={<PostDetails />} />
           <Route path="/articles" element={<ArticlesPage />} />
           <Route path="/articles/create" element={<CreateArticlePage />} />
          </Routes>
       </main>
    </Router>
    )
}


export default App;