import { Combobox } from "@headlessui/react";
import { useContext, useState } from "react";
import AuctionContext from "../Providers/Auctions/AuctionContext";
import { useNavigate } from 'react-router-dom';


function FrameSearch() {
    const navigate = useNavigate();

    const { auctions } = useContext(AuctionContext);
    const [ query, setQuery ] = useState('');

    const filteredAuctions = query ?
        auctions.filter(auction => auction.title.toLowerCase().includes(query.toLowerCase()))
        : [];

    return (
        <Combobox as={"div"} className="flex-1 my-1 relative" onChange={(auction) => {
                navigate(`/auctions/${auction.ID}`);
            }}>
            <div className="flex items-center border-1 border-gray-700">
                <Combobox.Input 
                    className="w-full h-8 inset-0 text-sm border-b-2 border-gray-700 bg-gray-700 text-white-50 placeholder-white-200 focus:ring-0 focus:border-gray-700 focus:border-b-yellow-300 focus:bg-gray-800"
                    placeholder='Search auctions and products'
                    onChange={(event) => {
                        setQuery(event.target.value);
                    }}/>
            </div>
            {filteredAuctions.length > 0 && (
                <Combobox.Options className="w-full max-h-40 overflow-y-auto origin-top-right absolute right-0 top-9 p-1 bg-gray-700 ">
                    {filteredAuctions.map(auction => (
                        <>
                            <Combobox.Option key={auction.ID} value={auction} className="w-100 hover:rounded-lg hover:bg-gray-600 p-3">{auction.title}</Combobox.Option>
                        </>
                    ))}
                </Combobox.Options>
            )}
        </Combobox>
    )
}

export default FrameSearch;