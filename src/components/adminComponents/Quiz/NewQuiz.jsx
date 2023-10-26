
export function NewQuiz() {
  return (
    <div className='rounded-5'>
        <div className='background'>
        <section className="py-3">
          <div className="container p-0">
            <div className="row mb-4">
              <div className="col-md-4 col-xl-10 text-center m-auto bg-light p-2 mt-3 rounded-5">
                <h3 className="p-2">Create New Quiz</h3>
              </div>
            </div>
          </div>

        <form className='col-md-8 m-auto p-3'>

        <div className="title mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Quiz name</label>
          <input type="text" className="form-control rounded-5 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
        </div>
        
        <div className='subject mb-3'>
            <label htmlFor="gender" className="form-label px-3">Subject</label>
            <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select your Subject</option>
                <option value="1">Mathematics</option>
                <option value="2">Physics</option>
            </select>
        </div>  

        <div className="description mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Description</label>
          <input type="menu" className="form-control rounded-5 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
        </div>
        
        <div className="gradeLvl mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Grade level</label>
            <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select your Grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
            </select>
        </div>

        <div className="Term mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label px-3">Term</label>
            <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select your Term</option>
                <option value="1">1st Term</option>
                <option value="2">2nd Term</option>
            </select>
        </div>

        <div className="unit mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Unit</label>
          <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select your Unit</option>
                <option value="1">Unit 1</option>
                <option value="2">Unit 2</option>
            </select>      
        </div>

        <div className="Chapter mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Chapter</label>
          <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select your Chapter</option>
                <option value="1">Chapter 1</option>
                <option value="2">Chapter 2</option>
            </select>
        </div>

        <div className="Lesson mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Lesson</label>
          <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select your Lesson</option>
                <option value="1">Lesson 1</option>
                <option value="2">Lesson 2</option>
            </select>
        </div>

        {/**------------------------------------------ */}
        <div className='my-5'>
          <hr />
        </div>

        <div className="PassingScore mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Passing Score</label>
          <input type="number" className="form-control rounded-5 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Difficulty level</label>
          <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select Difficulty level</option>
                <option value="1">Easy</option>
                <option value="2">Intermediate</option>
                <option value="3">Hard</option>
            </select>
        </div>

        <div className="Duration mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Quiz duration</label>
          <div className="input-group mb-3">
            <input type="time" className="form-control rounded-5 p-3" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary rounded-5 p-3 mx-5" type="submit" id="button-addon2">Submit</button>
          </div>
        </div>

        <div className="Deadline mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Quiz deadline date</label>
          <input type="date" className="form-control rounded-5 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
        </div>
        
        <div className="Privacy mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">privacy</label>
          <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select Quiz Privacy</option>
                <option value="1">Public</option>
                <option value="2">Private class</option>
            </select>
        </div>

        <div className="class mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Select Class</label>
          <select className="form-select rounded-5 p-3" name="gender" >
                <option value="0">Select Class</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
            </select>
        </div>
        
        <div className='mb-3 m-auto col-md-6'>
              <button type="submit" className="btn btn-primary rounded-5 p-3 w-100">Submit</button>
        </div>
          </form>

        </section>
      </div>
    </div>
  )
}
