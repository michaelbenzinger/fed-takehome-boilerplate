// @see https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
import Nav from './components/Nav';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Feature from './components/Feature';
import Footer from './components/Footer';
import './App.css';
import { articles, feature } from './content';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Articles articles={articles} />
      <Feature feature={feature} />
      <Footer />
    </div>
  );
}

export default App;
