
import './PastAuction.css';
import PastAuctionInfo from './PastAuctionInfo/PastAuctionInfo'
export default function PastAuction (props) {
  if(!props.state.dealers){
    return(<></>);
  }
  //const completed = dealer.transactions.length;
  return(
  <div className='pastAuctionTotal'>
    <div className='pastAuctionHeader'>
    <h2>Past Auction</h2>
    {/* <p>Completed {completed} auctions</p> */}
  </div>
  <PastAuctionInfo dealer = {props.state.dealers} vehicle={props.state.vehicles} transaction={props.state.transactions}/>
</div>);
}
  