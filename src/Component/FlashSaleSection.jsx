import { Clock, ArrowRight } from "lucide-react";

export default function FlashSaleSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-20 font-body text-2xl rounded-xl  max-w-7xl mx-auton ml-35">
      {/* Left - Flash Sale */}
      <div className="bg-white rounded-xl p-6 md:col-span-2 shadow-md border-gray-200 border-1 hover:shadow-lg hover:scale-[1.02] duration-300">
        <h2 className="text-2xl font-heading mb-2">Flash Sale!</h2>
        <p className="text-gray-600 mb-4">
          Act fast to grab incredible deals on select furniture pieces in our
          limited-time flash sale.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqd1oXVEexiBvUkw-9_z-CGW75gTppF3IXeg&s"
            alt="Sofa"
            className="w-50 h-60 object-contain"
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium">Vintage Leather Armchai</h3>
              <div className="flex items-center gap-1 text-sm text-teal-700">
                <Clock size={16} /> End time
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-3">
              Bring a touch of retro charm to your home with this vintage
              leather armchair. Sturdy construction ensures durability.
            </div>

            {/* Timer */}
            <div className="flex gap-2 mb-4">
              {["12 H", "36 M", "57 S"].map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-md font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Price + Button */}
            <div className="flex items-center justify-between ">
              <div>
                <span className="text-xl font-bold">$599</span>{" "}
                <span className="line-through text-gray-400">$799</span>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Side Products */}
      <div className="flex flex-col gap-4">
        {[
          {
            title: "Rustic Coffee Table",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlR4MbTxkoAR1AlMV9QAhpyK7eUjm7jK2zKQ&s",
          },
          {
            title: "Modern Bookshelf",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsapZ1j8jU19X7LNrtztDNIhtqAiCtuZ3GA&s",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl w-80 shadow-sm flex items-center  border-gray-200 border-1 justify-between hover:shadow-lg hover:scale-[1.02] duration-300"
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-60 h-30 object-contain"
              />
              <div>
                <span className="text-sm font-medium">{item.title}</span>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white ml-35 w-5 rounded-full">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
