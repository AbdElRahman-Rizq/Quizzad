import '../../../assets/css/class.css'

export function NewClass() {
  return (
    <div className='rounded-5'>
        <div className='background'>
        <section className="container py-1">
            <div className="row mb-3">
              <div className="col-md-4 col-xl-10 text-center m-auto bg-light p-2 mt-2 rounded-4">
                <h3 className="p-2">Create New Class</h3>
              </div>
            </div>

        <form className='col-md-8 m-auto p-4 rounded-4 newForm'>
          <div className='col-md-10 m-auto'>
            
        <div className="title mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-3">Class Name</label>
          <input type="text" className="form-control rounded-5 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
        </div>
        
        <div className='subject mb-3'>
            <label htmlFor="Subject" className="form-label px-3">Subject</label>
            <select className="form-select rounded-5 p-3 bg-light" name="Subject" >
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

        
        <div className='mb-3 m-auto col-md-6'>
              <button type="submit" className="btn btn-outline-light rounded-5 p-3 w-100 fs-5">Create Class</button>
        </div>
          </div>
        </form>

        </section>
      </div>
    </div>
  )
}
