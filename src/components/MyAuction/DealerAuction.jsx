
import './DealerAuction.css';
import AuctionInfo from './AuctionInfo/AuctionInfo'

export default function DealerAuction (props) {
  if(!props.state.dealers){
    return(<></>);
  }
  const completed = props.state.dealers.transactions.length;
  return(
  <div className='pastAuctionTotal'>
    <div className='pastAuctionHeader'>
    <h2>My Auction</h2>
    <p>Completed {completed} auctions</p>
  </div>
  <AuctionInfo dealer = {props.dealer} vehicle={props.vehicle} transaction={props.transaction}/>
</div>);
}
  