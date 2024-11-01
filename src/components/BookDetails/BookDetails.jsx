import React from 'react';

const BookDetails = () => {
    return (
        <div className="flex flex-col md:flex-row p-8 bg-gray-100 rounded-lg shadow-md">
            <div className="md:w-1/3 mb-4 md:mb-0">
                <img 
                    src="https://placehold.co/200x300" 
                    alt="Book cover of 'The Catcher in the Rye'" 
                    className="shadow-lg rounded-lg w-full" 
                />
            </div>
            <div className="md:w-2/3 md:pl-8">
                <h1 className="text-3xl font-bold">The Catcher in the Rye</h1>
                <p className="text-lg mt-2">By: Awlad Hossain</p>
                <p className="text-lg mt-2 border-t border-b border-gray-400 py-2">Fiction</p>
                
                <div className="mt-4">
                    <p className="font-bold">Review:</p>
                    <p className="mt-2 text-gray-700">
                        Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare. Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.
                    </p>
                </div>

                <div className="mt-4">
                    <p className="font-bold">Tags:</p>
                    <div className="mt-2">
                        <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full mr-2">#Young Adult</span>
                        <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">#Identity</span>
                    </div>
                </div>


{/* Book details presented in a table layout */}
<div className="mt-4 w-full lg:w-2/4 ">
    <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg shadow-md">
        <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
                <th className="text-right p-4 font-bold text-gray-800">Detail</th>
                <th className="text-right p-4 font-bold text-gray-800">Info</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">Number of Pages:</td>
                <td className="p-4 text-gray-700 text-left">281</td>
            </tr>
            <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">Publisher:</td>
                <td className="p-4 text-gray-700 text-left">J.B Lippincott & Co.</td>
            </tr>
            <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">Year of Publishing:</td>
                <td className="p-4 text-gray-700 text-left">1960</td>
            </tr>
            <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">Rating:</td>
                <td className="p-4 text-gray-700 text-left">4.8</td>
            </tr>
        </tbody>
    </table>
</div>





                <div className="mt-4 flex flex-col md:flex-row">
                    <button className="bg-black text-white px-4 py-2 rounded mr-2 mb-2 md:mb-0">Read</button>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
