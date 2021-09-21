import React from 'react';
import { getAllDivisibleNumbers, getDynamicArrayOfGivenSize } from '../../utils'

const ContentApp = () => {
    const [activeIndexes, setActiveIndexes] = React.useState([]);

    const onClickHandler = (index) => {
        const getAllIndexes = getAllDivisibleNumbers(index+1); 
        setActiveIndexes(getAllIndexes);
    }

    return (
        <section>
            <ul className="list">
                {
                    getDynamicArrayOfGivenSize().map(item =>{
                        const className = activeIndexes.includes(item+1) ? 'border border-success list-item active' : 'border list-item'; 
                        return (
                            <li 
                                id={`list-item-${item}`}
                                key={`list-item-${item}`}
                                onClick={() => onClickHandler(item)}
                                className={className}
                            >
                                {item + 1}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ContentApp