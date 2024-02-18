import React from "react";

import { Button, Img, Input, List, Text } from "components";
import LandingDesktopProduct from "components/LandingDesktopProduct";
import LandingDesktopProduct1 from "components/LandingDesktopProduct1";
import NavbarItem from "components/NavbarItem";
// import { clothesData }  from "../../../../db.json";
import SearchEngine from "components/SearchEngine";

const LandingdesktopPage = () => {
  const landingDesktopProductPropList = [
    {},
    {
      productname: "Concertina Phone Bag",
      image: "images/img_image_279x251.png",
      price: "$248",
    },
    {
      productname: "Wool Cashmere Sweater Coat",
      image: "images/img_image_1.png",
      price: "$398",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-styreneaweb items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-black-900 flex flex-col items-center justify-center px-[15px] py-3 w-full">
          <Text
            className="text-[15px] text-center text-white-A700 w-auto"
            size="txtStyreneAWebRegular11"
          >
            Barter your old wears for different ones.{" "}
          </Text>
        </div>
        <header className="text-[14px] bg-white-A700 flex md:flex-col md:gap-3 items-center justify-between outline outline-gray-300 md:px-3 px-9 py-[20px] w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto">
            <Img
              className="h-5 w-[86px]"
              src="images/img_logo.svg"
              alt="logo"
            />
          </div>
          <NavbarItem />
          <ul className="flex flex-row gap-[18px] sm:hidden items-center justify-end w-auto common-row-list">
            <li>
              <a href="javascript:">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_usercircle.svg"
                  alt="usercircle"
                />
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_heart.svg"
                    alt="heart"
                  />
                  <Text
                    className="text-[13px] text-black-900 w-auto"
                    size="txtStyreneAWebRegular13"
                  >
                    2
                  </Text>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <Text
                    className="text-[13px] text-black-900 w-auto"
                    size="txtStyreneAWebRegular13"
                  >
                    0
                  </Text>
                </div>
              </a>
            </li>
          </ul>
        </header>
        
        <SearchEngine />
        
        <div
          className="bg-cover bg-no-repeat flex flex-col gap-5 h-[712px] md:h-auto items-start justify-end p-16 md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_content.png')" }}
        >
          <Text
            className="leading-[32.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtStyreneAWebRegular24"
          >
            <>
              Elevate Your Style
              <br />
              Timeless Fashion, Sustainable <br />
              Choices
            </>
          </Text>
          <Button className="cursor-pointer min-w-[116px] text-[15px] text-center">
            Shop Now
          </Button>
        </div>
        
        <div className="flex flex-col gap-12 items-start justify-start p-8 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1336px] mx-auto md:px-5 py-4 w-full">
            <Text
              className="leading-[24.00px] text-black-900 text-lg"
              size="txtStyreneAWebRegular18"
            >
              <>
                Elevate your lifestyle with a more intelligent, superior
                wardrobe. <br />
                Our range is crafted sustainably with longevity in mind.
              </>
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[532px] justify-start max-w-[1336px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[532px] items-end justify-start p-8 sm:px-5 w-full"
              style={{
                backgroundImage: "url('images/img_collectionbanner.png')",
              }}
            >
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtStyreneAWebRegular18WhiteA700"
              >
                New Arrivals
              </Text>
            </div>
            <div
              className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[532px] items-end justify-start p-8 sm:px-5 w-full"
              style={{
                backgroundImage:
                  "url('images/img_collectionbanner_532x432.png')",
              }}
            >
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtStyreneAWebRegular18WhiteA700"
              >
                The Casual Edit
              </Text>
            </div>
            <div
              className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[532px] items-end justify-start p-8 sm:px-5 w-full"
              style={{
                backgroundImage: "url('images/img_collectionbanner_1.png')",
              }}
            >
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtStyreneAWebRegular18WhiteA700"
              >
                Best-Sellers
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-12 items-start justify-start p-8 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1336px] mx-auto md:px-5 py-4 w-full">
            <Text
              className="text-black-900 text-lg w-auto"
              size="txtStyreneAWebRegular18"
            >
              What to Wear Now
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1336px] mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
              orientation="horizontal"
            >
              {landingDesktopProductPropList.map((props, index) => (
                <React.Fragment key={`LandingDesktopProduct${index}`}>
                  <LandingDesktopProduct
                    className="flex flex-col gap-[13px] h-[348px] md:h-auto items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <LandingDesktopProduct1 className="flex flex-1 flex-col gap-[13px] h-[348px] md:h-auto items-start justify-start w-full" />
            <LandingDesktopProduct
              className="flex flex-1 flex-col gap-[13px] h-[348px] md:h-auto items-start justify-start w-full"
              image="images/img_image_3.png"
              productname="Alpaca Wool Cropped Cardigan"
              price="$248"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-5 items-start justify-start p-8 sm:px-5 w-full">
          <div
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-1 flex-col h-[719px] md:h-auto items-end justify-start p-8 md:px-5 w-full"
            style={{
              backgroundImage: "url('images/img_collectionbanner_719x658.png')",
            }}
          >
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtStyreneAWebRegular18WhiteA700"
            >
              The Smart Chic
            </Text>
          </div>
          <div
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-1 flex-col h-[719px] md:h-auto items-end justify-start p-8 md:px-5 w-full"
            style={{
              backgroundImage: "url('images/img_collectionbanner_2.png')",
            }}
          >
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtStyreneAWebRegular18WhiteA700"
            >
              Ready To Go
            </Text>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-[47px] items-center justify-start pb-[180px] pt-24 w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
            size="txtStyreneAWebRegular24Black900"
          >
            The Art of Fewer, Better Choices
          </Text>
          <Text
            className="leading-[22.00px] max-w-[720px] md:max-w-full text-base text-black-900 text-center"
            size="txtStyreneAWebRegular16"
          >
            Opting for quality over quantity means selecting timeless, durable,
            and responsibly made items. This approach simplifies our lives and
            fosters a deeper appreciation for our surroundings. Emphasizing
            longevity and responsible production resonates with a more
            sustainable and mindful lifestyle.
          </Text>
        </div>
        <div className="flex flex-col gap-12 items-start justify-start p-8 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1336px] mx-auto md:px-5 py-4 w-full">
            <Text
              className="text-black-900 text-center text-lg w-auto"
              size="txtStyreneAWebRegular18"
            >
              Shop Instagram
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1336px] mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-[251px] items-center justify-start w-full">
                <Img
                  className="h-[251px] md:h-auto object-cover w-[251px]"
                  src="images/img_image_251x251.png"
                  alt="image"
                />
              </div>
              <div className="flex flex-col h-[251px] items-center justify-start w-full">
                <Img
                  className="h-[251px] md:h-auto object-cover w-[251px]"
                  src="images/img_image_4.png"
                  alt="image"
                />
              </div>
              <div className="flex flex-col h-[251px] items-center justify-start w-full">
                <Img
                  className="h-[251px] md:h-auto object-cover w-[251px]"
                  src="images/img_image_5.png"
                  alt="image"
                />
              </div>
            </List>
            <div className="h-[251px] relative w-[251px]">
              <Img
                className="h-[251px] m-auto object-cover w-[251px]"
                src="images/img_image_6.png"
                alt="image_Four"
              />
              <Img
                className="absolute h-[34px] inset-[0] justify-center m-auto w-[34px]"
                src="images/img_instagramlogo.svg"
                alt="instagramlogo"
              />
            </div>
            <div className="flex flex-col h-[251px] items-center justify-start w-[251px]">
              <Img
                className="h-[251px] md:h-auto object-cover w-[251px]"
                src="images/img_image_7.png"
                alt="image_Five"
              />
            </div>
          </div>
        </div>
        <footer className="bg-gray-100 flex items-center justify-center outline outline-gray-300 pb-[42px] pt-[76px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-1 md:flex-col flex-row gap-[25px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <a
                    href="javascript:"
                    className="text-[11px] text-gray-700 tracking-[0.08px] uppercase w-full"
                  >
                    <Text size="txtStyreneAWebRegular11Gray700">
                      CONTACT US
                    </Text>
                  </a>
                  <ul className="flex flex-col gap-1 items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          +1 (844) 326-6000
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">Email Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Mon-Fri 9am-3pm PT
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[11px] text-gray-700 tracking-[0.08px] uppercase w-full"
                    size="txtStyreneAWebRegular11Gray700"
                  >
                    CUSTOMERS
                  </Text>
                  <ul className="flex flex-col gap-1 items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Start a Return
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Return Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Catalogs and Mailers
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          About Group Gifting
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[370px] sm:w-full">
                  <Text
                    className="text-[11px] text-gray-700 tracking-[0.08px] uppercase w-full"
                    size="txtStyreneAWebRegular11Gray700"
                  >
                    COMPANY
                  </Text>
                  <ul className="flex flex-col gap-1 items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Sustainability
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Discover Revive
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">Careers</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-[13px] text-black-900"
                      >
                        <Text size="txtStyreneAWebRegular13">Terms</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start sm:px-5 px-[25px] w-[491px] sm:w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtStyreneAWebRegular16"
                >
                  Get the latest new from us
                </Text>
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Input
                      name="input"
                      placeholder="Enter your email address"
                      className="p-0 placeholder:text-gray-700 text-[13px] text-left w-full"
                      wrapClassName="w-full"
                      type="email"
                    ></Input>
                    <Text
                      className="leading-[20.00px] max-w-[441px] md:max-w-full text-[13px] text-black-900"
                      size="txtStyreneAWebRegular13"
                    >
                      <span className="text-black-900 font-styreneaweb text-left font-normal">
                        By signing up, you agree to our{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-black-900 font-styreneaweb text-left font-normal underline"
                      >
                        Privacy Policy
                      </a>
                      <span className="text-black-900 font-styreneaweb text-left font-normal">
                        {" "}
                        and{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-black-900 font-styreneaweb text-left font-normal underline"
                      >
                        Terms of Service
                      </a>
                      <span className="text-black-900 font-styreneaweb text-left font-normal">
                        .
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer min-w-[116px] text-[15px] text-center"
                    color="black_900"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start px-10 sm:px-5 w-full">
              <Text
                className="text-[13px] text-gray-700 w-auto"
                size="txtStyreneAWebRegular13Gray700"
              >
                ©CEIN
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingdesktopPage;
