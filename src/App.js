// import reset from "styled-reset";
// import { createGlobalStyle } from "styled-components";
import {
  HoverCards,
  Container, 
  Content
} from "./style/default_card";


function App() {

  return (
    <HoverCards>
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
    </HoverCards>
  );
}

export default App;
