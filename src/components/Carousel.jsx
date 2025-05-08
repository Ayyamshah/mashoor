// import React, { useEffect, useState } from "react";

// const images = [
//   "/public/IMG_carousel01.webp",
//   "/public/IMG_carousel02.webp",
//   "/public/IMG_carousel03.webp",
//   "/public/IMG_carousel04.webp"
// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div style={styles.carousel}>
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         style={styles.image}
//       />
//     </div>
//   );
// }

// const styles = {
//   carousel: {
//     width: "100%",
//     height: "100%",
//     overflow: "hidden",
//     position: "relative",
//     margin: "auto",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//     transition : "0.5s"
//   },
//   image: {
//     position: "absulute",
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     transition: "opacity 0.5s ease-in-out",
    
//   }
// };
import React, { useEffect, useState } from "react";

const images = [
  "/IMG_carousel01.webp",
  "/IMG_carousel02.webp",
  "/IMG_carousel03.webp",
  "/IMG_carousel04.webp",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.carousel}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          style={{
            ...styles.image,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Buttons */}
      <button onClick={handlePrev} style={{ ...styles.btn, left: "10px" }}>
        ❮
      </button>
      <button onClick={handleNext} style={{ ...styles.btn, right: "10px" }}>
        ❯
      </button>
    </div>
  );
}

const styles = {
  carousel: {
    width: "100%",
    maxWidth: "100%",
    height: "650px",
    overflow: "hidden",
    position: "relative",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 1s ease-in-out",
  },
  btn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "24px",
    zIndex: 2,
  },
};
