import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import ListOfBenefits from "@/components/ListOfBenefits";
import PostItDemonstration from "@/components/PostItDemonstration";
import StartNow from "@/components/StartNow";

export default function Home() {
  return (
    <>
      <HomeBanner>
        <Header />
      </HomeBanner>
      {/* TODO Demonstração da pagina de gerenciamento de post-its  */}
      <PostItDemonstration />
      <ListOfBenefits />
      <StartNow />
      <Footer />
    </>
  );
}
