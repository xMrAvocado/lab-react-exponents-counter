const Exponent = (props) => (
    <div className="exponent-counter-container">
     <p className="exponent-label">{props.count}n</p>
     <p className="exponent-result">{props.string} = <span className="total">{Math.pow(props.count, props.exponent)}</span></p>
   </div>
 );
 
 export default Exponent;