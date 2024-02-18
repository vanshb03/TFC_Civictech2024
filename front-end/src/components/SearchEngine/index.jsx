import { React, useState } from 'react'
import { Input, Button } from 'components'
import clothesData from '../../../../db.json'

const SearchEngine = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // const filteredClothes = clothesData.clothes.filter(cloth =>
    //     cloth.type.toLowerCase().includes(searchTerm.toLowerCase())
    // );

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
                onClick={()=> console.log(searchTerm)}
            >
                Search
            </Button>
        
            </div>
        </div>
  )
}

export default SearchEngine

// export default function SearchEngine() {
//     const [message, setMessage] = useState('');

//     const handleChange = (event) => {
//       setMessage(event.target.value);
//     };

//     return (
//       <div>
//         <input
//           type="text"
//           id="message"
//           name="message"
//           onChange={handleChange}
//         />
//         <h2>Message: {message}</h2>
//       </div>
//     );
//   }
  