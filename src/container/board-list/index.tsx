import React from "react";
import { Grid, Row, Col } from "../../component/grid/styles";
import * as S from "./styles";

import BoardItem from "../../component/board-item";

interface BoardListProps {}

const BoardList: React.FC<BoardListProps> = () => {
  return (
    <S.BoardList>
      <Grid>
        <Row>
          <Col span={3}>
            <BoardItem />
          </Col>
          <Col span={3}>
            <BoardItem />
          </Col>
          <Col span={3}>
            <BoardItem />
          </Col>
          <Col span={3}>
            <BoardItem />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <BoardItem />
          </Col>
          <Col span={3}>
            <BoardItem />
          </Col>
          <Col span={3}>
            <BoardItem />
          </Col>
          <Col span={3}>
            <BoardItem />
          </Col>
        </Row>
      </Grid>
    </S.BoardList>
  );
};

export default BoardList;
