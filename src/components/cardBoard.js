import {
  Container, 
  Content
} from "../style/default_card";

function CardBoard() {

  return (
    <Container>
      <li className="card">
        <div className="box">
          <Content>
            <h2>{"id"}</h2>
            <h3>userId : {"1"}</h3>
            <p>title : {"title"}</p>
            <a href>Read More</a>
          </Content>
        </div>
      </li>
    </Container>
  );
}

export default CardBoard;
