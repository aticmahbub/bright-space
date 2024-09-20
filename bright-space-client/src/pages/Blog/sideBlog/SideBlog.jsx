const SideBlog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
      {/* left side  */}
      <div className="space-y-8 p-4 lg:p-0">
        <img
          className="object-cover w-full rounded-md"
          src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <p className="font-semibold text-xl">
            Training camp preview: Rookies under the radar entering Qualifiers
          </p>
          <div>
            <div className="py-4">
              <div className="flex gap-5">
                <img
                  alt=""
                  className="w-16 h-16  object-cover rounded-lg bg-gray-400"
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                  }}
                />
                <div className="flex items-center gap-2 lg:gap-10">
                  <p className="text-black font-semibold">By Gabie Sheber</p>
                  <p className="text-gray-400">May 22, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col lg:flex-row items-center gap-5 rounded-md shadow-md p-4 lg:p-0">
          <div className="w-full lg:w-60 h-40 lg:h-full overflow-hidden flex-shrink-0">
            <img
              className="object-cover w-full h-full rounded-md"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* text section */}
          <div className="flex flex-col gap-8">
            <p className="font-bold text-lg">Blues must treat Qualifiers like playoffs, Allen says</p>
            <div className="flex items-center justify-between lg:justify-normal gap-5">
              <p className="text-gray-600">
                By <span>Mike Fink</span>
              </p>
              <p className="text-gray-400">Mar 28, 2020</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 rounded-md shadow-md p-4 lg:p-0">
          <div className="w-full lg:w-60 h-40 lg:h-full overflow-hidden flex-shrink-0">
            <img
              className="object-cover w-full h-full rounded-md"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* text section */}
          <div className="flex flex-col gap-8">
            <p className="font-bold text-lg">Blues must treat Qualifiers like playoffs, Allen says</p>
            <div className="flex items-center justify-between lg:justify-normal gap-5">
              <p className="text-gray-600">
                By <span>Mike Fink</span>
              </p>
              <p className="text-gray-400">Mar 28, 2020</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 rounded-md shadow-md p-4 lg:p-0">
          <div className="w-full lg:w-60 h-40 lg:h-full overflow-hidden flex-shrink-0">
            <img
              className="object-cover w-full h-full rounded-md"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* text section */}
          <div className="flex flex-col gap-8">
            <p className="font-bold text-lg">Blues must treat Qualifiers like playoffs, Allen says</p>
            <div className="flex items-center justify-between lg:justify-normal gap-5">
              <p className="text-gray-600">
                By <span>Mike Fink</span>
              </p>
              <p className="text-gray-400">Mar 28, 2020</p>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default SideBlog;
