import React, { useState, useEffect } from 'react'
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
        // Todo: We have to exclude the clothes from the user's own closet
        setResults(searchResults);
    }

    // This useEffect will run whenever `results` changes.
    useEffect(() => {
        console.log(results); // Now this will log the updated state
    }, [results]); // Dependency array, useEffect runs when any of these values change.


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
            {/* const NavbarItem = () => {
                const items = ["Shop", "New Arrivals", "Sales", "Journal"]; // Corrected spelling of "Journal"
            
                return (
                <div className="flex sm:flex-col flex-row sm:gap-5 items-left justify-start w-auto sm:w-full">
                    {items.map((item) => (
                    <div key={item} className="flex flex-col justify-start sm:px-5 px-[21px] w-auto">
                        <div className="flex flex-col justify-start py-1.5 w-auto">
                        <Text className="text-[17px] text-black w-auto" size="txtStyreneAWebRegular13">
                            {item}
                        </Text>
                        </div>
                    </div>
                    ))}
                </div>
                );
            }; */}
            <div className="flex sm:flex-col flex-row sm:gap-5 items-left justify-start w-auto sm:w-full">
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
            </div>
        </div>
  )
}

export default SearchEngine