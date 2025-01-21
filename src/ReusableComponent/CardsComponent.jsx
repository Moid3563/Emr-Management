import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import '../Style/_cards.scss';

const cardData = [
  { title: "Today's Queue", value: 10, active: true },
  { title: 'Upcoming', value: 10, active: false },
  { title: 'Completed', value: 10, active: false },
  { title: 'Unpaid', value: 10, active: false },
];

const CardsComponent = () => {
  return (
    <Box className="cards-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className={`card ${card.active ? 'active' : ''}`}
          variant="outlined"
        >
          <CardContent className="card-content">
            <Box className="icon-placeholder" />
            <Typography variant="body2" className="card-title">
              {card.title}
            </Typography>
            <Typography variant="h6" className="card-value">
              {card.value}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CardsComponent;
