import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom";
import { format } from "timeago.js"
import axios from "axios"


const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`; 

const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color: #999;
    flex: 1;
`; 

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`; 

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`; 

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export const Card = ({ type, video }) => {

  const [channel, setChannel] = useState({});
  // console.log("video", video);
  // console.log("video.userId", video.userId);
  // console.log("video[0].userId", video[0].userId);
  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`/users/find/${video.userId}`);
        setChannel(res.data);
        // console.log("res.data", res.data);
        // ${video[0].userId}
      } catch(err) {
        console.log(err);
      }
    };
    fetchChannel();
  }, [video.userId]); 

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src={video.imgUrl}
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel.img}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views • {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

