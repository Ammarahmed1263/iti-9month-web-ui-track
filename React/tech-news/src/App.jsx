import Footer from "./functionalComponents/Footer";
import Header from "./functionalComponents/Header";
import NewsContainer from "./functionalComponents/NewsContainer";
import { useNews } from "./hooks/useNews";

const App = () => {
  const { 
    news, 
    allNews, 
    searchTerm, 
    loading, 
    error, 
    handleVote, 
    handleAddNews, 
    handleSearch 
  } = useNews();

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />

      <NewsContainer 
        news={news} 
        allNews={allNews} 
        loading={loading} 
        error={error} 
        handleVote={handleVote} 
        handleAddNews={handleAddNews} 
      />

      <Footer />
    </>
  );
};

export default App;
