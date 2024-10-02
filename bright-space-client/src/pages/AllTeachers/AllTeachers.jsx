import useLoadAllUsers from "../../hooks/useLoadAllUsers";

const AllTeachers = () => {
    const [allUsers] =useLoadAllUsers()
    const allTeachers = allUsers.filter(item => item.role ==='teacher')
    console.log(allTeachers);
    return (
        <div>
            {
                allTeachers.map((item,idx) =>{
                    return <div key={idx}>
                        {item.name}
                    </div>
                })
            }
        </div>
    );
};

export default AllTeachers;