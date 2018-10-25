// just set the calendarId to 1!
const s = [];
const getRandom = (para, ...others) => {
  let extra = 0;
  if (others.length > 0) extra = others[0];
  return Math.floor(Math.random() * para + extra);
};
const untilLaterIsBigger = (former, later, para) => {
  while (former > later) {
    later = getRandom(para);
  }
  return later;
};
const untilLaterIsBiggerOrEqual = (former, later) => {
  let result;
  if (former == later) result = former;
  else result = 11;
  return result;
};
const formatTime = time => (time < 10 ? (time = `0${time}`) : time);
const createRandomDate = (d, t, m) => `2018-${m}-${d}T09:30:00+${t}:00`;
const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const dummyText =
  "눈에 뜨고, 가치를 인도하겠다는 그들에게 속잎나고, 인생을 온갖 천고에 말이다. 착목한는 목숨을 풍부하게 청춘의 구하지 봄바람을 꽃이 그들의 운다. 천지는 청춘의 착목한는 불어 위하여서. 못할 그러므로 있는 청춘의 창공에 너의 안고, 우리 부패뿐이다. 만물은 사라지지 있는 끓는 열락의 아름다우냐? 뼈 넣는 위하여서 무엇을 눈이 할지라도 만천하의 갑 사람은 약동하다. 하는 찾아다녀도, 그들의 위하여 같은 것이다. 꽃이 이 얼음과 작고 보라. 피가 살았으며, 품었기 방지하는 것이다.보라, 무엇을 대중을 맺어, 풍부하게 것이다.";
for (let i = 0; i < 15; i++) {
  let textStart = (i * 4) % dummyText.length;
  let textEnd = (i * 4 + 10) % dummyText.length;
  let dayRandom = getRandom(30);
  let dayRandom2 = getRandom(30);
  let timeRandom = formatTime(getRandom(24));
  let timeRandom2 = formatTime(getRandom(24));
  let monthRandom = getRandom(2, 10);
  let monthRandom2 = getRandom(2, 10);

  let biggerRandomDay = untilLaterIsBigger(dayRandom, dayRandom2, 30);
  let biggerRandomTime = untilLaterIsBigger(timeRandom, timeRandom2, 24);
  let biggerRandomMonth = untilLaterIsBiggerOrEqual(monthRandom, monthRandom2);

  let schedule = {
    id: new String(i + 1),
    calendarId: "1",
    title: dummyText.substring(textStart, textEnd),
    category: "time",
    dueDateClass: "",
    start: createRandomDate(dayRandom, timeRandom, monthRandom),
    end: createRandomDate(biggerRandomDay, biggerRandomTime, biggerRandomMonth),
    bgColor: getRandomColor()
  };
  s.push(schedule);
}

const sampleSchedules = {
  schedules: [...s]
};
export default sampleSchedules;
