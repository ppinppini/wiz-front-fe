import MainBottomCard from "../../components/main/MainBottomCard";
import MainHeader from "../../components/main/MainHeader";
import MainHighlightsVideo from "../../components/main/MainHighlightsVideo";
import MainPageGameSchedule from "../../components/main/MainPageGameSchedule";
import MainTopCard from "../../components/main/MainTopCard";
import Slide from "../../components/Slide";

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainPageGameSchedule />
      <MainTopCard />
      <MainHighlightsVideo />
      <Slide />
      <MainBottomCard />
    </>
  );
};
export default Main;
