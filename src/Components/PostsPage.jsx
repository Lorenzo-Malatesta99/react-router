
const posts = [
  {
    id: 1,
    title: "Primo Post",
    content: "Questo è il contenuto del primo post.",
  },
  {
    id: 2,
    title: "Secondo Post",
    content: "Questo è il contenuto del secondo post.",
  },
  {
    id: 3,
    title: "Terzo Post",
    content: "Questo è il contenuto del terzo post.",
  },
];

const PostsPage = () => {
  return (
    <div>
      <h1 className="m-4">Lista dei Post</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="card mb-3 mx-3 px-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

