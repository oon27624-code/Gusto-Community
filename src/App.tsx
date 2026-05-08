// ==========================
// USER DATA
// ==========================

const [users, setUsers] = useState([
  {
    id: 1,
    name: "Aye Tharaphi Kyaw",

    bio: "💙 GUSTO College Student",

    relationship: "In a Relationship",

    hometown: "Natogyi",

    profile:
      "https://i.imgur.com/8Km9tLL.jpg",

    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    friends: [2],

    requests: [3],

    posts: [],
  },

  {
    id: 2,

    name: "Willi Yan",

    bio: "🎓 Digital Creator",

    relationship: "Single",

    hometown: "Yangon",

    profile:
      "https://i.imgur.com/2DhmtJ4.jpg",

    cover:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",

    friends: [1],

    requests: [],

    posts: [],
  },

  {
    id: 3,

    name: "Su Su",

    bio: "🌸 Student",

    relationship: "Single",

    hometown: "Mandalay",

    profile:
      "https://i.imgur.com/n8OYCzR.jpg",

    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

    friends: [],

    requests: [],

    posts: [],
  },
]);

// ==========================
// LOGIN USER
// ==========================

const currentUserId = 1;

const currentUser = users.find(
  (u) => u.id === currentUserId
);

// ==========================
// PROFILE EDIT STATES
// ==========================

const [editName, setEditName] =
  useState(currentUser?.name || "");

const [editBio, setEditBio] =
  useState(currentUser?.bio || "");

const [
  editRelationship,
  setEditRelationship,
] = useState(
  currentUser?.relationship || ""
);

const [editTown, setEditTown] =
  useState(currentUser?.hometown || "");

// ==========================
// SAVE PROFILE INFO
// ==========================

const saveProfile = () => {
  setUsers((prev) =>
    prev.map((user) =>
      user.id === currentUserId
        ? {
            ...user,

            name: editName,

            bio: editBio,

            relationship:
              editRelationship,

            hometown: editTown,
          }
        : user
    )
  );
};

// ==========================
// CHANGE PROFILE PHOTO
// ==========================

const changeProfilePhoto = (
  e: any
) => {
  const file = e.target.files[0];

  if (file) {
    const imageUrl =
      URL.createObjectURL(file);

    setUsers((prev) =>
      prev.map((user) =>
        user.id === currentUserId
          ? {
              ...user,
              profile: imageUrl,
            }
          : user
      )
    );
  }
};

// ==========================
// CHANGE COVER PHOTO
// ==========================

const changeCoverPhoto = (
  e: any
) => {
  const file = e.target.files[0];

  if (file) {
    const imageUrl =
      URL.createObjectURL(file);

    setUsers((prev) =>
      prev.map((user) =>
        user.id === currentUserId
          ? {
              ...user,
              cover: imageUrl,
            }
          : user
      )
    );
  }
};

// ==========================
// FRIEND SYSTEM
// ==========================

// SEND REQUEST
const sendFriendRequest = (
  targetId: number
) => {
  setUsers((prev) =>
    prev.map((user) => {
      if (user.id === targetId) {
        return {
          ...user,

          requests: [
            ...user.requests,
            currentUserId,
          ],
        };
      }

      return user;
    })
  );
};

// ACCEPT REQUEST
const acceptRequest = (
  requesterId: number
) => {
  setUsers((prev) =>
    prev.map((user) => {
      if (user.id === currentUserId) {
        return {
          ...user,

          friends: [
            ...user.friends,
            requesterId,
          ],

          requests: user.requests.filter(
            (id) => id !== requesterId
          ),
        };
      }

      if (user.id === requesterId) {
        return {
          ...user,

          friends: [
            ...user.friends,
            currentUserId,
          ],
        };
      }

      return user;
    })
  );
};

// FRIEND LIST
const friendList = users.filter(
  (u) =>
    currentUser?.friends.includes(u.id)
);

// REQUEST LIST
const requestList = users.filter(
  (u) =>
    currentUser?.requests.includes(u.id)
);

// ==========================
// POST SYSTEM
// ==========================

const [postText, setPostText] =
  useState("");

const [postImage, setPostImage] =
  useState("");

const [postVideo, setPostVideo] =
  useState("");

// UPLOAD IMAGE
const uploadImage = (e: any) => {
  const file = e.target.files[0];

  if (file) {
    setPostImage(
      URL.createObjectURL(file)
    );
  }
};

// UPLOAD VIDEO
const uploadVideo = (e: any) => {
  const file = e.target.files[0];

  if (file) {
    setPostVideo(
      URL.createObjectURL(file)
    );
  }
};

// CREATE POST
const createPost = () => {
  if (
    !postText &&
    !postImage &&
    !postVideo
  )
    return;

  const newPost = {
    id: Date.now(),

    userId: currentUserId,

    text: postText,

    image: postImage,

    video: postVideo,

    time: "Just now",
  };

  setUsers((prev) =>
    prev.map((user) =>
      user.id === currentUserId
        ? {
            ...user,

            posts: [
              newPost,
              ...user.posts,
            ],
          }
        : user
    )
  );

  setPostText("");

  setPostImage("");

  setPostVideo("");
};
