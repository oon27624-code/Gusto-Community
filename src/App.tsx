import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const [username] = useState("Aye Tharaphi Kyaw");
  const [relationship] = useState("In a Relationship");

  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const friends = 128;
  const friendRequests = 5;

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
    if (newPost || selectedImage) {
      const post = {
        text: newPost,
        image: selectedImage,
      };

      setPosts([post, ...posts]);
      setNewPost("");
      setSelectedImage("");
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom right, #0f172a, #1e293b, #111827)",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#3b82f6" }}>Gusto Community</h1>

      {/* Profile Card */}
      <div
        style={{
          background: "#1f2937",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>👤 {username}</h2>
        <p>❤️ Relationship Status: {relationship}</p>
        <p>👥 Friends: {friends}</p>
        <p>📩 Friend Requests: {friendRequests}</p>
      </div>

      {/* Friend Requests */}
      <div
        style={{
          background: "#1f2937",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <h3>📩 Friend Requests</h3>

        <div style={{ marginTop: "10px" }}>
          <p>• Su Su sent you a friend request</p>
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              marginRight: "10px",
            }}
          >
            Accept
          </button>

          <button
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
            }}
          >
            Decline
          </button>
        </div>
      </div>

      {/* Create Post */}
      <div
        style={{
          background: "#1f2937",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <h3>What's on your mind?</h3>

        <textarea
          placeholder="Write something..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{
            width: "100%",
            height: "80px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "none",
            padding: "10px",
            background: "#374151",
            color: "white",
          }}
        />

        <br />
        <br />

        <input type="file" onChange={handleImageUpload} />

        <button
          onClick={addPost}
          style={{
            marginLeft: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>

      {/* Posts */}
      <div style={{ marginTop: "20px" }}>
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "#1f2937",
              padding: "20px",
              borderRadius: "16px",
              marginBottom: "20px",
            }}
          >
            <h3>{username}</h3>
            <p>❤️ {relationship}</p>

            <p>{post.text}</p>

            {post.image && (
              <img
                src={post.image}
                alt="post"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginTop: "10px",
                }}
              />
            )}

            <p style={{ marginTop: "10px" }}>👍 Like • 💬 Comment</p>
          </div>
        ))}
      </div>
    </div>
  );
}
