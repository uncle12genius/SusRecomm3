// import React from "react";
// import { useInView } from "react-intersection-observer";
// import "./../styles/Ourcore.css";

// const Ourcore = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const cards = [
//     {
//       title: "Partnership",
//       content: "We foster enduring collaborations with clients, experts, and communities to achieve impactful results.",
//       icon: "🤝", 
//     },
//     {
//       title: "Results",
//       content: "Delivering measurable impacts aligned with our mission of creating sustainable futures.",
//       icon: "📊",
//     },
//     {
//       title: "Integrity",
//       content: "Upholding transparency and accountability in all our endeavors.",
//       icon: "🔍", 
//     },
//     {
//       title: "Trust",
//       content: "Building and maintaining trust as the foundation of our relationships and operations.",
//       icon: "🛡️", 
//     },
//     {
//       title: "Efficiency",
//       content: "Combining creativity and practicality to deliver economic and effective solutions.",
//       icon: "⚡", 
//     },
//   ];

//   return (
//     <div id="about" className={`about-section ${inView ? "visible" : ""}`} ref={ref}>
      

//       <div className={`scrolling-card-container ${inView ? "animate" : ""}`}>
//         {cards.map((card, index) => (
//           <div className="scrolling-card" key={index}>
//             <div className="scrolling-card-inner">
//               <div className="card-icon">{card.icon}</div>
//               <h3>{card.title}</h3>
//               <p>{card.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ourcore;
