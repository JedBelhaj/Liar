import Copy from "../assets/svgs/copy.svg";
import Exit from "../assets/svgs/exit.svg";
import Info from "../assets/svgs/info.svg";
import Moon from "../assets/svgs/moon.svg";
import Sun from "../assets/svgs/sun.svg";

const Icons = {
  copy: Copy,
  exit: Exit,
  info: Info,
  moon: Moon,
  sun: Sun,
};

function Icon({ path, ...props }) {
  const SvgIcon = Icons[path];
  if (!SvgIcon) return null;

  return (
    <SvgIcon className="fill-slate-600 h-8 w-8 lg:h-6 lg:w-6 hover:scale-125 hover:fill-slate-900 transition-all duration-200 ease-in-out cursor-pointer" />
  );
}

export default Icon;
