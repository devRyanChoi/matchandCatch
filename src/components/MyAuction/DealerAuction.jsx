
import './DealerAuction.css';
import AuctionInfo from './AuctionInfo/AuctionInfo'

export default function DealerAuction (props) {
  if(!props.dealer){
    return(<></>);
  }

  const completed = props.dealer.transactions.length;
  const auctions = props.auction.filter((auc)=> auc.dealer_id==props.dealer.id);

  return(
  <div className='pastAuctionTotal'>
    <div className='pastAuctionHeader'>
    <h2>My Auction</h2>
    <p>Completed {completed} auctions</p>
  </div>
  <AuctionInfo dealer = {props.dealer} vehicle={props.vehicle} auction={auctions} done={false}/>
  <AuctionInfo dealer = {props.dealer} vehicle={props.vehicle} auction={props.transaction} done={true}/>
</div>);
}
  