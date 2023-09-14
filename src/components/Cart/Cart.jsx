/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourses,totalCredit,remainingCredit,totalPrices}) => {
    return (
        <div className='bg-base-100 shadow-2xl p-5 rounded-xl space-y-3'>
            <h2 className='font-semibold text-[#2F80ED]'>Credit Hour Remaining {remainingCredit>0 ? remainingCredit : 20} hr</h2>
            <hr />
            <h3 className='text-2xl font-bold pb-2'>Course Name:</h3>
            <ul className='list-decimal pl-5'>
                {
                    selectedCourses.map(course=>(
                        <li key={course.id}> {course.title}</li>
                    ))
                }
            </ul>
            <hr />
            <h2 className='font-semibold'>Total Credit Hour : {totalCredit>0 ? totalCredit : '00'}</h2>
            <hr />
            <h2 className='font-semibold'>Total Price : {totalPrices>0 ? totalPrices : '00'} USD</h2>
        </div>
    );
};

export default Cart;