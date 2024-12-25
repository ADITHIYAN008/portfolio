const InfoFrame = ({ img, title }) => {
  return (
    <div className=" w-[90vw] md:w-[42vw] lg:w-[500px] p-2 bg-gray-200/5 rounded-3xl border border-gray-300/40">
      <img src={img} alt={title} className="" />
    </div>
  );
};

export default InfoFrame;
