//* bring in styled-components
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//* bring in icons
import {
  FaMugHot,
  FaBoxOpen,
  FaRobot,
  FaPaperclip,
  FaTwitter,
  FaLinkedin,
  FaBook,
  FaUserAlt
} from 'react-icons/fa';

//? Tooltip is in GlobalStyle
//* The navbar
export const Navbar = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  background-color: #333;
  border-bottom: 2px solid #fff;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 5;
`;

//? --------------------Left Navbar + Icons
//* The left div of the navbar
export const NavLeft = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;

  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;

// todo: wrap icon in link and rework hover
//* Project Icon - mug
export const ProjectIcon = styled(FaMugHot)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }
`;

// todo: wrap icon in link and rework hover
//* Packages Icon - open box
export const PackagesIcon = styled(FaBoxOpen)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

// todo: wrap icon in link and rework hover
//* Bot Icon - robot
export const BotIcon = styled(FaRobot)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

// todo: wrap icon in link and rework hover
//* Resume Icon - paperclip
export const ResumeIcon = styled(FaPaperclip)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }
`;

//? --------------------Center Navbar + Icon
//* The center div of the navbar
export const NavCenter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

//* Logo Icon - Logo PNG
export const LogoIcon = styled.img`
  z-index: 5;
  margin-top: 50%;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

//? --------------------Right Navbar + Icon
//* The right div of the navbar
export const NavRight = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;

  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;

// todo: wrap icon in link and rework hover
//* Twitter Icon - twitter icon
export const TwitterIcon = styled(FaTwitter)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }
`;

// todo: wrap icon in link and rework hover
//* Linkedin Icon - linked in icon
export const LinkedinIcon = styled(FaLinkedin)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }
`;

// todo: wrap icon in link and rework hover
//* Blog Icon - book icon
export const BlogIcon = styled(FaBook)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

// todo: wrap icon in link and rework hover
//* User Icon - User icon
export const UserIcon = styled(FaUserAlt)`
  font-size: 1.8em;
  color: #fff;

  &:hover {
    color: #10c500;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.5em;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

//* bottom div to hold image
export const BottomLine = styled.img``;
