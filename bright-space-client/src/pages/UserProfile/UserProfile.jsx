import useRole from "../../hooks/useRole";
import TeacherProfile from "../TeacherProfile/TeacherProfile";

const UserProfile = () => {
    const user = useRole()
    return (

        <div>
            {
                user === 'student' && <>
                    <TeacherProfile />
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