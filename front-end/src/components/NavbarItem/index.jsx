import React from 'react'

const NavbarItem = () => {
  return (
    <>
    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-auto sm:w-full">
        <div className="flex flex-col items-center justify-center sm:px-5 px-[21px] w-auto">
            <div className="flex flex-col items-center justify-center py-1.5 w-auto">
                <Text
                className="text-[13px] text-black-900 w-auto"
                size="txtStyreneAWebRegular13"
                >
                Shop
                </Text>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:px-5 px-[21px] w-auto">
            <div className="flex flex-col items-center justify-center py-1.5 w-auto">
                <Text
                className="text-[13px] text-black-900 w-auto"
                size="txtStyreneAWebRegular13"
                >
                New Arrivals
                </Text>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:px-5 px-[21px] w-auto">
        <div className="flex flex-col items-center justify-center py-1.5 w-auto">
            <Text
            className="text-[13px] text-black-900 w-auto"
            size="txtStyreneAWebRegular13"
            >
            Sales
            </Text>
        </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:px-5 px-[21px] w-auto">
        <div className="flex flex-col items-center justify-center py-1.5 w-auto">
            <Text
            className="text-[13px] text-black-900 w-auto"
            size="txtStyreneAWebRegular13"
            >
            Journel
            </Text>
        </div>
        </div>
    </div>
    </>
  )
}

export default NavbarItem