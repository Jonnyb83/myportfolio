// Card.js
import React from 'react';
import "./card.css";

const Card = ({ id, name, imgsrc, title, aboutone, abouttwo, aboutthree, button, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="card">
        <img src={imgsrc} alt={name} className="card_image" />
        <div className="card_text">
            <h2 className="card_title">{title}</h2>
            <p className="card_about">{aboutone}</p>
            <p className="card_about">{abouttwo}</p>
            <p className="card_about">{aboutthree}</p>
        <button className="card_button" onClick={handleClick}>
            {button}
        </button>
      </div>
    </div>
  );
};

export default Card;




































// import React from 'react';
// import "./card.css";



// const Card = ({ label, url }) => {
//     const handleClick = () => {
//       window.location.href = url;
//     };

// function Card(props) {
//     return (
//         <div className='card'>
//             <div>
//              <img src={props.img} className="image_2" alt="" />
//             </div>
//             <div className='card_text'>
//              <h2>{props.name}</h2>
//              <h3>{props.title}</h3>
//              <p>{props.aboutone}
//              <br/>{props.abouttwo}
//                 <br/>{props.aboutthree}
//              </p>
//              <div>
//              <div className="card">
//             <button className="card_button" onClick={handleClick}>
//                 {label}
//             </button>
//     </div>
//              </div>
//             </div>
            
            
//         </div>
//     );
// }

// export default Card;


// //old

// // const Card = () => {
// //     return (
//         // <div className='card'>
//         //     <div>
//         //      <img src={img2} className="image_2" alt="" />
//         //     </div>
//         //     <div className='card_text'>
//         //      <h2>E-commerce app</h2>
//         //      <h3>React | JSX | CSS | HTML</h3>
//         //      <p>Easy way how to build e-commerce app
//         //      <br/>This is Front-end project!
//         //         <br/>Demo version
//         //      </p>
//         //      <div>
//         //         <button className="card_button">SHOW ME</button>
//         //      </div>
//         //     </div>
            
            
//         // </div>
// //     )
// // }