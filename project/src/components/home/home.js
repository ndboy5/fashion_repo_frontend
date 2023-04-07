import styles from "./home.module.css";
import TrendingTopics from "./trendingTopics";
import Slides from "./slides";
import trending_topics_data from "../../data/trend_topic_data";
import Carousel from "./carousel";
import Layout from "../layouts/layout";
function Home() {
  const slides = [
    { url: "/images/trend_style/pic_a.jpg" },
    { url: "/images/trend_style/pic_b.jpg" },
    { url: "/images/trend_style/pic_c.jpg" },
    { url: "/images/trend_style/pic_d.jpg" },
    { url: "/images/trend_style/pic_e.jpg" },
    { url: "/images/trend_style/pic_f.jpg" },
    { url: "/images/trend_style/pic_g.jpg" },
    { url: "/images/trend_style/pic_h.jpg" },
    { url: "/images/trend_style/pic_i.jpg" },
    { url: "/images/trend_style/pic_j.jpg" },
    { url: "/images/trend_style/pic_k.jpg" },
  ];

  return (
    <>
      <div className={styles.main}>
        <Carousel />
        <TrendingTopics />
        <Slides slides={slides} />
      </div>
    </>
  );
}
export default Home;
