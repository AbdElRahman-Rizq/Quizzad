import { Col } from "react-bootstrap";
import ThemedButton from "../layout/ThemedButton";

function QuizCard() {
  return (
  
    <Col 
      className="p-0 m-4  quizCard"
      md={5} 
      xs={10}
      lg={3}
      style={{
        borderRadius: "15px",
        border: "3px solid initial",
        boxShadow:"0px 0px 15px 3px rgba(0,0,0,0.45)"
      }}
    >
      <img
        src="../src/assets/images/card1.jpeg"
        alt="img-card"
        height={"150px"}
        width={"100%"}
        style={{
            borderRadius: "15px 13px 0 0",}}
      />
      <section className="p-4">
      <h5>Interactive Flashcards</h5>
      <p>Master key concepts and boost retention with .</p>
      <ThemedButton content={"Take Quiz"} propWidth={"50%"} propPadding={"1.5% 0"}/>
      </section>
    </Col>
  );
}

export default QuizCard;
