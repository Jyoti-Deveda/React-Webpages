import {useState, React}  from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function ClickHandler(){
        if(likedCourses.includes(course.id)){
            //that means already liked
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }else{
            //phle se liked nhi h
            //to use likedCourses m add karna padega
            if(likedCourses.length == 0){
                setLikedCourses([course.id]);
            }else{
                //non-empty
                setLikedCourses((prev) =>[...prev, course.id]);
            }
            console.log(likedCourses);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
            <div className='relative '>
                <img src={course.image.url}></img>
                <div className='w-[40px] h-[40px] absolute bg-white rounded-full flex justify-center items-center right-2 -bottom-5'>
                    <button onClick={ClickHandler} className='btn'>
                        {
                            likedCourses.includes(course.id) ? 
                            (<FcLike fontSize='1.75rem'/>):
                            (<FcLikePlaceholder fontSize='1.75rem'/>)
                        }
                    </button>
                </div>
            </div>
            

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ?
                        (course.description.substring(0, 100)) + "...":
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card;