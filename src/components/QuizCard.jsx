import React from "react";
import ThemedButton from "./ThemedButton";

function QuizCard() {
  return (
    <div
      className="p-0 w-25"
      style={{
        borderRadius: "15px",
        border: "3px solid initial",
        background: " #FFF",
        // width:"30%",
        /* Shadow for cards */
        boxShadow: "0px 4px 4px 0px rgba(180, 172, 172, 0.20)",
      }}
    >
      <img
        src="../src/assets/card1.jpeg"
        alt="img-card"
        height={"150px"}
        width={"100%"}
        style={{
            borderRadius: "15px 13px 0 0",}}
      />
      <section className="p-4">
      <h3>Interactive Flashcards</h3>
      <p>Master key concepts and boost retention with .</p>
      <ThemedButton content={"Take Quiz"} propWidth={"50%"}/>
      </section>
    </div>
  );
}

export default QuizCard;
