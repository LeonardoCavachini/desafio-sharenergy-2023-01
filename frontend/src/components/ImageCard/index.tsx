import * as styled from './styles';

const ImageCard = ({children}: any) => {
  return (
    <>
      <styled.imageBox>
        <styled.Img src={children} alt='image' />
      </styled.imageBox>
    </>
  )
};

export default ImageCard
