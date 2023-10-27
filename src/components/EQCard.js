const EQCard = ({ emoji, title, description, color }) => {
  const bgcolor = "bg-" + color + "-100";
  return (
    <>
      <div
        className={`${bgcolor} bg-violet-100 px-8 py-6 min-w-[300px] w-[300px] rounded-3xl`}
      >
        <div>
          <div className="pb-4">{emoji}</div>
          <div>
            <p className="text-base font-bold">{title}</p>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EQCard;
