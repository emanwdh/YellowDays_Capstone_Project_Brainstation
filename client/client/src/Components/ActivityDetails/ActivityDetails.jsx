import './ActivityDetails.scss';
import { useEffect } from 'react';

export default function ActivityDetails() {
    return (
        <>
        <div className='activity-details'>
            <div className='activity-details__price'>
                <h2 className='activity-details__free'></h2>
            </div>
            <div className='activity-details__info'>
                <h3 className='activity-details__interest'></h3>
                <p className='activity-details__created'></p>
            </div>
            <h2 className='activity-details__name'></h2>
            <h3 className='activity-details__type'></h3>




        </div>
        </>
    )
}