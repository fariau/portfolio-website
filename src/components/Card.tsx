
import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="border border-red-300 rounded-lg w-[300px] sm:w-[350px] h-[450px] flex flex-col"
      data-aos="zoom-in-up"
    >
      {/* Image Section */}
      <div className="w-full h-[200px] relative">
        <Image
          className="object-cover rounded-t-lg"
          src={img}
          layout="fill"
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4 flex flex-col justify-between flex-grow">
        {/* Title */}
        <div className="text-4xl font-extralight text-white">{title}</div>

        {/* Description */}
        <div className="text-gray-400">{desc}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <span
              className='tags' key={el}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;