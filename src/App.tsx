import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Aye Tharaphi Kyaw");
  const [relationship, setRelationship] = useState("Single");
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [profileImage, setProfileImage] = useState(
    "https://i.imgur.com/6VBx3io.jpeg"
  );
  const [friends, setFriends] = useState([
    "Willi Yan",
    "Su Su",
    "Mg Mg",
  ]);

  const createPost = () => {
    if (!postText) return;

    const newPost = {
      text: postText,
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
    setPostText("");
  };

  const changeProfile = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        background: "#f0f2f5",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          background: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
        <h1 style={{ color: "#1877f2" }}>Gusto Community</h1>

        <div style={{ display: "flex", gap: "15px" }}>
          <span>🏠</span>
          <span>👥</span>
          <span>🔔</span>
          <span>👤</span>
        </div>
      </div>

      <div
        style={{
          maxWidth: "500px",
          margin: "20px auto",
        }}
      >
        {/* Profile */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={profileImage}
              alt=""
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <h2>{name}</h2>

            <p>❤️ {relationship}</p>

            <p>👥 Friends: {friends.length}</p>

            <input type="file" onChange={changeProfile} />

            <br />
            <br />

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Change Name"
              style={{
                padding: "10px",
                width: "90%",
                marginBottom: "10px",
              }}
            />

            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              style={{
                padding: "10px",
                width: "95%",
              }}
            >
              <option>Single</option>
              <option>In a Relationship</option>
              <option>Married</option>
            </select>
          </div>
        </div>

        {/* Friends */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3>👥 Friends</h3>

          {friends.map((friend, index) => (
            <div
              key={index}
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              {friend}
            </div>
          ))}
        </div>

        {/* Create Post */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3>What's on your mind?</h3>

          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Write something..."
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
            }}
          />

          <button
            onClick={createPost}
            style={{
              background: "#1877f2",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Post
          </button>
        </div>

        {/* Posts */}
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profileImage}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />

              <div>
                <strong>{name}</strong>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  {post.time}
                </p>
              </div>
            </div>

            <p style={{ marginTop: "15px" }}>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}