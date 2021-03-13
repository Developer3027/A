import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    height: 100vh;
  }

  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const PackageIndex = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 500px) {
    width: 100%;
    padding: 1rem 2rem;
    flex-direction: column;
  }
`;

export const PackageHeadRoom = styled.div`
  height: 80px;
`;

export const PackageLink = styled.a`
  color: #fff;
  list-style: none;
  text-decoration: none;

  &:hover {
    color: #10c500;
  }
`;

export const PackageLI = styled.li`
  line-height: 1.5em;
`;

export const DarkBox = styled(Container)`
  margin-top: 10px;
  background-color: #000;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 700px; */
  margin: 0 auto;
  padding: 1rem 0;

  @media (max-width: 500px) {
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const LightTitle = styled.h1`
  padding: 1rem 0;
  color: #fff;
`;

export const TitleThree = styled.h3`
  padding: 0.5rem 0;
`;

export const LightTitleThree = styled(TitleThree)`
  color: #fff;
`;

export const Text = styled.p`
  font-size: 18px;
  width: 700px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: left;

  @media (max-width: 500px) {
    font-size: 14px;
    width: 90%;
    padding: 1rem 2rem;
  }
`;

export const LightText = styled(Text)`
  color: #fff;
`;
