"use client";

const Navbar = () => {
  return (
    <div className="bg-white text-black gap-2 flex justify-between items-center py-2 px-16 w-full z-30 fixed">
      <div>
        <img
          className="w-10 h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Circle_Ring_free_icon.svg/512px-Circle_Ring_free_icon.svg.png"
        />
      </div>
      <div className="flex gap-4 text-sm">
        <p>Emotions</p>
        <p>Manifesto</p>
        <p>Self-awareness test</p>
        <p>Work with Us</p>
      </div>
      <div>
        <button className="py-2 px-4 text-sm bg-black rounded-3xl text-white">
          Download app
        </button>
      </div>
    </div>
  );
};

export default Navbar;
