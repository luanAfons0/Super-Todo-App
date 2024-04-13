import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import PostItDemonstration from "@/components/PostItDemonstration";

export default function Home() {
  return (
    <>
      <HomeBanner>
        <Header />
      </HomeBanner>
      <PostItDemonstration />
      <Footer />
    </>
  );
}
