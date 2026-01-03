import Night from "../assets/svg/night.svg";
import Morning from "../assets/svg/morning.svg";

function Theme({ setDayNightState, isDay }) {
  console.log("theme");
  function handleDayNightState() {
    setDayNightState((prevDayState) => !prevDayState);
  }
  return (
    <div
      className={`
          p-2
          rounded-2xl
          ${isDay ? "bg-orange-500" : "bg-gray-700"}
          backdrop-blur-lg
          shadow-xl shadow-black/40
          hover:rotate-3 hover:scale-125 
          transition-transform duration-300
        `}
    >
      <button
        onClick={handleDayNightState}
        className={`
            p-2
            rounded-xl
            ${isDay ? "bg-orange-300" : "bg-zinc-900"}
            hover:transition-all duration-300 cursor-pointer
          `}
      >
        <img
          src={isDay ? Morning : Night}
          alt="Day Night Toggle"
          className="
                  w-14 h-14"
        />
      </button>
    </div>
  );
}

export default Theme;
