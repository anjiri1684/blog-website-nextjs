import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPost = getAllPosts();

  return {
    props: {
      posts: allPost,
    },
  };
}

export default AllPostsPage;
