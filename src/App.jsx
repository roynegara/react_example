import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";

function App() {
  const [menus, setMenus] = useState([]);

  const getMenusData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        console.log(res);
        setMenus(res.data.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenusData();
  }, []);

  console.log("data", menus);

  return (
    <>
      <h1 style={{ margin: "15px", textAlign: "center", backgroundColor: "red", color: "white" }}>
        !!! Ini adalah data API yang telah dibuat !!!
      </h1>
      {menus.map((item, index) => (
        <div
          key={index}
          style={{ margin: "15px", textAlign: "center", border: "10px solid black", borderRadius: "10px" }}>
          <h1>Jenis Makanan Ini : {item.type}</h1>
          <h3>Nomor Identitas : {item.id}</h3>
          <h3>Nama : {item.name} </h3>
          <p>Deskripsi : {item.description}</p>
          <img
            style={{
              height: "300px",
              width: "300px",
              // marginBottom: "80px",
              borderRadius: "10px",
              alignContent: "center",
            }}
            src={item.imageUrl}
            alt={item.name}
          />

          <h3>Harga : {item.priceFormatted}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
