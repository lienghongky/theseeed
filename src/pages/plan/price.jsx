import React from 'react'
import '../../assets/styles/utility.css'

class Price extends React.Component {
    
    render() { 
        const plans = [
            {
                id:1,
                numberOfLession:1,
                price:'Free',
                expiredIn:'7 Days',
                slot:'1'
            },
            {
                id:1,
                numberOfLession:10,
                price:'$35',
                expiredIn:'1 Month',
                slot:'10'
            },
            {
                id:1,
                numberOfLession:50,
                price:'$101',
                expiredIn:'2 Months',
                slot:'30'
            },
            {
                id:1,
                numberOfLession:100,
                price:'$343',
                expiredIn:'6 Months',
                slot:'100'
            },
            {
                id:1,
                numberOfLession:200,
                price:'$686',
                expiredIn:'1 Years',
                slot:'200'
            }
            
        ];
        return ( 
            <div className="flex flex-wrap justify-center">
                    {
                        plans.map((item,index)=>(
                            <div className="w-64 sm:w-48  p-2   floating-sm" key={index}>
                                <div className={`rounded-lg shadow-xl text-center transition duration-500  transform hover:scale-105 hover:shadow-xl bg-gradient-to-br  ${index == 0?'from-pink-600 to-red-500':'from-purple-600 to-blue-500'} ` }>
                                    <h4 className="text-white text-lg font-bold pt-6">{item.numberOfLession} Lessions</h4>
                                    <h1 className="text-white text-4xl font-bold py-4">{item.price}</h1>
                                    <div className="flex justify-center">
                                        <ul className="text-left font-medium text-gray-300 p-2 list-disc">
                                            <li><p className="text-md">{item.expiredIn}</p></li>
                                            <li><p className="text-md">{item.slot} Time Slots</p></li>
                                        </ul>
                                    </div>
                                    <button className="p-2 px-8 my-8 font-bold shadow-lg transition duration-500 transform hover:scale-105 text-white rounded-lg bg-blue-400">BUY</button>
                                </div>
                            </div>
                        ))
                    }
                    
            </div>
         );
    }
}
 
export default Price;