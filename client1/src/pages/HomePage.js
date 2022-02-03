import React from "react";
import Slider from "../components/Slider";
import "./homePage.css";
import ReactPlayer from "react-player";
import {
  Card,
  CardGroup,
  FormControl,
  Button,
  InputGroup,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="div-home">
      <div className="home">
        <div className="div-home-slider">
          <Slider />
        </div>
        <div className="div-home-about-text">
          <p className="p-title1">About Us</p>
          <p className="p-name1">A Luxuries Hotel with Nature</p>
          <p className="p-text">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
        <img
          className="img-hotel1"
          src="https://preview.colorlib.com/theme/montana/img/about/xabout_1.png.pagespeed.ic.LF5rkD9bee.webp"
        ></img>
        <img
          className="img-hotel2"
          src="https://preview.colorlib.com/theme/montana/img/about/xabout_2.png.pagespeed.ic.Iswjjsyaxg.webp"
        ></img>

        {/* second page */}
        <div className="div-2-page">
          <div className="div-2-title">
            <p className="p-2-title">Our Offers</p>

            <p className="p-2-name">Ongoing Offers</p>
          </div>

          <div className="div-2-sale-1">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
            <p className="p-2-sale-title">
              Up to 35% savings on Club rooms and Suites
            </p>
            <p className="p-2-sale-text">&#8226; Luxaries condition</p>
            <p className="p-2-sale-text">&#8226; 3 Adults & 2 Children size</p>
            <p className="p-2-sale-text">&#8226; Sea view side</p>
            <button className="button-sale">Book Now</button>
          </div>
          <div className="div-2-sale-2">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
            <p className="p-2-sale-title">
              Up to 35% savings on Club rooms and Suites
            </p>
            <p className="p-2-sale-text">&#8226; Luxaries condition</p>
            <p className="p-2-sale-text">&#8226; 3 Adults & 2 Children size</p>
            <p className="p-2-sale-text">&#8226; Sea view side</p>
            <button className="button-sale">Book Now</button>
          </div>
          <div className="div-2-sale-3">
            <img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"></img>
            <p className="p-2-sale-title">
              Up to 35% savings on Club rooms and Suites
            </p>
            <p className="p-2-sale-text">&#8226; Luxaries condition</p>
            <p className="p-2-sale-text">&#8226; 3 Adults & 2 Children size</p>
            <p className="p-2-sale-text">&#8226; Sea view side</p>
            <button className="button-sale">Book Now</button>
          </div>
        </div>

        <div className="div-3-video overlay">
          <p className="p-3-title">Montana Sea View</p>
          <p className="p-3-text">Relax and Enjoy your Vacation</p>
          <a
            href="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
            className="button-video"
          >
            <i className="fa fa-play">&#9658;</i>
          </a>
        </div>

        <div className="div-4-text">
          <p className="p-4-title">Delicious Food</p>
          <p className="p-4-name">We Serve Fresh and Delicious Food</p>
          <p className="p-4-text">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
        <img
          className="img-4-hotel1"
          src="https://preview.colorlib.com/theme/montana/img/about/x1.png.pagespeed.ic.ytFzk1qg9A.webp"
        ></img>
        <img
          className="img-4-hotel2"
          src="https://preview.colorlib.com/theme/montana/img/about/x2.png.pagespeed.ic.TMQb44M-no.webp"
        ></img>

        <div className="div-5-title">
          <p className="p-5-title">Featured Rooms</p>
          <p className="p-5-text">Choose a Better Room</p>
        </div>

        <div className="room1 overlay1">
          <div className="room-text">
            <p className="room-price">From $250/night</p>
            <p className="room-title">Superior Room</p>
          </div>
        </div>
        <div className="room2 overlay1">
          <div className="room-text">
            <p className="room-price">From $250/night</p>
            <p className="room-title">Deluxe Room</p>
          </div>
        </div>
        <div className="room3 overlay1">
          <div className="room-text">
            <p className="room-price">From $250/night</p>
            <p className="room-title">Signature Room</p>
          </div>
        </div>
        <div className="room4 overlay1">
          <div className="room-text">
            <p className="room-price">From $250/night</p>
            <p className="room-title">Couple Room</p>
          </div>
        </div>

        <div className="div-6-tell">
          <p className="p-6-tell">For Reservation 0r Query?</p>
          <button className="button-6-tell">+10 576 377 4789</button>
        </div>

        <div className="div-7-instagram">
          <div className="div-7-img1">
            <img
              className="img-7"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x1.png.pagespeed.ic.wbbausM5YV.webp"
            ></img>
          </div>
          <div className="div-7-img2">
            <img
              className="img-7"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x2.png.pagespeed.ic.K7QQTG31WK.webp"
            ></img>
          </div>
          <div className="div-7-img3">
            <img
              className="img-7"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x3.png.pagespeed.ic.0qESeb0ofL.webp"
            ></img>
          </div>
          <div className="div-7-img4">
            <img
              className="img-7"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x4.png.pagespeed.ic.rPdIdf5OIU.webp"
            ></img>
          </div>
          <div className="div-7-img5">
            <img
              className="img-7"
              src="https://preview.colorlib.com/theme/montana/img/instragram/x5.png.pagespeed.ic.gbYqEWPqMR.webp"
            ></img>
          </div>
        </div>

        <div className="div-8-end">
          <div className="div-8-block1">
            <p className="p-8-title1">Address</p>
            <p className="p-8-text1">
              200, Green road, Mongla, New Yor City USA
            </p>
          </div>
          <div className="div-8-block2">
            <p className="p-8-title2">Reservation</p>
            <p className="p-8-text2">
              +10 367 267 2678 reservation@montana.com
            </p>
          </div>
          <div className="div-8-block3">
            <p className="p-8-title1">Navigation</p>
            <p className="p-8-text31">Home</p>
            <p className="p-8-text32">Countries</p>
            <p className="p-8-text33">Sale</p>
            <p className="p-8-text34">Tickets</p>
          </div>
          <div className="div-8-block4">
            <p className="p-8-title4">Newsletter</p>

            <form className="form-8">
              <input
                className="input-8-sign"
                placeholder="Enter your main"
              ></input>
              <button className="button-8-sign">Sign Up</button>
            </form>
            <p className="p-8-text4">Subscribe newsletter to get updates</p>
          </div>

          <p className="p-9-text">
            Copyright ©2022 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </div>
  );
}
