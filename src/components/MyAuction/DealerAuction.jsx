
import './DealerAuction.css';
import AuctionInfo from './AuctionInfo/AuctionInfo'

export default function DealerAuction (props) {
  if(!props.dealer){
    return(<></>);
  }

  const auctions = props.auction.filter((auc)=> auc.dealer_id==props.dealer.id);

  const completed = auctions.filter((auc) => (auc.selected==true))
  return(
  <div className='pastAuctionTotal'>
    <div className='pastAuctionHeader'>
    <h2>My Auction</h2>
    <p>Completed {completed.length} auctions</p>
  </div>
  <AuctionInfo dealer = {props.dealer} vehicle={props.vehicle} auction={auctions} done={false}/>
</div>);
}
  