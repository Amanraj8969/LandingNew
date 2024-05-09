import React, { useState } from 'react';
import Landing from '../Landing/Landing';
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Kathak Dance',
      image: '/images/kathak.jpg',
      description: 'Kathak is one of the eight major forms of Indian classical dance...',
      teacher: 'Ms. Radha Sharma',
    },
    {
      id: 2,
      title: 'Bharatnatyam Dance',
      image: '/images/bharatnatyam.jpg',
      description: 'Bharatanatyam is a major genre of Indian classical dance...',
      teacher: 'Mr. Ravi Menon',
    },
    {
      id: 3,
      title: 'Singing',
      image: '/images/singing.jpg',
      description: 'Learn the art of singing with our experienced vocal coaches...',
      teacher: 'Ms. Priya Patel',
    },
  ];

  const toggleModal = (course) => {
    setSelectedCourse(course);
    setModalOpen(!modalOpen);
  };

  return (
    <Landing/>
  );
};

export default Home;
