import styles from '../../styles/Home.module.css'


export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

const Post = ({ post }) => {
  //   console.log(post);
  return (
    <>
    <div className={styles.card}>
    <h1>Post</h1>
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
      
    </>
  );
};

export default Post;
