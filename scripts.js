const videoData = [
  {
    id: 1,
    title: "Introduction to HTML",
    channel: "Web Dev Basics",
    views: "100K views",
    timestamp: "2 days ago",
    thumbnail: "/placeholder.svg?height=140&width=250",
  },
  {
    id: 2,
    title: "CSS Flexbox Tutorial",
    channel: "CSS Mastery",
    views: "50K views",
    timestamp: "1 week ago",
    thumbnail: "/placeholder.svg?height=140&width=250",
  },
  {
    id: 3,
    title: "JavaScript for Beginners",
    channel: "JS Guru",
    views: "200K views",
    timestamp: "3 days ago",
    thumbnail: "/placeholder.svg?height=140&width=250",
  },
  {
    id: 4,
    title: "React.js Crash Course",
    channel: "Frontend Frameworks",
    views: "75K views",
    timestamp: "5 days ago",
    thumbnail: "/placeholder.svg?height=140&width=250",
  },
  {
    id: 5,
    title: "Node.js Basics",
    channel: "Backend Mastery",
    views: "120K views",
    timestamp: "1 day ago",
    thumbnail: "/placeholder.svg?height=140&width=250",
  },
  {
    id: 6,
    title: "Python for Data Science",
    channel: "Data Wizards",
    views: "300K views",
    timestamp: "1 week ago",
    thumbnail: "/placeholder.svg?height=140&width=250",
  },
];

function createVideoItem(video) {
  return `
        <div class="video-item">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.channel}</p>
                <p>${video.views} • ${video.timestamp}</p>
            </div>
        </div>
    `;
}

function renderVideos() {
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = videoData.map(createVideoItem).join("");
}

renderVideos();
