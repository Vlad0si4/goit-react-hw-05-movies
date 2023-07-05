import { Oval } from 'react-loader-spinner';
import { StyletLoader } from './loader.styled';

export const Loader = () => {
  return (
    <StyletLoader>
      <Oval
        height={120}
        width={120}
        color="rgb(63 72 181 / 65%)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(63 72 181 / 65%)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyletLoader>
  );
};
