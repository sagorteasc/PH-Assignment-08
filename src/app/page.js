import AllCategories from "@/components/Home/AllCategories";
import Banner from "@/components/Home/Banner";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import WhyReadHub from "@/components/WhyReadHub";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedBooks />
      <AllCategories />
      <WhyReadHub />
    </div>
  );
};

export default Home;