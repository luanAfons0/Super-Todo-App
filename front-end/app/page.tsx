import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner>
        <Header />
      </HomeBanner>
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </>
  );
}
