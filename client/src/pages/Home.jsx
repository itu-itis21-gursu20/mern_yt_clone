import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Card } from "../components/Card"
import axios from "axios"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Home = ({type}) => {
  
  const [videos, setVideos] = useState([]);
  // console.log("type", type);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${type}`);
        setVideos(res.data);
        // console.log("videos", videos);
      } catch(error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
    {videos.map((video) => (
      <Card key={video._id} video={video}/>
    ))}
  </Container>
  );
};