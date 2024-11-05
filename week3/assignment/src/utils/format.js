export const formatTime = (timeInMillis) => {
  const seconds = Math.floor((timeInMillis % 60000) / 1000);
  const milliseconds = (timeInMillis % 1000)
    .toString()
    .padStart(3, "0")
    .slice(0, 2);

  const formattedTime = `${seconds < 10 ? "0" : ""}${seconds}:${milliseconds}`;
  return formattedTime;
};

export const formatDate = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // 12시간제 변환

  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}. ${ampm} ${formattedHours}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;

  return formattedDate;
};

export const formatRankingData = (play) => {
  const parts = play.split(":");
  const seconds =
    parts.length === 2
      ? parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10)
      : parseInt(parts[0], 10);
  return seconds;
};
