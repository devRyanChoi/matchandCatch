
import './PastAuction.css';
import PastAuctionInfo from './PastAuctionInfo/PastAuctionInfo'
export default function PastAuction (props) {
  if(!props.state.dealers[0]){
    return(<></>);
  }
  return(
  <div className='pastAuctionTotal'>
    <div className='pastAuctionHeader'>
    <h2>Past Auction</h2>
    {/* <p>Completed {completed} auctions</p> */}
  </div>
  <PastAuctionInfo dealer = {props.state.dealers} vehicle={props.state.vehicles} auctions={props.state.auctions} image={props.state.images}/>
</div>);
}
  