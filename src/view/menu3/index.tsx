import React, { useState } from "react";

import * as S from "./styles";
import Modal from "../../component/modal";
import Layout from "../../component/layout";
import BoardList from "../../container/board-list";
import PaginationBar from "../../container/pagination-bar";

import { STATIC_URL } from "../../constants";

const Menu3: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Layout>
      <S.Board>
        <S.TitleContainer>
          <S.Title>게시판</S.Title>
        </S.TitleContainer>
        <S.BoardToolsContainer>
          <img
            onClick={toggleModal}
            src={STATIC_URL.MAGNIFYING_GLASS_ICON}
            alt="magnifying-glass"
          />
          <S.WriteButton to="write">글쓰기</S.WriteButton>
        </S.BoardToolsContainer>
        <S.BoardContainer>
          <S.BoardListContainer>
            <BoardList />
          </S.BoardListContainer>
        </S.BoardContainer>
        <S.PaginationContainer>
          <PaginationBar />
        </S.PaginationContainer>
      </S.Board>
      <Modal show={showModal} toggleModal={toggleModal}>
        <S.ModalContainer>
          <S.ModalHeader>검색</S.ModalHeader>
          <S.ModalSearchSelect>
            <S.ModalSearchOption>제목 + 내용</S.ModalSearchOption>
            <S.ModalSearchOption>제목</S.ModalSearchOption>
            <S.ModalSearchOption>내용</S.ModalSearchOption>
            <S.ModalSearchOption>댓글</S.ModalSearchOption>
            <S.ModalSearchOption>닉네임</S.ModalSearchOption>
          </S.ModalSearchSelect>
          <S.ModalSearchInput placeholder="검색" />
          <S.ModalSearchButtons>
            <S.ModalSearchButton search>확인</S.ModalSearchButton>
            <S.ModalSearchButton>취소</S.ModalSearchButton>
          </S.ModalSearchButtons>
        </S.ModalContainer>
      </Modal>
    </Layout>
  );
};

export default Menu3;
