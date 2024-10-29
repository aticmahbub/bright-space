import ReactPlayer from 'react-player';

const ViewMyClasses = () => {
    return (
        <div className='h-[240px] md:h-[400px] lg:h-[600px] px-3 lg:pr-3'>
            <div className='h-full w-full inline-block rounded-xl'>
                <ReactPlayer
                    url='https://vimeo.com/243579287'
                    controls={true}
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    );
};

export default ViewMyClasses;