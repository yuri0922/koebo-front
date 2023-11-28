export const Header = () => {
  return (
    <div className="sticky left-0 top-0 h-16 w-full bg-[#FFB03B] shadow-lg">
      <img src="icons/left-arrow.svg" alt="" className="absolute left-2 top-6 h-5 w-5 cursor-pointer" />
      <img src="icons/menu.svg" alt="" className="absolute right-2 top-4 h-8 w-8 cursor-pointer" />
      <p className="absolute left-10 top-3 text-sm font-bold">こえをあつめる</p>
      <p className="absolute left-10 top-6 text-3xl font-bold">koebo</p>
    </div>
  );
};
