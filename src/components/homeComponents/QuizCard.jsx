import { Col } from "react-bootstrap";
import ThemedButton from "../layout/ThemedButton";
import '../../assets/css/Home.css'


function QuizCard({imgSrc , info}) {
  return (

  <>
      <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="port-card card  border-0 shadow-lg  mb-5 bg-body rounded mx-2" >
                    <div class="port-img">
                        <img src={imgSrc} class="card-img-top" alt="work-1"/>
                    </div>
                    <div class=" card-body bg-light  my-3 d-flex justify-content-between b">
                        <div class="port-info">
                            <h4>{info}</h4>
                            <h5><span>QuizZAD </span>/ 5 Sep. 2023</h5>
                        </div>
                        <div class="port-icon border rounded-circle mx-2 d-flex justify-content-center align-items-center">
                            <i class="fas fa-plus"></i>                        
                        </div>
                    </div>
                </div>
            </div>  
    </>
    



    // <Col 
    //   className="p-0 my-3 mx-3 quizCard"
    //   md={5} 
    //   xs={8}
    //   lg={3}
    //   style={{
    //     borderRadius: "15px",
    //     border: "3px solid initial",
    //     boxShadow:"0px 0px 15px 3px rgba(0,0,0,0.45)"
    //   }}
    // >
    //   <img
    //     src={imgSrc}
    //     alt="img-card"
    //     height={"150px"}
    //     width={"100%"}
    //     style={{
    //         borderRadius: "15px 13px 0 0",}}
    //   />
    //   <section className="p-4">
    //   <h5>Interactive Flashcards</h5>
    //   <p>Master key concepts and boost retention with .</p>
    //   <ThemedButton content={"Take Quiz"} propWidth={"50%"} propPadding={"1.5% 0"}/>
    //   </section>
    // </Col>
  );
}

export default QuizCard;
