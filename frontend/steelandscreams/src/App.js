import './App.css';

import { Footer } from './components/Common/Footer';
import { Header } from './components/Common/Header';

function App() {
  return (
    <>
      <Header />

      <div class="container">
        <h2>Welcome to Steel And Screams!</h2>
        <p>Explore our collection of heavy metal t-shirts, albums, accessories, and more.</p>

        {/* <!-- Add your merchandise content here --> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
