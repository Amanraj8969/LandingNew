import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Footer from "app/shared/layout/footer/footer";
import { useNavigate } from "react-router";
import "./Landing.scss"

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Landing() {
  const [showFAQ, setShowFAQ] = useState(false);

  const navigate=useNavigate();

  const handlebookbutton=()=>{
    const authToken = sessionStorage.getItem("jhi-authenticationToken");
    if(authToken){
        navigate("/")
    }
    else{
        navigate("/login")
    }
  }

  const handleToggleFAQ = () => {
    setShowFAQ(!showFAQ); // Toggle FAQ visibility on button click
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#34478C",
          padding: "20px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
          >
            <Typography variant="h3" sx={{ fontWeight: "700", color: "white" }}>
            Kathak Dance Workshop: <br></br>Discover the Art of Kathak
            </Typography>
          </Box>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography  sx={{ color: "white" }}>
            Embrace the elegance and grace of Kathak dance through our comprehensive workshop. Learn the intricate footwork, expressive gestures, and rhythmic patterns that define this classical dance form.
    
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              margin: "20px",

              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid ",
                backgroundColor: "#564AE4",
                color: "white",
                width: "150px",
                padding: "20px",
                margin: "5px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography>22+ hours</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid ",
                backgroundColor: "#564AE4",
                color: "white",
                width: "150px",
                padding: "20px",
                margin: "5px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography>Live Session</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              margin: "20px",

              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid ",
                backgroundColor: "#564AE4",
                color: "white",
                width: "150px",
                padding: "20px",
                margin: "5px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography>21st May</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid ",
                backgroundColor: "#564AE4",
                color: "white",
                width: "150px",
                padding: "20px",
                margin: "5px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography>Get Certificate</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button
            onClick={handlebookbutton}
            sx={{
              backgroundColor: "#14CDA1",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, #14CDA1, #64F3DA)",
              transition: "background-image 0.3s ease-in-out",
              "@keyframes sparkle": {
                "0%": { backgroundPosition: "left -5px top -5px" },
                "50%": { backgroundPosition: "right -5px top -5px" },
                "100%": { backgroundPosition: "left -5px top -5px" },
              },
            }}
            >
            
                I want to Book my Seat
              
            </Button>
  

          </Box>

          <Box
            sx={{
              width: "100%",

              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#564AE4",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
              }}
            >
               Timing: Every Tuesday & Thursday, 6:00 PM to 7:30 PM [LIVE]
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "30%" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Kathak_contemporary_03.jpg"
              alt="dance image"
              style={{
                height: "60vh",
                width: "80%",
                borderRadius: "30px",
                marginTop: "50px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* second box */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#E1E6FB",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
          What You Will Learn in This Kathak Dance Workshop?
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "20px",
            display: "flex",
            flexDirection:{xs:"column",sm:"row"},
            justifyContent:"space-evenly"

          }}
        >

          {/* first question container box */}
          <Box sx={{ border: "2px solid", margin: "5px", padding: "10px" }}>
  <Box sx={{ width: "100%", marginY: "10px" }}>
    <Typography variant="h5">
      <span>
        <CheckCircleIcon />
      </span>{" "}
      Fundamental Kathak Dance Techniques
    </Typography>
    <Typography sx={{ textAlign: "justify", fontSize: "1rem" }}>
      Master the foundational techniques of Kathak dance, including footwork
      (tatkar), hand gestures (mudras), and rhythmic patterns (taals).
    </Typography>
  </Box>

  <Box sx={{ width: "100%", marginY: "10px" }}>
    <Typography variant="h5">
      <span>
        <CheckCircleIcon />
      </span>{" "}
      Expressive Abhinaya (Facial Expressions)
    </Typography>
    <Typography sx={{ textAlign: "justify", fontSize: "1rem" }}>
      Dive into the art of abhinaya, learning how to convey emotions and stories
      through facial expressions, eye movements, and body language.
    </Typography>
  </Box>

  <Box sx={{ width: "100%", marginY: "10px" }}>
    <Typography variant="h5">
      <span>
        <CheckCircleIcon />
      </span>{" "}
      Kathak Repertoire and Choreography
    </Typography>
    <Typography sx={{ textAlign: "justify", fontSize: "1rem" }}>
      Explore classical Kathak repertoire and learn choreographies that showcase
      the richness and versatility of this dance form.
    </Typography>
  </Box>
</Box>
 {/* second box for question container */}
 <Box sx={{ border: "2px solid", margin: "5px", padding: "10px" }}>
  <Box sx={{ width: "100%", marginBottom: "10px" }}>
    <Typography variant="h5">
      <span>
        <CheckCircleIcon />
      </span>{" "}
      Musicality and Rhythmic Mastery
    </Typography>
    <Typography>
      Enhance your understanding of Kathak's musical intricacies, including
      taals (rhythmic cycles), layakari (rhythmic variations), and laya (tempo).
    </Typography>
  </Box>

  <Box sx={{ width: "100%", marginBottom: "10px" }}>
    <Typography variant="h5">
      <span>
        <CheckCircleIcon />
      </span>{" "}
      Performance Skills and Stage Presence
    </Typography>
    <Typography>
      Develop confidence in performing Kathak on stage, focusing on stage
      presence, expressions, and storytelling through dance.
    </Typography>
  </Box>

  <Box sx={{ width: "100%", marginBottom: "10px" }}>
    <Typography variant="h5">
      <span>
        <CheckCircleIcon />
      </span>{" "}
      Career Guidance and Artistic Development
    </Typography>
    <Typography>
      Gain insights into building a career in Kathak, receiving guidance on
      further artistic development and opportunities in the dance industry.
    </Typography>
  </Box>
</Box>
        

        

         

         

        

         


        </Box>
      </Box>

      {/* third box */}
      <Box
  sx={{
    width: "100%",
    backgroundColor: "#34478C",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color:"white"
  }}
>
  <Box sx={{ width: "100%", textAlign: "center" }}>
    <Typography variant="h4" sx={{ fontWeight: "700" }}>
      Who  Will Teach in This Kathak Dance Workshop?
    </Typography>
  </Box>
  <Box
    sx={{
      width: "100%",
      padding: "20px",
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      justifyContent: "space-evenly",
      alignItems: "stretch",
      borderRadius:"10px"
    }}
  >
    {/* first question container box */}
    <Box sx={{ border: "2px solid", margin: "5px", padding: "10px", height: "274px",textAlign:"center" ,borderRadius:"10px"}}>
      <Typography variant="h5">Know Your Teacher</Typography>
      <Typography >
        Name: Ananya Sharma
        <br />
        Certification: Kathak Praveshika from Nalanda Dance University
        <br />
        Achievements: Winner of National Kathak Competition 2018
        <br />
        Experience: 10 years of teaching Kathak
      </Typography>
    </Box>

    {/* second box for question container */}
    <Box sx={{ border: "2px solid", margin: "5px", padding: "10px", height: "100%",   borderRadius:"10px" }}>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQFGhyVHH7XyyA/profile-displayphoto-shrink_800_800/0/1664529687756?e=2147483647&v=beta&t=E6f2uLv4Q2gZa_95z8YCdnzQMH2G8tO9tFyuJQwsxPg"
        alt="Teacher"
        style={{ height:"250px", objectFit: "contain" }} // Ensure image fits inside the box
      />
    </Box>
  </Box>
</Box>

      {/* fourth box */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#E1E6FB",
          color: "black",
          padding: "20px",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center", marginBottom: "10px" }}>
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
          Designing the Kathak Workshop
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              margin: "10px",
              height: { xs: "40vh", sm: "30vh" },
              width: "70vw",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              Beginners
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "0.8", sm: "1.0rem" },
              }}
            >
               This level is designed for individuals who are new to Kathak dance and
        wish to build a strong foundation. You'll learn basic footwork, hand
        gestures, and expressions.
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              margin: "10px",
              height: { xs: "40vh", sm: "30vh" },
              width: "70vw",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              Intermediate
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "0.8", sm: "1.0rem" },
              }}
            >
              For dancers with some experience, this level focuses on refining
        techniques, exploring complex compositions, and developing expressive
        skills.
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              margin: "10px",
              height: { xs: "40vh", sm: "30vh" },
              width: "70vw",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              Professional
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "0.8", sm: "1.0rem" },
              }}
            >
                Designed for professional dancers, this level focuses on intricate
        compositions, improvisation, and artistic expression at an advanced
        level of proficiency.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Footer/> */}


    </Box>
  );
}

export default Landing;
