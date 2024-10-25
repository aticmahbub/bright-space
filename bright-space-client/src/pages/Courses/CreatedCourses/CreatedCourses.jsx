import useAuth from "../../../hooks/useAuth";
import useLoadAllCourses from "../../../hooks/useLoadAllCourses";


const CreatedCourses = () => {

  const {user} = useAuth()
  const [courses] = useLoadAllCourses()
  console.log(courses?.courseCreatedUserEmail)

  const createdCourses = courses.filter(course => course?.courseInstructorEmail=== user?.email)
console.log(createdCourses)
  return (
    <div className="max-w-[1250px] mx-auto">
      {
        createdCourses.map(item =>(
          <div key={item._id}>
              <h2>{item.title}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default CreatedCourses;
