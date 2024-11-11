


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// export default function SignUp() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: ""
//   });

//   const clearForm = () => {
//     setCredentials({
//       name: "",
//       email: "",
//       password: "",
//       geolocation: ""
//     });
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/createuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation
//       })
//     });
//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert("Enter Valid Credentials");
//     }
//     else{
//       alert("Registration Successful")
//     }

    
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//      <Navbar/>
//     <div className='fluid-container'>
//       <div className='row'>
//         <div className='col-12 bgc' style={{"backgroundColor":"rgb(243, 170, 61)","marginTop":"5px" }}>
//           <h3 className='h' style={{"fontSize":"35px","fontWeight":"600"}}>FRESH AND ORGANIC</h3>
//           <h1 className='sh'style={{"fontSize":"35px","fontWeight":"600"}}>SignUp Here</h1>
//         </div>
//       </div>
//    </div>
//    <br></br>
//    <br></br>
//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="Name" className="form-label">Name</label>
//             <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange}></input>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}></input>
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}></input>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="Address" className="form-label">Address</label>
//             <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}></input>
//           </div>

//           <button type="submit" className="btn btn-success" >Submit</button>
//           <Link to="/login" className=" m-3 btn btn-danger">Already A User</Link>
//         </form>
//       </div>
//       <br></br>
//       <br></br>
//     <Footer/>
//     </>
//   );
// }


// new code 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  });

  const clearForm = () => {
    setCredentials({
      name: "",
      email: "",
      password: "",
      geolocation: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      })
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    else {
      alert("Registration Successful");
      clearForm(); // Clear form after successful registration
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className='fluid-container'>
        <div className='row'>
          <div className='col-12 bgc' style={{ "backgroundColor": "rgb(243, 170, 61)", "marginTop": "5px" }}>
            <h3 className='h' style={{ "fontSize": "35px", "fontWeight": "600" }}>FRESH AND ORGANIC</h3>
            <h1 className='sh' style={{ "fontSize": "35px", "fontWeight": "600" }}>SignUp Here</h1>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="Address" className="form-label">Address</label>
            <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}></input>
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/login" className=" m-3 btn btn-danger">Already A User</Link>
        </form>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
