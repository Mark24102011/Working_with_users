import { getUser } from "../utils/auth";

export default function Home() {
  const user = getUser();

  const products = [
    { name: "iPhone 15", price: "999€", desc: "Latest Apple smartphone", img: "https://imgs.search.brave.com/t5CD40gJ4Tfennoe5ww84FCnFHesBVVGvI1zVhsmfGs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL25l/d3Nyb29tL2ltYWdl/cy8yMDIzLzA5L2Fw/cGxlLXVudmVpbHMt/aXBob25lLTE1LXBy/by1hbmQtaXBob25l/LTE1LXByby1tYXgv/YXJ0aWNsZS9BcHBs/ZS1pUGhvbmUtMTUt/UHJvLWxpbmV1cC1j/b2xvci1saW5ldXAt/MjMwOTEyX2JpZy5q/cGcubGFyZ2UuanBn" },
    { name: "MacBook Air", price: "1299€", desc: "Lightweight laptop", img: "https://imgs.search.brave.com/Hk7EQbEmGkp60pdXKwcLLaHwzUOsbzA3lr3DwngIKQQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS9hcnRpY2xl/LW5ldy8yMDI1LzAz/L0FwcGxlLU1hY0Jv/b2stQWlyLWhlcm8u/anBn" },
    { name: "AirPods Pro", price: "249€", desc: "Noise cancelling earbuds", img: "https://imgs.search.brave.com/H6h0N0Gq67UW3MZHgIl-cpXXfJ8aKPllN8EayAdj1Y0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/ODYzNDYxNS9kZS9m/b3RvL2FwcGxlLWFp/cnBvZHMtcHJvLWF1/Zi13ZWklQzMlOUZl/bS1oaW50ZXJncnVu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SkQ5cDdoVnVH/M1B6MXZZRHMtV3NL/dWpkR0pFYmRwRzNH/cVdWaGROQlQ0ST0" },
    { name: "iPad", price: "599€", desc: "Powerful tablet", img: "https://imgs.search.brave.com/T0eMv0slwFZPYldCA2kmdxwdZHwvb_bNxhTRVW-jWgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5jb29sYmx1ZS5k/ZS9tYXgvMTYwMHhh/dXRvL2NvbnRlbnQv/M2MzMjkxZTNmYThi/NmU4NDJiZWMwYTQ1/YTQxNTMwN2Q" },
    { name: "Apple Watch", price: "399€", desc: "Smart watch", img: "https://imgs.search.brave.com/bBK_ZNDWV7X5uB52pFECUJkv7ce35DrkyHEH5ymG_Ho/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL2Rl/L2FwcGxlLXdhdGNo/LXNlcmllcy0xMS9p/bWFnZXMvb3ZlcnZp/ZXcvb24tdGhlLWdv/L3dyaXN0X2ZsaWNr/X2VuZGZyYW1lX19i/bGU1ZnVrbWRrMnFf/bGFyZ2UuanBn" },
    { name: "Camera", price: "799€", desc: "Professional camera", img: "https://imgs.search.brave.com/Wy4CSucy_aQ3BaEygBKeeGTZZgs5CcGDgOKyUhvEXqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/OC8yOS8xNC81My9j/YW1lcmEtNDMxMTE5/XzY0MC5qcGc" },
    { name: "Headphones", price: "199€", desc: "High quality sound", img: "https://imgs.search.brave.com/AXd7Qs7KW89e_t8SMus6BD6Xn4li8hU1r_N1TS9btcY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NDUyMDQ2My9waG90/by9ibGFjay1oZWFk/cGhvbmVzLWlzb2xh/dGVkLW9uLXRoZS13/aGl0ZS1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz13UElCRExR/SVRmWTQxMnptU05i/c1Jobm5JZkgwdE5p/TUNoS2dVblBSbWVr/PQ" },
    { name: "Keyboard", price: "149€", desc: "Mechanical keyboard", img: "https://imgs.search.brave.com/rgk7tB7FGcdcGV7Sft3ztS5C_CM_IaYxFOqBzyXiDwQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE3Q3pTWDdEb0wu/anBn" },
    { name: "Mouse", price: "99€", desc: "Wireless mouse", img: "https://imgs.search.brave.com/Xox8q_Y85DolCWqOaubWFNPGy3_oSdXbfmKygwOKxaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y5LzJh/LzNkL2Y5MmEzZGM5/YjBiN2M5NWQ5NDlh/ZTM0MjcxMTgwZGQx/LmpwZw" },
    { name: "Monitor", price: "299€", desc: "4K display", img: "https://imgs.search.brave.com/Awkg6R4g73QO_oOcjAcaMq_jvy9XxedsLEI4KiZPcmc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0V4a0FB/ZVN3a0ZGb1pSb2Ev/cy1sOTYwLndlYnA" },
    { name: "Speaker", price: "179€", desc: "Bluetooth speaker", img: "https://imgs.search.brave.com/mhXBUYJCSh_5uMKeNEx_DG5wfmhVYwvBu2JrQQZHVR8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2l-UUFB/ZVN3SjA1cGxGRVov/cy1sNDAwLndlYnA" },
    { name: "Router", price: "89€", desc: "Fast WiFi router", img: "https://imgs.search.brave.com/Z5FecmtEJXXeIsr6b0rIQyZjioU2wu6z-FUd7glveA4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk1/OTI0NDU0L3Bob3Rv/L2JsYWNrLXdpcmVs/ZXNzLXJvdXRlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/QzZyOUtDUWgza0xW/V3hmVGEwdkM0TF9i/RTd1bDdjdTlKNVB0/YmpLcjJ0RT0" },
    { name: "Drone", price: "499€", desc: "4K aerial drone", img: "https://imgs.search.brave.com/VcCw7SZFfG4gYzU-73_j6NscgvSs38MzUzNyHik4Tmg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzQx/ODIzMzcvcGV4ZWxz/LXBob3RvLTM0MTgy/MzM3L2ZyZWUtcGhv/dG8tb2YtaGlnaC10/ZWNoLWRyb25lLWlu/LWZsaWdodC1hZ2Fp/bnN0LWNsZWFyLXNr/eS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" },
    { name: "VR Headset", price: "349€", desc: "Virtual reality headset", img: "https://imgs.search.brave.com/9XR1ej2vY-qmdnuE0eyd_BfRZADsGegI-ySje4s8F5g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI4/NDYyOTY4L3Bob3Rv/L3lvdW5nLW1hbi13/ZWFyaW5nLXZyLWhl/YWRzZXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUZNQXp4/WEhQS3FfVUxuU3lt/MkVBb0ktQ0RKU1Mx/djY2bC0xdlVQUHlF/TTA9" },
    { name: "Smart Speaker", price: "129€", desc: "Voice assistant device", img: "https://imgs.search.brave.com/gizF0ot3heEuYNDg5lHqzy9Ye9dfjgCLKjor6eH7gZc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/MDI1MjEzMy9waG90/by93b21hbi11c2lu/Zy1hLXNtYXJ0LXNw/ZWFrZXItd2l0aC1z/bWFydC1waG9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cHJfMW04UUdaSVdJ/VjlmT2JYM0p0RDlF/bVQ4eVJHbDgxVHot/cXIteW1UUT0" },
    { name: "Laptop Stand", price: "59€", desc: "Ergonomic stand", img: "https://imgs.search.brave.com/0T6GD09z9PXqS5M_MyomW-9gU6hkjT40rOkghz67P54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvbGFwdG9wLXN0/YW5kL2QvaC9mLzAt/NC1mb2xkYWJsZS1s/YXB0b3AtdGFibGV0/LXN0YW5kLXJpc2Vy/LXVwLXRvLTE1LTYt/aW5jaGVzLWFsaWVu/cy1vcmlnaW5hbC1p/bWFoOGNqN3pqdXk0/c2FuLmpwZWc_cT03/MA" }
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