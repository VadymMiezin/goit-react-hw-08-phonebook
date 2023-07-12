import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#afcef1"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </LoaderContainer>
  );
};
