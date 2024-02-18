import React from 'react'

import { Text } from 'components'

const NavbarItem = () => {
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
  };
  

export default NavbarItem;