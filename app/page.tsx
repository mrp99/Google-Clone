import GoogleLogo from "@/components/GoogleLogo";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";


/** */

const Home: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <GoogleLogo />
      <HomeSearch />
    </>
  );
}


export default Home;