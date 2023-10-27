const VacancyCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-yellow-50 hover:bg-yellow-200 w-80 rounded-3xl">
      <h1 className="text-lg font-bold text-left">{title}</h1>
      <div className="flex flex-col items-center gap-2">
        <ul className="list-disc">
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>

        <button className="px-4 py-2 rounded-full bg-black text-white ">
          See Details
        </button>
      </div>
    </div>
  );
};

export default VacancyCard;
