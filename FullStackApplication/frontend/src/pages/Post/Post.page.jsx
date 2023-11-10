
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { SimpleGrid, Container } from "@mantine/core";
import { Await, useLoaderData } from "react-router-dom";
import {Loader} from "@mantine/core";
import React from "react";

export const PostPage = () => {
  const posts = useLoaderData();

  return (
    <Container>
      <React.Suspense fallback={<Loader  />}>
        <Await
          resolve={posts}
          errorElement={
            <div>Could not load posts 😬</div>
          }
        >
   
          <SimpleGrid cols={3}>
            {posts?.map((post) => (
              <ArticleCardImage key={post.title} {...post} />
            ))}
          </SimpleGrid>
        </Await>
      </React.Suspense>
    </Container>
  );
};

//oct 26 define a loader
export const postsLoader = async () => {
  const res =  await axios.get(`${DOMAIN}/api/posts`);
 return res.data;
};

