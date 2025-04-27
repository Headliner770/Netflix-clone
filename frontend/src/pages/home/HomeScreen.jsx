import Navbar from "../../components/Navbar";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
import { Info, Play } from "lucide-react";
import { useAuthStore } from "../../store/authUser";

const HomeScreen = () => {
  const { trendingContent } = useGetTrendingContent();

  return (
    <>
      <div className="relative h-screen text-white bg-black">
        <Navbar />

        <img src="/extraction.png" alt="Hero img" className="absolute t" />
      </div>
      ;
    </>
  );
};

export default HomeScreen;
