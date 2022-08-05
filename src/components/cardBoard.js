import {
  Container, 
  Content
} from "../style/default_card";

function CardBoard({el, openModal}) {

  return (
    <Container>
      <li className="card">
        <div className="box">
          <Content>
            <h2>{Number(el.id) < 10 ? "0" + el.id : el.id }</h2>
            <h3>userId : {el.userId}</h3>
            <p>title : {el.title}</p>
            <button onClick={() => openModal(el.id)}>Read More</button>
          </Content>
        </div>
      </li>
    </Container>
  );
}

export default CardBoard;