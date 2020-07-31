import styled from "styled-components/macro";
import { THEME_COLOR } from "../../constants";

export const Post = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-top: 1rem;
`;

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
`;

export const Title = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
`;

export const PostTitleContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const PostMetaContainer = styled.div`
  width: 100%;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid black;
  padding: 0.5rem 0.5rem;
  background-color: ${THEME_COLOR.SECONDARY};
`;

export const PostWriter = styled.div`
  font-size: 1.4rem;
  color: white;
`;

export const PostContentContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostContent = styled.div`
  font-size: 1.4rem;
  line-height: 2.24rem;
  border-bottom: 2px solid ${THEME_COLOR.GRAY};
  padding-bottom: 6rem;
`;
export const PostAlbum = styled.div`
  width: 20rem;
  height: 20rem;
  background: red;
`;

export const NewCommentContainer = styled.div`
  width: 100%;
  margin: 1rem 0rem;
  border: 1px solid ${THEME_COLOR.GRAY};
  border-radius: 0.5rem;
`;

export const NewCommentMetaContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${THEME_COLOR.GRAY};
`;

export const NewCommentLabel = styled.div`
  font-size: 1.3rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${THEME_COLOR.PRIMARY};
  border: none;
  font-size: 1.6rem;
`;

export const NewComment = styled.textarea`
  width: 100%;
  border: none;
  border-top: 1px solid ${THEME_COLOR.GRAY};
  padding: 1rem;
  line-height: 2.24rem;
`;
