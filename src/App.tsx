import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [relationship, setRelationship] = useState("Single");

  const [posts, setPosts] = useState<any[]>([]);

  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const login = () => {
    if (username.trim() !== "") {
      setLoggedIn(true);
    }
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const addPost = () => {
    if (newPost.trim() === "" && !selectedImage) return;

    const post = {
      name: username,
      relationship: relationship,
      text: newPost,
      image: selectedImage,
      likes: 0,
      comments: [],
    };

    setPosts([post, ...posts]);

    setNewPost("");
    setSelectedImage("");
  };

  const likePost = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const addComment = (index: number, comment: string) => {
    if (comment.trim() === "") return;

    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          background: "#111",
          color: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            background: "#222",
            padding: "30px",
            borderRadius: "12px",
            width: "320px",
          }}
        >
          <h1 style={{ color: "#1877f2" }}>Gusto Community</h1>

          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option>Single</option>
            <option>In a Relationship</option>
            <option>Married</option>
            <option>Complicated</option>
          </select>

          <button
            onClick={login}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              background: "#1877f2",
              color: "white",
              cursor: "pointer",
            }}
          >
            Login / Signup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#1877f2" }}>Gusto Community</h1>

      {/* Profile */}
      <div
        style={{
          background: "#222",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          maxWidth: "500px",
        }}
      >
        <h2>👤 {username}</h2>
        <p>❤️ Relationship Status: {relationship}</p>
      </div>

      {/* Create Post */}
      <div
        style={{
          background: "#222",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          maxWidth: "500px",
        }}
      >
        <h3>What's on your mind?</h3>

        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write something..."
          style={{
            width: "100%",
            height: "80px",
            marginTop: "10px",
            borderRadius: "8px",
            padding: "10px",
            border: "none",
          }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{
            marginTop: "10px",
            color: "white",
          }}
        />

        <button
          onClick={addPost}
          style={{
            marginTop: "15px",
            background: "#1877f2",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>

      {/* Posts */}
      <div style={{ marginTop: "20px", maxWidth: "500px" }}>
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "#222",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            <h3>{post.name}</h3>

            <p style={{ color: "#bbb" }}>
              ❤️ {post.relationship}
            </p>

            <p>{post.text}</p>

            {post.image && (
              <img
                src={post.image}
                alt="post"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              />
            )}

            <button
              onClick={() => likePost(index)}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              👍 Like ({post.likes})
            </button>

            <div style={{ marginTop: "15px" }}>
              <input
                type="text"
                placeholder="Write a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addComment(index, e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                }}
              />

              <div style={{ marginTop: "10px" }}>
                {post.comments.map((comment: string, i: number) => (
                  <p key={i}>💬 {comment}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}