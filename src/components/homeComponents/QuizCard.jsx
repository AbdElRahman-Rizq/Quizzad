import React from "react";
import ThemedButton from "../ThemedButton";

function QuizCard() {
  return (
    <div 
      className="p-0 w-25 quizCard"
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
    </div>
  );
}

export default QuizCard;