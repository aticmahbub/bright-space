import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* Nav */}
                <Outlet/>
            {/* footer     */}
        </div>
    );
};

export default Main;