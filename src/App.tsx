import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/layout';
import Home from './Pages/home';
import Contact from './Pages/contact';
import Item from './Pages/item';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/item" element={<Item />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
