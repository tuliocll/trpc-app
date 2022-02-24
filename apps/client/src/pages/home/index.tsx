import { trpc } from "@tcll/react/utils/trpc";

const HomePage = () => {
  const posts = trpc.useQuery(["post.list"]);

  if (!posts.data) return <div>Loading...</div>;

  return (
    <div className="posts--container">
      {posts.data.map((post) => {
        return (
          <div className="post--container">
            <p>
              <b>Id: </b>
              {post?.id}
            </p>
            <p>
              <b>Title: </b>
              {post?.title}
            </p>
            <p>
              <b>Description: </b>
              {post?.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
