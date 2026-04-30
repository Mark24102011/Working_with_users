import { getUser } from "../utils/auth";

export default function Home() {
  const user = getUser();

  const products = [
    { name: "iPhone 15", price: "999€", desc: "Latest Apple smartphone", img: "https://picsum.photos/400/300?1" },
    { name: "MacBook Air", price: "1299€", desc: "Lightweight laptop", img: "https://picsum.photos/400/300?2" },
    { name: "AirPods Pro", price: "249€", desc: "Noise cancelling earbuds", img: "https://picsum.photos/400/300?3" },
    { name: "iPad", price: "599€", desc: "Powerful tablet", img: "https://picsum.photos/400/300?4" },
    { name: "Apple Watch", price: "399€", desc: "Smart watch", img: "https://picsum.photos/400/300?5" },
    { name: "Camera", price: "799€", desc: "Professional camera", img: "https://picsum.photos/400/300?6" },
    { name: "Headphones", price: "199€", desc: "High quality sound", img: "https://picsum.photos/400/300?7" },
    { name: "Keyboard", price: "149€", desc: "Mechanical keyboard", img: "https://picsum.photos/400/300?8" },
    { name: "Mouse", price: "99€", desc: "Wireless mouse", img: "https://picsum.photos/400/300?9" },
    { name: "Monitor", price: "299€", desc: "4K display", img: "https://picsum.photos/400/300?10" },
    { name: "Speaker", price: "179€", desc: "Bluetooth speaker", img: "https://picsum.photos/400/300?11" },
    { name: "Router", price: "89€", desc: "Fast WiFi router", img: "https://picsum.photos/400/300?12" },
    { name: "Drone", price: "499€", desc: "4K aerial drone", img: "https://picsum.photos/400/300?13" },
    { name: "VR Headset", price: "349€", desc: "Virtual reality headset", img: "https://picsum.photos/400/300?14" },
    { name: "Smart Speaker", price: "129€", desc: "Voice assistant device", img: "https://picsum.photos/400/300?15" },
    { name: "Laptop Stand", price: "59€", desc: "Ergonomic stand", img: "https://picsum.photos/400/300?16" }
  ];

  return (
    <div className="container">
      <h1 className="title">Featured Products</h1>

      <div className="grid">
        {products.map((p, i) => (
          <div className="card" key={i}>
            <img
              className="img"
              src={p.img}
              alt={p.name}
              onError={(e) => e.target.src = "https://placehold.co/400x300?text=No+Image"}
            />

            <h3>{p.name}</h3>
            <p className="desc">{p.desc}</p>
            <p className="price">{p.price}</p>

            <button
              className="buy"
              onClick={() => {
                if (!user) alert("Login required to purchase");
                else alert("Purchased: " + p.name);
              }}
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}