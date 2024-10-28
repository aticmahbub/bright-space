import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const ViewBlog = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((datas) => {
                setBlogData(datas);
                setLoading(false); // Set loading to false after fetching data
            })
            .catch((error) => {
                console.error("Error fetching the data:", error);
                setError(error.message); // Set error message
                setLoading(false); // Set loading to false even if there is an error
            });
    }, []);

    const blogInf = blogData?.find(data => data.id === Number(id)); // Convert id to number

    if (loading) {
        return <div className="container mx-auto">Loading...</div>; // Show loading message
    }

    if (error) {
        return <div className="container mx-auto">Error: {error}</div>; // Show error message
    }

    if (!blogInf) {
        return <div className="container mx-auto">Blog not found.</div>; // Show not found message
    }

    return (
        <div className="container mx-auto mb-20 mt-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 px-3">
                <div className="lg:col-span-2 py-10 p-3 md:p-10 shadow-xl rounded-xl">

                    <div className="h-52 md:h-[500px] w-full bg-no-repeat bg-cover bg-center rounded-xl" style={
                        { backgroundImage: `url(${blogInf.image})` }
                    }></div>
                    <h1 className="text-2xl md:text-6xl font-bold mt-5">{blogInf.title}</h1>
                    <p className="mt-2 text-gray-500 italic mb-12">{blogInf.time}</p>
                    <ReactMarkdown className="text-base md:text-lg md:text-justify">
                        {blogInf.mainDescription}
                    </ReactMarkdown>
                </div>
                {/* Others Routs */}
                <div></div>
            </div>
        </div>
    );
};

export default ViewBlog;
