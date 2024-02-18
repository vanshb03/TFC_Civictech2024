import React from 'react'

import { Text } from 'components'

const NavbarItem = () => {
    const items = ["Shop", "New Arrivals", "Sales", "Journal"]; // Corrected spelling of "Journal"
  
    return (
      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
        {items.map((item) => (
          <div key={item} className="flex flex-col items-center justify-center sm:px-5 px-[21px] w-auto">
            <div className="flex flex-col items-center justify-center py-1.5 w-auto">
              <Text className="text-[13px] text-black w-auto" size="txtStyreneAWebRegular13">
                {item}
              </Text>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default NavbarItem;