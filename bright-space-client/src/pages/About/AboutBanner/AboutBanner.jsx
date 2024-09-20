import cloud_1 from '../../../assets/About Image/Cloud.png'

const AboutBanner = () => {
    return (
        <div className="font-english_font_family md:py-16 lg:py-32 bg-about_banner_background_color relative hidden md:block">
            <img src={cloud_1} alt="" className='absolute md:-bottom-14 lg:-bottom-20 w-full'/>
            <div className="md:w-[350px] lg:w-[562px] h-[3px] bg-horizontal_line_color mx-auto"></div>
            <div className="text-primary_color_1 text-center">
                <h1 className="md:text-[48px] lg:text-[96px] font-semibold tracking-[40px] translate-x-4 inline-block">ABOUT</h1>
                <p className="md:tracking-[9px] lg:tracking-[18px] font-semibold -mt-3">
                    EDUCATION SOLUTION
                </p>
            </div>
            <div className="md:w-[350px] lg:w-[562px] h-[3px] bg-horizontal_line_color mx-auto mt-6"></div>
        </div>
    );
};

export default AboutBanner;