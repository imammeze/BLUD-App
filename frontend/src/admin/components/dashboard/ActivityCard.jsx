const ActivityCard = () => {
  const activities = [
    {
      user: "Fadiana",
      action: "menambahkan tempat wisata baru.",
      time: "Baru saja.",
    },
    {
      user: "Harsa",
      action: "mengedit tempat wisata.",
      time: "2 Menit yang lalu.",
    },
    {
      user: "Vina",
      action: "menambahkan berita baru.",
      time: "30 Menit yang lalu.",
    },
    {
      user: "Imam",
      action: "menambahkan jadwal event baru.",
      time: "1 Hari yang lalu.",
    },
  ];

  return (
    <div className="bg-[#0096C7] p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-white">Aktivitas</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-white">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              <span className="font-semibold">
                {activity.user} {activity.action}
              </span>
            </div>
            <span className="text-sm text-white/80">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityCard;
