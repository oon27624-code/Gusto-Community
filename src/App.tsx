import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const username = "Aye Tharaphi Kyaw";
  const relationship = "In a Relationship";

  const profileImage =
    "https://i.imgur.com/6VBx3io.jpeg";

  const [posts, setPosts] = useState<any[]>([
    {
      text: "Welcome to Gusto Community 💙",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      time: "2h ago",
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

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
        time: "Just now",
      };

      setPosts([post, ...posts]);

      setNewPost("");
      setSelectedImage("");
    }
  };

  return (
    <div
      style={{
        background: "#18191A",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#242526",
          padding: "15px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1877f2",
          position: "sticky",
          top: 0,
        }}
      >
        Gusto Community 
      </div>

      {/* HOME */}
      {activeTab === "home" && (
        <div>
          {/* Post Box */}
          <div
            style={{
              background: "#242526",
              padding: "15px",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                src={profileImage}
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                }}
              />

              <input
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) =>
                  setNewPost(e.target.value)
                }
                style={{
                  flex: 1,
                  borderRadius: "30px",
                  border: "none",
                  padding: "10px",
                  background: "#3A3B3C",
                  color: "white",
                }}
              />
            </div>

            <br />

            <input
              type="file"
              onChange={handleImageUpload}
            />

            <button
              onClick={addPost}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                background: "#1877f2",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Post
            </button>
          </div>

          {/* Stories */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "10px",
              padding: "15px",
            }}
          >
            <div
              style={{
                minWidth: "120px",
                height: "200px",
                borderRadius: "15px",
                backgroundImage: `url(${profileImage})`,
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  fontWeight: "bold",
                }}
              >
                Your Story
              </div>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                background: "#242526",
                marginTop: "10px",
                padding: "15px",
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
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {username}
                  </div>

                  <div
                    style={{
                      color: "gray",
                      fontSize: "12px",
                    }}
                  >
                    {post.time}
                  </div>
                </div>
              </div>

              <p style={{ marginTop: "15px" }}>
                {post.text}
              </p>

              {post.image && (
                <img
                  src={post.image}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  color: "#b0b3b8",
                }}
              >
                <div>👍 Like</div>
                <div>💬 Comment</div>
                <div>↗ Share</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FRIENDS PAGE */}
      {activeTab === "friends" && (
        <div style={{ padding: "20px" }}>
          <h2>Friends</h2>

          <div
            style={{
              background: "#242526",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "15px",
            }}
          >
            👥 Friends Count: 128
          </div>

          <div
            style={{
              background: "#242526",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "15px",
            }}
          >
            📩 Friend Requests: 5
          </div>
        </div>
      )}

      {/* PROFILE PAGE */}
      {activeTab === "profile" && (
        <div>
          <div
            style={{
              background:
                "linear-gradient(to right,#1877f2,#42a5f5)",
              height: "180px",
            }}
          ></div>

          <div
            style={{
              textAlign: "center",
              marginTop: "-60px",
            }}
          >
            <img
              src={profileImage}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "5px solid #18191A",
              }}
            />

            <h2>{username}</h2>

            <p style={{ color: "#b0b3b8" }}>
              ❤️ {relationship}
            </p>

            <p style={{ color: "#b0b3b8" }}>
              👥 128 Friends
            </p>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#242526",
          display: "flex",
          justifyContent: "space-around",
          padding: "15px 0",
          borderTop: "1px solid #333",
        }}
      >
        <div onClick={() => setActiveTab("home")}>
          🏠 Home
        </div>

        <div onClick={() => setActiveTab("friends")}>
          👥 Friends
        </div>

        <div onClick={() => setActiveTab("profile")}>
          👤 Profile
        </div>
      </div>
    </div>
  );
}