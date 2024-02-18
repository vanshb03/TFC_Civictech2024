import { React, useState } from 'react'
import { Input, Button } from 'components'
import clothesData from '../../../../db.json'

const SearchEngine = () => {
    const [searchTerm, setSearchTerm] = useState(''); 

    const [results, setResults] = useState([]);
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const searchResults = clothesData.clothes.filter(cloth =>
            cloth.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(searchResults);
        console.log(results);
    }


    return (
        <div className="search-bar bg-white-A700 flex flex-col items-center justify-center outline outline-gray-300 p-5 w-full">
            <div className="flex flex-row gap-5 items-center justify-center w-full">
            <div className="flex flex-1 items-center justify-center w-full">
                <input
                type="text"
                name="input"
                placeholder="Search here! "
                className="p-0 placeholder:text-gray-400 text-[13px] text-left w-full"
                wrapClassName="w-full"
                onChange={handleSearchChange}
                />
            </div>

            <Button
                className="cursor-pointer min-w-[116px] text-[15px] text-center"
                color="black_900" 
                onClick={handleSearch}
            >
                Search
            </Button>
            </div>
            <div>
                
            </div>
            {/* <div>
                {results.length > 0 ? (
                  results.map(cloth => (
                      <div key={cloth.id}>
                          <p>Owner ID: {cloth.uid}</p>
                          <p>Type: {cloth.type}</p>
                          <p>Price: ${cloth.price}</p>
                      </div>
                  ))
                ) : (
                  <p>No results found</p>
                )}
            </div> */}
        </div>
  )
}

export default SearchEngine