import React from 'react';
import pandaImage from '../assets/catarina.jpeg';
import PersonalCSS from '../style/PersonalInfo.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing Bootstrap icons
import { TfiEmail } from "react-icons/tfi";

const PersonalInfo = () => {
  return (
    <div className="personal-info container mt-6">
      <div className={PersonalCSS.cardBody}>
        <div className="row no-gutters">

          <div className="col-md-8">
            <div className="card-body">
              <h2 className={PersonalCSS.cardTitle}>Hello, I'm</h2>
              <p className={PersonalCSS.cardText}>
                <h2>Catarina Kaucher</h2>
              </p>
              <p className={PersonalCSS.cardText}>
                I am a student whose goal is to work with technology and become a Software Developer. <br></br>
                I am currently seeking to gain hands-on experience and learn from industry experts.
              </p>
              <p className={PersonalCSS.cardText}>
                <TfiEmail /><strong>Email:</strong> catarinakaucher@gmail.com
              </p>
              <div className="d-flex justify-content-center">
                {/* LinkedIn Button */}
                <a href="https://www.linkedin.com/in/catarina-kaucher-45a4b6298/" target="_blank" rel="noopener noreferrer" className={`btn btn-primary me-2 ${PersonalCSS.socialButton}`}>
                  <FaLinkedin /> LinkedIn
                </a>
                {/* GitHub Button */}
                <a href="https://github.com/CatarinaK1" target="_blank" rel="noopener noreferrer" className={`btn btn-dark ${PersonalCSS.socialButton}`}>
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={pandaImage}
                alt="Pikku Panda"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '400px' }} // Adjust the maximum width as needed
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};






// const PersonalInfo = () => {
//   return (
//     <div className="personal-info container mt-5">
//       <div className="card mb-3 shadow">
//         <div className="row no-gutters">
//           <div className="col-md-4">
//             <img
//               src={pandaImage}
//               alt="Pikku Panda"
//               className="img-fluid rounded-start"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title">Personal Information</h2>
//               <p className="card-text">
//                 <strong>Name:</strong> Catarina Kaucher
//               </p>
//               <p className="card-text">
//                 <strong>Email:</strong> pikku.panda@animal.com
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


export default PersonalInfo;