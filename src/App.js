import React, { useEffect, useState } from "react";
import "./App.css"; // CSS 파일의 상대 경로
import axios from "axios";
import { Container } from "react-bootstrap";

const sensorColor = {
  Gray: {
    name: "GRAY",
    combination: ["GRAY", "NAVY", "BEIGE", "BLUE", "KHAKI"],
  },
  Black: {
    name: "BLACK",
    combination: ["BLACK", "WHITE", "KHAKI", "BLUE", "GREEN"],
  },
  White: {
    name: "WHITE",
    combination: ["BLACK", "BLUE", "BEIGE", "KHAKI", "GRAY"],
  },
  Navy: {
    name: "NAVY",
    combination: ["GRAY", "BLUE", "BEIGE", "CREAM", "KHAKI"],
  },
  Khaki: {
    name: "KHAKI",
    combination: ["GRAY", "BLUE", "BEIGE", "BLACK", "BROWN"],
  },
  Green: {
    name: "GREEN",
    combination: ["BEIGE", "BLUE", "WHITE", "BLACK", "GRAY"],
  },
  Blue: {
    name: "BLUE",
    combination: ["BEIGE", "WHITE", "GRAY", "BLACK", "KHAKI"],
  },
  Sky_Blue: {
    name: "SKYBLUE",
    combination: ["BEIGE", "WHITE", "GRAY", "BLACK", "KHAKI"],
  },
  Brown: {
    name: "BROWN",
    combination: ["BEIGE", "BLUE", "CREAM", "BLACK", "KHAKI"],
  },
  Beige: {
    name: "BEIGE",
    combination: ["BROWN", "NAVY", "CREAM", "BLACK", "BLUE"],
  },
  Orange: {
    name: "ORANGE",
    combination: ["BEIGE", "NAVY", "KHAKI", "BLACK", "CREAM"],
  },
  Red: {
    name: "RED",
    combination: ["GREEN", "ORANGE", "BLUE", "BLACK", "BEIGE"],
  },
  Purple: {
    name: "PURPLE",
    combination: ["SKYBLUE", "PURPLE", "WHITE", "BEIGE", "BLACK"],
  },
  Pink: {
    name: "PINK",
    combination: ["SKYBLUE", "BLACK", "KHAKI", "WHITE", "GRAY"],
  },
  Yellow: {
    name: "YELLOW",
    combination: ["BLUE", "CREAM", "BROWN", "WHITE", "BLACK"],
  },
  Burgundy: {
    name: "BURGUNDY",
    combination: ["BEIGE", "NAVY", "KHAKI", "BLACK", "GRAY"],
  },
};

const App = () => {
  // const [backendData, setBackendData] = useState([{}]);
  const [dominantColors, setDominantColors] = useState([]);

  useEffect(() => {
    // fetchBackendData();
    fetchDominantColors();
  }, []);

  // const fetchBackendData = () => {
  //   axios
  //     .get("https://port-0-color-server-dcse2bligx5y07.sel4.cloudtype.app/api")
  //     .then((response) => {
  //       setBackendData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Failed to fetch backend data:", error);
  //     });
  // };

  const fetchDominantColors = () => {
    axios
      .get(
        "https://port-0-color-server-dcse2bligx5y07.sel4.cloudtype.app/api/dominant-colors"
      )
      .then((response) => {
        setDominantColors(response.data.dominantColors);
      })
      .catch((error) => {
        console.log("Failed to fetch dominant colors:", error);
      });
  };

  return (
    <div className="parent-container">
      <Container>
        {/* {typeof backendData.users === "undefined" ? (
        <p>Loding...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )} */}

        <div>
          {dominantColors.length === 0 ? (
            <p>Loading...</p>
          ) : (
            dominantColors.map((color, index) => {
              const colorInfo = sensorColor[color];
              if (!colorInfo) return null;
              return (
                <div key={index}>
                  <div className="sensor-color">인식한 색상</div>
                  <div id="sensor-get-color" className={colorInfo.name}>
                    {colorInfo.name}
                  </div>
                  <div
                    style={{
                      color: "rgb(235, 53, 53)",
                      marginTop: "7px",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    * 잘못된 색상을 인식했다면 다시 인식해주길 바랍니다.
                  </div>
                  <div className="combination-color">추천 색상</div>
                  <div className="recommend-color-list">
                    {colorInfo.combination.map((combinationColor, i) => (
                      <div
                        id="recommend-color"
                        className={colorInfo.combination[i]}
                        key={i}
                      >
                        {combinationColor}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
// 스카이블루 바꿔야됨~!!!!!!