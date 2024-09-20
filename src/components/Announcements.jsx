export default function Announcements() {
  const data = [
    {
      id: 1,
      bg: "bg-skyLight",
      title: "Lorem ipsum dolor sit amet..",
      time: "08:00 AM - 12:00 PM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
      id: 2,
      bg: "bg-purpleLight",
      title: "Lorem ipsum dolor sit amet..",
      time: "08:00 AM - 12:00 PM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
      id: 3,
      bg: "bg-yellowLight",
      title: "Lorem ipsum dolor sit amet..",
      time: "08:00 AM - 12:00 PM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {data.map((announcement) => (
          <div
            className={`rounded-md p-4 ${announcement.bg}`}
            key={announcement.id}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.time}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
