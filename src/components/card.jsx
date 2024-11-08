import React, { forwardRef } from 'react';

const Card = forwardRef(({ title, description, urlToImg, url }, ref) => {
  return (
    <div className="flex justify-center flex-col items-center bg-gray-200 shadow-lg transform transition-transform hover:scale-105 rounded-md relative max-h-[500px]">
      <div className="w-full h-[250px] flex justify-center items-center overflow-hidden">
        <img
          src={urlToImg}
          className="w-full h-full object-cover object-center"
          alt={title || 'Article image'}
        />
      </div>

      <span className="w-[30%] h-0.5 bg-slate-500 justify-center flex my-2.5"></span>

      <div ref={ref} id="title" className="text-center text-lg font-semibold p-2">
        {title}
      </div>

      <span className="w-[30%] h-[.115rem] bg-slate-500 justify-center flex my-2.5"></span>

      <div id="description" className="text-center text-sm text-gray-700 p-2">
        {description || `No additional information is available`}
      </div>

      <span className="w-[30%] h-[.115rem] bg-slate-500 justify-center flex mt-2.5 mb-4"></span>

      <a
        href={url}
        className="p-2 bg-black text-white rounded-lg hover:bg-slate-500 hover:ring-4 hover:ring-slate-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  );
});

export default Card;
