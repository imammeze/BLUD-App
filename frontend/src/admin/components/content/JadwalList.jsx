import { useState } from "react";

function JadwalList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [events, setEvents] = useState([
    {
      id: 1,
      organizer: "Telkom University",
      dateRange: "07/01/2025 - 10/01/2025",
      eventName: 'Biorama DKV XII, "Membuka Cakrawala"',
    },
    {
      id: 2,
      organizer: "Universitas Jenderal Soedirman",
      dateRange: "07/01/2025 - 10/01/2025",
      eventName: "Dies Natalis Ilkom ke-55",
    },
    {
      id: 3,
      organizer: "Universitas Jenderal Soedirman",
      dateRange: "07/01/2025 - 10/01/2025",
      eventName: "Dies Natalis Ilmu Politik ke-54",
    },
  ]);

  const handleDeleteClick = (event) => {
    setSelectedEvent(event);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="flex-1 flex flex-col">
      <main className="p-6 bg-gray-50 flex-1">
        {/* Header with search */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">List Jadwal Event</h3>
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-lg w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Events table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Add Event Button */}
          <div className="mb-4 text-right">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
              Tambahkan Data Event
            </button>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-300 text-white">
                <th className="p-3">No</th>
                <th className="p-3">Nama Penyewa/Instansi</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Nama Event</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b">
                  <td className="p-3 text-center">{event.id}</td>
                  <td className="p-3 text-center">{event.organizer}</td>
                  <td className="p-3 text-center">{event.dateRange}</td>
                  <td className="p-3 text-center">{event.eventName}</td>
                  <td className="p-3 text-center">
                    <button className="inline-block bg-green-500 hover:bg-green-600 p-2 rounded-lg mr-2">
                      Edit
                    </button>
                    <button
                      className="inline-block bg-red-500 hover:bg-red-600 p-2 rounded-lg"
                      onClick={() => handleDeleteClick(event)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default JadwalList;
