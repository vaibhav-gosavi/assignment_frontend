const Navbar = () => {
  return (
    <nav className="flex justify-center items-center h-[68px] w-full p-4 bg-white shadow-lg">
      <div className="flex items-center justify-center w-1/3 h-[68px]">
  <img 
    src = "/public/company_icon.png"
    alt="HyggeX" 
    className="h-[120%]"
  />
</div>
      <ul className="flex justify-evenly font-[2px]  w-1/3 text-[#06286e] h-[48px] ">
        <li className="w-[59px] h-[48px] p-[12px_8px] font-[Roboto] gap-[8px] ">
          <a href="#">Learn</a>
        </li>
        <li className="w-[59px] h-[48px] p-[12px_8px] gap-[8px] font-[Roboto] ">
          <a href="#">Practice</a>
        </li>
        <li className="w-[59px] h-[48px] p-[12px_8px] font-[Roboto] gap-[8px] ">
          <a href="#">Assessments</a>
        </li>
      </ul>

      <ul className="flex justify-center  gap-[16px] h-full w-1/3">
        <li>
          <button className="w-[92px] h-[37px] px-sm py-l border-2 border-[#06286e] rounded gap-s  text-[#06286e]">
            Login
          </button>
        </li>
        <li>
          <button className="bg-[#06286E] w-[107px] h-[37px]  gap-s text-white rounded-[6px]">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
