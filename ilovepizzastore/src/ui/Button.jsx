import { Link } from "react-router-dom";

export default function Button({ children, disable, to, type, onClick }) {
  const base =
    "inline-block bg-yellow-400 font-semibold uppercase text-stone-800 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 text-xs md:px-5 md:py-2.5",
    round: base + " px-2.5 py-1 text-sm md:px-3.5 md:py-2",
    secondary:
      "text-sm inline-block border-2 border-stone-300 font-semibold uppercase text-stone-400 tracking-wide rounded-full hover:bg-stone-300 focus:text-stone-800 hover:text-stone-800 transition-colors duration-300" +
      "focus:ring focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 focus:bg-stone-300 focus:outline-none md:px6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disable}
      onClick={onClick ? onClick : null}
      className={styles[type]}
    >
      {children}
    </button>
  );
}
