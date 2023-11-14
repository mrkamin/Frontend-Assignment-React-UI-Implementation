// Import necessary components for the App
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// App component that renders the Navbar, Hero, and Footer components
const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <Footer />
  </div>
);

// Export the App component as the default export
export default App;
