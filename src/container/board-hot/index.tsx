import React from "react";
import { Grid, Row, Col } from "../../component/grid/styles";
import * as S from "./styles";

import HotBoardItem from "../../component/boardhot-item";

interface BoardHotProps {}

const BoardHot: React.FC<BoardHotProps> = () => {
  return (
    <S.BoardHot>
      <Grid>
        <Row>
          <Col span={2} offset={1}>
            <HotBoardItem />
          </Col>
          <Col span={2} offset={0.5}>
            <HotBoardItem />
          </Col>
          <Col span={2} offset={0.5}>
            <HotBoardItem />
          </Col>
          <Col span={2} offset={0.5}>
            <HotBoardItem />
          </Col>
        </Row>
      </Grid>
    </S.BoardHot>
  );
};

export default BoardHot;
