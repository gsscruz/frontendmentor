import styled from 'styled-components';

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  border-radius: 20px;
  padding: 1.016rem;
  max-width: 21.3rem;
  height: 33.13rem;
  background: ${(props) => props.theme['white']};
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  width: 19.2rem;
  height: 19.2rem;
  background-image: url('src/image/image-qr-code.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  overflow: hidden;
  margin-bottom: 1.6rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme['dark-blue']};
  font-size: 1.46rem;
  margin-bottom: 1rem;
`;
export const SubTitle = styled.p`
  color: ${(props) => props.theme['grayish-blue']};
  font-size: 1rem;
  font-weight: 400;
  width: 17em;
`;
