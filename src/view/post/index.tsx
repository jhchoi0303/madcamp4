import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const Post: React.FC = () => {
  return (
    <Layout>
      <S.Post>
        <S.PostContainer>
          <S.TitleContainer>
            <S.Title>게시판</S.Title>
          </S.TitleContainer>
          <S.PostTitleContainer>
            <S.PostTitle>앨범 제목</S.PostTitle>
          </S.PostTitleContainer>
          <S.PostMetaContainer>
            <S.PostWriter>아티스트 이름</S.PostWriter>
          </S.PostMetaContainer>
          <S.PostContentContainer>
            <S.PostContent>
              <div>겁이나 겁이나 예아~</div>
            </S.PostContent>

            <S.PostAlbum></S.PostAlbum>
          </S.PostContentContainer>
          <S.NewCommentContainer>
            <S.NewCommentMetaContainer>
              <S.NewCommentLabel>댓글 달기</S.NewCommentLabel>
              <S.SubmitButton>▶</S.SubmitButton>
            </S.NewCommentMetaContainer>
            <S.NewComment />
          </S.NewCommentContainer>
        </S.PostContainer>
      </S.Post>
    </Layout>
  );
};

export default Post;
