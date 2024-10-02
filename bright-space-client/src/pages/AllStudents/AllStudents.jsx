import useLoadAllUsers from '../../hooks/useLoadAllUsers';

const AllStudents = () => {
    const [allUsers] =useLoadAllUsers()
    const allStudents = allUsers.filter(item => item.role ==='student')
    console.log(allStudents);
    return (
        <div>
            {
                allStudents.map((item,idx) =>{
                    return <div key={idx}>
                        {item.name}
                    </div>
                })
            }
        </div>
    );
};

export default AllStudents;