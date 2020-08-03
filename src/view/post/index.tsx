import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import { Grid, Row, Col } from "../../component/grid/styles";

const Post: React.FC = () => {
  fetch('/input')
    .then((response) => {
      console.log(response.body);
    });
  return (
    <Layout>
      <S.Post>
        <S.PostContainer>
          <S.TitleContainer>
            <S.Title>게시판</S.Title>
          </S.TitleContainer>

          <S.ContentContainer>
            <Grid>
              <Row>
                <Col span={4} offset={4}>
                  <S.PostTitleContainer>
                    <S.PostTitle>앨범 제목</S.PostTitle>
                  </S.PostTitleContainer>
                </Col>
              </Row>
            </Grid>
            <Grid>
              <Row>
                <Col span={4} offset={4}>
                  <S.PostMetaContainer>
                    <S.PostWriter>아티스트 이름</S.PostWriter>
                  </S.PostMetaContainer>
                </Col>
              </Row>
            </Grid>
            <S.PostContentContainer>
              <S.PostIntro>
                <Grid>
                  <Row>
                    <Col span={3} offset={3}>
                      <S.PostAlbumContainer>
                        <S.PostAlbum src="https://pgnqdrjultom1827145.cdn.ntruss.com/img/df/18/df18b81ae04bb8e9477fb4bfb18c5ad83b876c5fdef9f0b2f9779942a3ed8555_v1.jpg"></S.PostAlbum>
                        <S.Darkness></S.Darkness>
                        <S.PlayButton>
                          <S.Triangle></S.Triangle>
                        </S.PlayButton>
                      </S.PostAlbumContainer>
                    </Col>
                    <Col span={5}>
                      <S.PostWaveForm src="https://davidwalsh.name/demo/waveformjs.png"></S.PostWaveForm>
                    </Col>
                  </Row>
                </Grid>
              </S.PostIntro>

              <Grid>
                <Row>
                  <Col span={4} offset={4}>
                    <S.PostContent>
                      <div>곡 소개 : 겁이나 겁이나 예아~</div>
                    </S.PostContent>
                  </Col>
                </Row>
              </Grid>
            </S.PostContentContainer>

            <Grid>
              <Row>
                <Col span={6} offset={3}>
                  <S.NewCommentContainer>
                    <S.NewCommentMetaContainer>
                      <S.NewCommentLabel>댓글 달기</S.NewCommentLabel>
                      <S.SubmitButton>▶</S.SubmitButton>
                    </S.NewCommentMetaContainer>
                    <S.NewComment />
                  </S.NewCommentContainer>
                </Col>
              </Row>
            </Grid>
          </S.ContentContainer>
        </S.PostContainer>
      </S.Post>
    </Layout>
  );
};

export default Post;
