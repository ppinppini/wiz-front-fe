import MainBottomCard from "../../components/main/MainBottomCard";
import MainHeader from "../../components/main/MainHeader";
import MainHighlightsVideo from "../../components/main/MainHighlightsVideo";
import MainPageGameSchedule from "../../components/main/MainPageGameSchedule";
import Slide from "../../components/Slide";

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainPageGameSchedule />
      <MainHighlightsVideo />
      <Slide />
      <MainBottomCard />
    </>
  );
};
export default Main;
