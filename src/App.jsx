import './App.css';
import PostsPage from "./pages/PostsPage.jsx";
import {Routes, Route} from "react-router-dom";
import SinglePostPage from "./pages/SinglePost.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PostsPage/>}/>
                <Route path="/:id" element={<SinglePostPage/>}/>
            </Routes>
        </>
    );
}

export default App;
