import PropTypes from 'prop-types';

import { PiCurrencyDollarThin } from 'react-icons/pi';

const Card = ({item, handleClickButton}) => {

    const {cover_img, title, description, price,credit_hour} = item ;

    return (
        <div className='p-4 bg-[#FFF] rounded-xl'>
            <img className='mb-4 w-full' src={cover_img}></img>
            <h3 className="mb-3 text-xl font-semibold text-[#1C1B1B]">
                {title}
            </h3>
            <p className='text-sm mb-5 text-[#1C1B1B99] font-normal'>
                {description}
            </p>

            <div className='flex gap-3 items-center mb-6'>

            <button className='text-2xl text-[#1C1B1B]'> <PiCurrencyDollarThin></PiCurrencyDollarThin> </button>
            <span className='mr-1 text-base font-medium text-[#1C1B1B99]'>Price :{price}</span>
         <img src="https://i.ibb.co/5hcC0Y1/Frame.png"></img>
         <span className='text-[#1C1B1B99] text-base font-medium'>Credit : {credit_hour}hr</span>
            </div>

        
          <button onClick={() => handleClickButton(item)} className='rounded-lg px-48 py-2 text-[#FFF] font-semibold text-lg bg-[#2F80ED]'>Select</button>
          
        
            
        </div>
    );
};

Card.propTypes = {
    item : PropTypes.object.isRequired,
    handleClickButton : PropTypes.func.isRequired
}

export default Card;