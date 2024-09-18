import useRole from "../../hooks/useRole";
import StudentProfile from "../StudentProfile/StudentProfile";
import TeacherProfile from "../TeacherProfile/TeacherProfile";

const UserProfile = () => {
    const user = useRole()
    return (

        <div>
            {
                user === 'student' && <>
                    <StudentProfile />
                </>
            }
            {
                user === 'teacher' && <>
                    <TeacherProfile />
                </>
            }
        </div>
    );
};

export default UserProfile;