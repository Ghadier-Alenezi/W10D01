import Link from "next/link";
import styles from '../../styles/Home.module.css'

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  //   if (!data) {
  //     return {
  //       notFound: true,
  //     };
  //   }
  return { props: { posts: data } };
}
const Posts = ({ posts }) => {
  //   console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={styles.cards}>
          <Link href={`/posts/${post.id}`}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Posts;
