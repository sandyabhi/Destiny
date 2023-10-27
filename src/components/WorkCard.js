const WorkCard = ({ title, description }) => {
  return (
    <div className="p-8 bg-white rounded-2xl w-[350px]">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
