import styled from 'styled-components';

export const FadingCircle = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: CircleFadeDelay 1.2s infinite ease-in-out both;
    animation: CircleFadeDelay 1.2s infinite ease-in-out both;
  }

  @-webkit-keyframes CircleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes CircleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

export const Circle1 = styled(Circle)``;

export const Circle2 = styled(Circle)`
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);

  &::before {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
`;

export const Circle3 = styled(Circle)`
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);

  &::before {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
`;

export const Circle4 = styled(Circle)`
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);

  &::before {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
`;

export const Circle5 = styled(Circle)`
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);

  ::before {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;

export const Circle6 = styled(Circle)`
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);

  &::before {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
`;

export const Circle7 = styled(Circle)`
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);

  &::before {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
`;

export const Circle8 = styled(Circle)`
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);

  &::before {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
`;

export const Circle9 = styled(Circle)`
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);

  &::before {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
`;

export const Circle10 = styled(Circle)`
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);

  &::before {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
`;

export const Circle11 = styled(Circle)`
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);

  &::before {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
`;

export const Circle12 = styled(Circle)`
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);

  &::before {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
`;
