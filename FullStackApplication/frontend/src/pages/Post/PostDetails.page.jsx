import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Grid, SimpleGrid, useMantineTheme, rem } from '@mantine/core';
import DOMAIN from "../../services/endpoint";
import axios from "axios";
const PRIMARY_COL_HEIGHT = rem(333);
import jwtDecode from "jwt-decode";
import { findUserById } from "../../../../backend/fakedb"
function PostDetailsPage() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  const data = useLoaderData();
  const currentUserId = jwtDecode(localStorage.getItem("jwt_access_token")).id;
  const postId = Number(window.location.pathname.slice(-1)) - 1;

  const currentImgUserId = data['posts'].data[postId].userId;

  const currentImgUserEmail = data['users'].data[currentImgUserId - 1].email;

  const currentImgUserName = currentImgUserEmail.substring(0, currentImgUserEmail.indexOf('@'));
  
  // get logged in user id
  const userId = jwtDecode(localStorage.getItem("jwt_access_token")).id;

 

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(data['posts'].data[postId].title);
  const [updatedCategory, setUpdatedCategory] = useState(data['posts'].data[postId].category);
  const [updatedContent, setUpdatedContent] = useState(data['posts'].data[postId].content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    data['posts'].data[postId].title = updatedTitle;
    data['posts'].data[postId].category = updatedCategory;
    data['posts'].data[postId].content = updatedContent;
    setIsEditing(false);
  };

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <img src={data['posts'].data[postId].image } style={{ borderRadius: "10px", width: "300px" }}/>
        <Grid gutter="md">
          <Grid.Col>
              <p>{currentImgUserName}</p>
          </Grid.Col>
          <Grid.Col>
            {isEditing ? (
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            ) : (
              <p>{data['posts'].data[postId].title}</p>
            )}
          </Grid.Col>
          <Grid.Col>
            {isEditing ? (
              <input
                type="text"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
              />
            ) : (
              <p>{data['posts'].data[postId].category}</p>
            )}
          </Grid.Col>
          <Grid.Col>
            {isEditing ? (
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
            ) : (
              <p>{data['posts'].data[postId].content}</p>
            )}
          </Grid.Col>
          <Grid.Col>
            {currentImgUserId === currentUserId ? (
              isEditing ? (
                <button onClick={handleUpdateClick}>Update</button>
              ) : (
                <button onClick={handleEditClick}>Edit</button>
              )
            ) : null}
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}


//oct 26 class 
//get api to run
export const postDetailsLoader = async () => {
  

  const post = await axios.get(`${DOMAIN}/api/posts/`);
  const user = await axios.get(`${DOMAIN}/api/users/`);

  const dataGroup = {
    posts: post,
    users: user,
  };
  return dataGroup;
};

export default PostDetailsPage;
