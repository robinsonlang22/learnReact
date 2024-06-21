import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, GeoJSON } from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import geojsonData from "./company_after1990.geojson";
import TimeSlider from "./TimeSlider.js";

// 定义一个组件来设置地图的边界
function SetBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = [
      [13, -105], // 西南角坐标
      [47, -50] // 东北角坐标
    ];
    map.fitBounds(bounds);
  }, [map]);
  
  return null;
}

// 用于显示和更新GeoJSON数据的组件
const GeoJsonLayer = ({ data }) => {
    const map = useMap();
    
    useEffect(() => {
      const layer = L.geoJSON(data, {
        pointToLayer: (feature, latlng) => L.circleMarker(latlng),
      }).addTo(map);
      
      return () => {
        map.removeLayer(layer);
      };
    }, [data, map]);
    
    return null;
  };

export default function App() {

    const [visibleData, setVisibleData] = useState(geojsonData);

    const filterDataByTime = (time) => {
      const filteredFeatures = geojsonData.features.filter(feature => {
        const timestamp = new Date(feature.properties.Time);
        return timestamp <= time;
      });
      setVisibleData({
        ...geojsonData,
        features: filteredFeatures
      });
    };

  return (
    <div>
        <MapContainer center={[37.0902, -95.7129]} zoom={4} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetBounds />
            <GeoJsonLayer data={visibleData} />
        </MapContainer>
        <TimeSlider onChange={filterDataByTime} />
    </div>
  );
}
