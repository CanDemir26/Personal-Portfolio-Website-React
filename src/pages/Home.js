import {Link} from "react-router-dom"

export default function Home() {
  return (
    
    <section>
      <div className="content">
        <h1>MUSTAFA CAN <span className="colored">DEMIR</span> </h1>
        <h2 className="home-job"> <span>Frontend</span> Developer</h2>
        <Link to='/contact' className='contact-btn'>Get In Touch </Link>
      </div>
      </section>
  
  )
}
