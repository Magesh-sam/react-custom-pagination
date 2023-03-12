import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Crypto from './components/Crypto';
import Pagination from './components/Pagination';


function App() {

  const [coinsData, SetCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10)

  useEffect(()=> {
    crypto()
  },[])

  const crypto = async () =>{
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    SetCoinsData(response.data)
    
  }

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = coinsData.slice(firstPostIndex,lastPostIndex);


  return (
    <>
      <Crypto coinsData={currentPosts}/>
      <Pagination totalPosts={coinsData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
