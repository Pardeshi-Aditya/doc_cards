import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:"1.1"}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}    className="relative flex-shrink-0 w-56 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 m-1 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-light leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-2 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <MdFileDownload size="1em" color="#fff" />
            ) : (
              <IoMdClose size="1em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
            <button className="w-full" onClick={() => alert("Hey there")}>
          <div className={`tag w-full p-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
            </button>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
