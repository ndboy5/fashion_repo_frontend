import styles from "./postsColumn.module.css";
import TopicPost from "./topicPost";

function PostColumn({ posts }) {
  // console.log(posts.length);
  return (
    <div className={styles.postColumn}>
      {posts && posts.map((p) => <TopicPost key={p._id} text={p.text} />)}
    </div>
  );
}

export default PostColumn;
