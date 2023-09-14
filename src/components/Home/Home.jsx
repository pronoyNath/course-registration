/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(resp => resp.json())
            .then(data => setCourses(data))
    }, []);

    const handleSelectCourse =  (course)=>{
        const newCourses = [...selectedCourses,course];
        setSelectedCourses(newCourses);
    }

    return (
        <div className='flex gap-5'>
            <div className='flex-1 grid grid-cols-3 gap-5'>
            {
                courses.map(course => (
                    <div key={course.id} className="card w-72 bg-base-100 shadow-2xl">
                        <figure className="px-5 pt-5">
                            <img src={course.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-sm">{course.title}</h2>
                            <p className='text-sm text-start'>{course.description}</p>
                            <div className='flex gap-6 space-y-1 items-center'>
                                <p className='font-semibold'><span><i className="fa-solid fa-dollar-sign"></i></span> Price: {course.price}</p>
                                <p className='font-semibold'><span><i className="fa-solid fa-book-open"></i></span> Credit: {course.credit_hr}hr</p>
                            </div>
                            <div className="card-actions">
                                <button onClick={()=>handleSelectCourse(course)} className="btn btn-primary w-full">Select</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* selected courses */}
        <div className='w-72'>
            <Cart
            selectedCourses={selectedCourses}
            ></Cart>
        </div>

        </div>
    );
};

export default Home;