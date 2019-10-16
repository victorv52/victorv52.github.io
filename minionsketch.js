.minion-holder {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -300px;
  background: #fefefe;
}

.minion {
  width: 180px;
  height: 252px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -90px;
  margin-top: -126px;
  background-color: #f8db75;
}
.minion:before {
  display: block;
  content: '';
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: absolute;
  top: -90px;
  left: 0;
  background-color: #f8db75;
}
.minion .pants {
  display: block;
  content: '';
  width: 198px;
  height: 198px;
  border-radius: 50%;
  position: absolute;
  bottom: -99px;
  left: -9px;
  background-color: #f8db75;
  background-image: linear-gradient(0deg, #6b8fa7 0%, #6b8fa7 50%, #f8db75 50%, #f8db75);
  background-size: 100%;
  background-position: 0px 0px;
}
.minion .pants:after {
  display: block;
  content: '';
  width: 99px;
  height: 90px;
  background-color: #6b8fa7;
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -49.5px;
}
.minion .pants .pocket:before {
  display: block;
  content: '';
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -15px;
  box-sizing: border-box;
  border: 4px solid #000;
  border-radius: 50%;
}
.minion .pants .pocket:after {
  display: block;
  content: '';
  width: 11.25px;
  height: 11.25px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -5.625px;
  margin-top: -5.625px;
  background-color: #000;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.minion .pants .strap {
  width: 60px;
  height: 30px;
  position: absolute;
  top: 15px;
  left: 9px;
  background-color: #6b8fa7;
  z-index: 1;
  box-sizing: border-box;
  border: 2px solid #7d99a7;
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
}
.minion .pants .strap:after {
  display: block;
  content: '';
  width: 12.85714px;
  height: 12.85714px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -6.42857px;
  background-color: #000;
  border-radius: 50%;
}
.minion .pants .strap + .strap {
  left: auto;
  right: 9px;
  -webkit-transform: rotate(150deg);
          transform: rotate(150deg);
}
.minion .hair {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -15px;
  margin-top: -120px;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.minion .hair:before {
  display: block;
  content: '';
  width: 30px;
  height: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -0.5px;
  background-color: #000;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.minion .eyes {
  width: 75px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -37.5px;
  background-color: #FFF;
  border-radius: 50%;
  margin-top: -25px;
}
.minion .eyes:before {
  display: block;
  content: '';
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -15px;
  background-color: #ad4d3d;
  border: 1px solid #764d47;
  border-radius: 50%;
}
.minion .eyes:after {
  display: block;
  content: '';
  width: 15px;
  height: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -7.5px;
  margin-top: -7.5px;
  background-color: #000;
  border-radius: 50%;
}
.minion .mouth {
  width: 45px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -22.5px;
  border-radius: 50%;
  border: 3px solid #000;
  margin-top: 60px;
}
.minion .mouth:before {
  display: block;
  content: '';
  width: 45px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -22.5px;
  background-color: #f8db75;
  margin-top: -10px;
  margin-left: -20.5px;
  border-radius: 50%;
}
.minion .glasses {
  width: 90px;
  height: 90px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -45px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 15px solid #CCC;
  margin-top: -45px;
}
.minion .glasses:before {
  display: block;
  content: '';
  width: 45px;
  height: 20px;
  background-color: #000;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  left: -60px;
}
.minion .glasses:after {
  display: block;
  content: '';
  width: 45px;
  height: 20px;
  background-color: #000;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: -60px;
}
.minion .leg {
  background-color: #6b8fa7;
  z-index: 1;
  box-sizing: border-box;
  border-right: 2px solid #CCC;
  width: 36px;
  height: 42.75px;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -18px;
  bottom: -134.75px;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}
.minion .leg:before {
  display: block;
  content: '';
  width: 60px;
  height: 21.375px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 70% 0 0 35%;
}
.minion .leg + .leg {
  border-left: 2px solid #CCC;
  border-right: 0;
  -webkit-transform: translateX(50%);
          transform: translateX(50%);
}
.minion .leg + .leg:before {
  right: auto;
  left: 0;
  border-radius: 0 70% 35% 0;
}
.minion .hand {
  width: 18px;
  height: 68.4px;
  width: 22.5px;
  height: 85.5px;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -42.75px;
  z-index: 1;
  background-color: #f8db75;
  margin-top: 85.5px;
  -webkit-transform-origin: top;
          transform-origin: top;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  border-right: 1px solid #c29e48;
}
.minion .hand:before {
  display: block;
  content: '';
  width: 120%;
  height: 10%;
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  border-radius: 30%;
}
.minion .hand:after {
  display: block;
  content: '';
  width: 100%;
  height: 30%;
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(90%);
          transform: translateX(-50%) translateY(90%);
  border-radius: 50%;
}
.minion .hand + .hand {
  left: auto;
  right: 0;
  -webkit-transform: rotate(-35deg);
          transform: rotate(-35deg);
  border-right: 0;
  border-left: 1px solid #c29e48;
}