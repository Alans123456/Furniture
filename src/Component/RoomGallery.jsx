import { useState } from "react";

const RoomGallery = () => {
  const rooms = [
    {
      name: "Bed Room",
      image:
        "https://i.pinimg.com/736x/10/c0/a7/10c0a7b21f3c0eef4e259e3a953b1cc0.jpg",
      items: "1200+ item",
    },
    {
      name: "Living Room",
      image:
        "https://i.pinimg.com/736x/e8/87/be/e887be495cfadfe775dca8a7d94abf4e.jpg",
      items: "1200+ item",
    },
    {
      name: "Dining Room",
      image:
        "https://img.freepik.com/free-photo/dining-table-with-chairs-tableware_140725-7822.jpg?semt=ais_hybrid&w=740",
      items: "1200+ item",
    },
  ];

  const [selectedRoom, setSelectedRoom] = useState(rooms[0]); // Set first room by default

  return (
    <div className="flex gap-4 pl-10 py-8 mt-6">
      {rooms.map((room, index) => {
        const isSelected = selectedRoom?.name === room.name;
        return (
          <div
            key={index}
            onClick={() => setSelectedRoom(room)}
            className={`relative h-120 rounded-xl cursor-pointer overflow-hidden transition-all duration-1000 hover:scale-105 text-body ${
              isSelected ? "w-5/5" : "w-2/5"
            }`}
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 text-white text-xl font-medium ${
                isSelected
                  ? "flex flex-row gap-4 items-center"
                  : "flex flex-col"
              }`}
            >
              <span>{room.name}</span>
              {room.items && (
                <span className="text-lg font-semibold">{room.items}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomGallery;
