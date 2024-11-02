import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function ListedBooks() {
  return (
    <div>
      <div className="py-3 bg-base-300 rounded-xl ">
        <h1 className="text-4xl font-bold text-center">Books</h1>
      </div>
      <div className="my-6 flex justify-center">
        <div className="flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="bg-green-500 font-bold text-white rounded-lg">
                <summary>Sort By</summary>
                <ul className="p-2">
                  <li>
                    <button className="btn">Rating</button>
                  </li>
                  <li>
                    <button className="btn">Number of pages</button>
                  </li>
                  <li>
                    <button className="btn">Publisher year</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    {/* React Tabs here */}
    
    
    
    
    <div className="">
    <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
    <div className="max-w-4xl mx-auto p-4 border rounded-lg shadow-lg bg-white">
            <div className="flex flex-col md:flex-row">
                <img
                    src="https://placehold.co/100x150"
                    alt="Book cover of 'The Catcher in the Rye'"
                    className="w-24 h-36 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
                />
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">The Catcher in the Rye</h1>
                    <p className="text-gray-600">By: Awlad Hossain</p>
                    <div className="flex flex-wrap items-center mt-2">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">#Young Adult</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">#Identity</span>
                        <span className="text-gray-600 text-sm flex items-center">
                            <i className="fas fa-calendar-alt mr-1"></i> Year of Publishing: 1924
                        </span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-600 text-sm flex items-center mr-4">
                            <i className="fas fa-user mr-1"></i> Publisher: Scribner
                        </span>
                        <span className="text-gray-600 text-sm flex items-center">
                            <i className="fas fa-file-alt mr-1"></i> Page 192
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center mt-4">
                        <button className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-4 py-1 rounded">Category: Classic</button>
                        <button className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-4 py-1 rounded">Rating: 4.5</button>
                        <button className="bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
    
    
    
    
    
    {/* end div */}
    </div>
  );
}

export default ListedBooks;
