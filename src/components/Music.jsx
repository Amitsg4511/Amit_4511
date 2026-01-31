import { useEffect, useState } from "react";
import MusicOffNight from "../assets/svg/music-off-night.svg";
import MusicOffMorning from "../assets/svg/music-off-morning.svg";
import MusicOnNight from "../assets/svg/music-on-night.svg";
import MusicOnMorning from "../assets/svg/music-on-morning.svg";
import useBackgroundMusic from "../utils/BackgroundMusic";
import mountainMusic from "../assets/music/mountains.mp3";

function Music({ isDay }) {
  const [isMusicOn, setMusicState] = useState(true);
  const music = useBackgroundMusic(mountainMusic);
  function handleMusicState() {
    setMusicState((prevMusicState) => !prevMusicState);
  }

  useEffect(() => {
    if (isMusicOn) {
      music.current.play();
    } else {
      music.current.pause();
    }
  }, [isMusicOn]);
  return (
    <div
      className={`
        p-2
        rounded-2xl
        ${isDay ? "bg-orange-500" : "bg-gray-700"}
        backdrop-blur-lg
        shadow-xl shadow-black/40
        //Need to fix this to make this hover effect touchable friendly
        md:hover:-rotate-14 md:hover:scale-125 
        transition-transform duration-500 
      `}
    >
      <button
        onClick={handleMusicState}
        className={`
          p-2
          rounded-xl
          ${isDay ? "bg-orange-300" : "bg-zinc-900"}
          hover:transition-all duration-300 cursor-pointer
        `}
      >
        {isMusicOn ? (
          <img
            src={isDay ? MusicOnMorning : MusicOnNight}
            alt="Music On Off Toggle"
            className="
                w-14 h-14"
          />
        ) : (
          <img
            src={isDay ? MusicOffMorning : MusicOffNight}
            alt="Music On Off Toggle"
            className="
                w-14 h-14"
          />
        )}
      </button>
    </div>
  );
}

export default Music;
