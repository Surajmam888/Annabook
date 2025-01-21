import React from 'react';
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import Bet_01 from '../assets/images/Betting/Betting_01.jpg';
import Bet_02 from '../assets/images/Betting/Betting_02.webp';
import Bet_03 from '../assets/images/Betting/Betting_03.webp';
import back_anna from '../assets/images/Home/back_anna.avif';
import bat from '../assets/images/Home/bat.avif';

const items = [
  {
    title: "Success Story #1",
    description: "John won big using expert predictions from Reddy Anna!",
    image: Bet_01,
  },
  {
    title: "Success Story #2",
    description: "Jane aced the league with our strategies!",
    image: Bet_02,
  },
  {
    title: "Success Story #3",
    description: "Emily became a pro with Reddy Anna’s betting tips.",
    image: Bet_03,
  },
  {
    title: "Success Story #4",
    description: "Alex dominated with Reddy Anna’s insights.",
    image: Bet_01,
  },
  {
    title: "Success Story #5",
    description: "Chris excelled with our tips and predictions!",
    image: Bet_02,
  },
  {
    title: "Success Story #6",
    description: "Rachel achieved amazing success with Reddy Anna’s guidance.",
    image: Bet_03,
  },
];

const MyCarousel = () => {
  return (
    <Box
      sx={{
        width: 'auto',
        margin: '0 auto',
        padding: { xs: 2, sm: 4 },
        backgroundImage: `url(${bat})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        minHeight: '400px', 
      }}
    >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            marginBottom: 2,
            color:"#ebcf74",
            textAlign: { xs: 'left', md: 'left',lg:'center' },
          }}
        >
          Reddy Anna: Success Stories and Player Testimonials
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: 4, fontWeight: 'bold', lineHeight: 1.5, color:"#fff",textAlign: { xs: 'left', md: 'left',lg:'center' }, }}
        >
          In the realm of online gaming, Reddy Anna Book Official has emerged as a trusted platform, garnering positive reviews and tangible winning proof from its users. The platform's commitment to providing a secure and transparent gaming environment is reflected in the experiences shared by its player community. From diverse game offerings to responsible gaming features, Reddy Book has created a winning formula that resonates with players seeking a reputable online gaming destination. The tangible proof of winnings, combined with favorable reviews, solidifies Reddy Anna's position as a reliable and rewarding platform in the competitive landscape of online gaming.
        </Typography>
      <Carousel
        autoPlay
        interval={4000}
        animation="slide"
        indicators
        navButtonsAlwaysVisible={false}
        duration={700}
        NextIcon={<ArrowForward />}
        PrevIcon={<ArrowBack />}
        navButtonsProps={{
          style: {
            backgroundColor: "#FFD700",
            borderRadius: "50%",
            color: "#000",
            padding: "8px",
          },
        }}
      >
        {items.map((item, index) => {
          const startIndex = index * 3;
          const endIndex = startIndex + 3;
          const itemSet = items.slice(startIndex, endIndex);
          return (
            <Grid
              key={index}
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {itemSet.map((item, subIndex) => (
                <Grid item xs={12} sm={6} md={4} key={subIndex}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "0 auto",
                      borderRadius: 2,
                      boxShadow: 3,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={item.title}
                      height="200"
                      image={item.image}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ backgroundColor: "#000", color: "#FFD700" }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2">{item.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default MyCarousel;
