import PropTypes from 'prop-types';

// import { list } from "postcss";

const Cart = ({selectedCourse, creditHour}) => {
    let count = 1 ;

    const remainingCreditHour = 20 - creditHour ;
    return (
        <div className="w-[310px] p-6 rounded-xl bg-[#FFF]">
            <h2 className="text-[#2F80ED] pb-4 text-lg font-bold border-b border-[#1C1B1B33]">Credit Hour Remaining {remainingCreditHour} hr</h2>

            <h2 className="mt-4 mb-5 text-xl text-[#1C1B1B] font-bold ">Course Name</h2>

            <ol className="border-b pb-6 border-[#1C1B1B33] text-[#1C1B1B99] text-base font-normal">
          
       <div className='space-y-2'>
       {
              selectedCourse.map(item => <li key={item.id}> {count++}  {item.title} </li>)
          }
       </div>

            </ol>

            <p className="pt-4 border-b border-[#1C1B1B33] pb-4 text-[#1C1B1BCC] text-base">
            Total Credit Hour : {creditHour}
            </p>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse : PropTypes.array.isRequired,
    creditHour : PropTypes.number.isRequired
}

export default Cart;