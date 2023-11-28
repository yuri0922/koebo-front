export const Header = () => {
  return (
    <div className="sticky left-0 top-0 h-32 w-full bg-[#FFB03B] shadow-lg">
      <img src="icons/left-arrow.svg" alt="" className="absolute left-4 top-12 h-10 w-10 cursor-pointer" />
      <img src="icons/menu.svg" alt="" className="absolute right-4 top-9 h-16 w-16 cursor-pointer" />
      <p className="absolute left-20 top-6 text-xl font-bold">こえをあつめる</p>
      <p className="absolute left-20 top-11 text-6xl font-bold">koebo</p>
    </div>
  );
};
