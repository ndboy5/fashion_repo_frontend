import styles from "./postsColumn.module.css";
import TopicPost from "./topicPost";

function PostColumn({ posts }) {
  return <div>{posts && posts.map((p) => <TopicPost text={p.text} />)}</div>;
}

export default PostColumn;
