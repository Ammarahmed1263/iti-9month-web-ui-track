import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsList from "./components/NewsList";
import NewsForm from "./components/NewsForm";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <main className="container content-grid">
          <div className="area-carousel">
            <Carousel />
          </div>
          <div className="area-form">
            <NewsForm />
          </div>
          <div className="area-news-list">
            <NewsList />
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default App;
