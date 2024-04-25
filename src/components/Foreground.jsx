import React from "react";
import Card from "./Card";

function Foreground() {
    const ref = React.useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "44mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5 ">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
