import styles from "./topic.module.css";

const trending_topics_data = [
  {
    id: 1,
    topic: "Trendy and classy women wear in voguw - Tito Collections",
    link: "www.google.com",
  },
  {
    id: 1,
    topic: "Gucci rollout massive trade deal in Nigeria",
    link: "www.google.com",
  },
  {
    id: 1,
    topic: "Top fabrics for Top-notch Business Men and Women",
    link: "www.google.com",
  },
  {
    id: 1,
    topic: "Fashion Book: How to make regular income with peace of mind",
    link: "www.google.com",
  },
  {
    id: 1,
    topic: "Pefume lover - A Fulani Woman's Diary",
    link: "www.google.com",
  },
  {
    id: 1,
    topic:
      "Turkey shirts Mark Spencer,farah Pant Trousers For 1500 Shirts,jeans And Chinos",
    link: "www.google.com",
  },
  {
    id: 1,
    topic: "Igbo Traditional Original George Rapper For Sale In Ibadan",
    link: "www.google.com",
  },
  {
    id: 1,
    topic:
      "2023 Stylish Ankara Asoebi Latest Styles | Beautiful Ways To Style Ankara",
    link: "www.google.com",
  },
  {
    id: 1,
    topic: "Fashion Design and Sweing Technology",
    link: "www.google.com",
  },
  {
    id: 1,
    topic:
      "Christiano Ronaldo Agree to a $173 Million-per-year contract with Al Nasir",
    link: "www.google.com",
  },
];

function Topic() {
  return (
    <div className={styles.topic}>
      <div class="rows">
        <h4>TRENDING TOPICS</h4>

        {trending_topics_data.map((tp) => (
          <div className={styles.rows}>{tp.topic}</div>
        ))}
      </div>
    </div>
  );
}
export default Topic;
