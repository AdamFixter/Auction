import { useContext } from "react";
import AuctionCard from "../../components/Auction/AuctionCard"
import AuctionContext from "../../components/Providers/Auctions/AuctionContext";


export default function Auctions() {
    const { auctions } = useContext(AuctionContext);

    return (
        <>
            <div className="flex flex-wrap p-3 mx-5 md:mx-16 2xl:mx-60">
                {auctions.map(auction => (
                    <>
                        <AuctionCard key={auction.ID} data={auction}/>
                    </>
                ))}
            </div>
        </>
    )
}