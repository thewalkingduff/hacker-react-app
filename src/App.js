import React, { useState } from 'react';
import './App.css';
import UseDataApi from './components/UseDataApi'
import HandlePageChange from './components/HandlePageChange';
import Pagination from './components/Pagination';
import Paginate from './components/Paginate'

function App() {
  const { Fragment } = React;
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
    // console.log(e.target.textContent)
  };
  const path = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'
  const [{ data, isLoading }, doFetch] = UseDataApi(
    path,
    {
      hits: [],
    }
  );

  <HandlePageChange />
  let page = data.hits;
  console.log(page)
  if (page.length >= 1) {
    page = Paginate(page, currentPage, pageSize);
    // console.log(`currentPage: ${currentPage}`);
  }

  return (
    < Fragment >

      <form
        onSubmit={event => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <div className="input-div">
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            className="search-input"
          />
        </div>
        <div>
          <button className="search-button" type="submit">Search</button>
        </div>



      </form>
      {
        isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ul className="list-group">
            {page.map((item) => (
              <li className="list-group-item" key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )
      }
      <Pagination
        items={data.hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </ Fragment>
  );
}

export default App;
