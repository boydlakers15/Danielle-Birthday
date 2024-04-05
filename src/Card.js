// BirthdayCard.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Import CSS file for styling
import Image1 from  "./img/poppy.jpg";
const BirthdayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="centered">
      <div className={`birthdayCard ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardFlip}>
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
          <div className="imageContainer">
            <img
              className="cardImage"
              src="https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/305953226_10227848111297660_970061122527785951_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AI-mFKcQiU4Ab4LMCCL&_nc_ht=scontent-fra5-1.xx&oh=00_AfAa9QAE0hyUOapkN9PX5k1u2kGppQRqIVURzoZefS0KPg&oe=6614BFCC"
              alt="Birthday Slide"
            />
          </div>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <p className="birthdayMessage">
            Dear Babe,
            <br />
            <strong>Happy birthday Baby!!</strong> I hope that you know how much I love you!! I want you to know how proud of you I am and I can't wait to start this new journey with you raising a family.
            I know that it's going to be hard, but I know in my heart that you will be the best mom ever!!!
            <br />
            <strong>Happy Birthday My love</strong>
          </p>
          <hr />
            <br />
          <Slider {...settings}>
            <div>
             <center> <img
                className="imageContainerMiddle"
                src="https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/284461882_10227328693072529_2441571556607513743_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LqcxtyWMW-IAb4eXz6J&_nc_ht=scontent-fra5-1.xx&oh=00_AfAGygjLS69OoPsHze_DQaSQqNlULIlQbjws3AhRUTsK-g&oe=6614BC01"
                alt="Birthday Slide"
                
              /></center>
            </div>
            <div>
               <center> <img
                className="imageContainerMiddle"
                src="https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/294906807_10227639760569022_3448882650652706210_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9am9AesQ79sAb5oBGLs&_nc_ht=scontent-fra5-1.xx&oh=00_AfAQ8fZcIeStL2P1SFBwgsBx8prDsNUQyKTyTJLhBzdRJQ&oe=6614C956"
                alt="Birthday Slide"
                
              /></center>
            </div>
            <div>
             <center> <img
                className="imageContainerMiddle"
                src="https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/241632224_10225974926429209_1212843652303795954_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3ZZtqS40CQcAb7mXp-7&_nc_ht=scontent-fra5-1.xx&oh=00_AfBiu50riEHFb5irIdyIYYnJMwFoPhzyYfDf2KhcqbRR3A&oe=6614D638"
                alt="Birthday Slide"
                
              /></center>
            </div>
            <div >
            <center> <img
                    className="imageContainerMiddle"
                    src={Image1}
                    alt="Birthday Slide"
                /></center>
                </div>

            {/* Include the remaining images similarly */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
