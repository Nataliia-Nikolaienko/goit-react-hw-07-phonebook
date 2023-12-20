import { ProgressBar } from 'react-loader-spinner';
import React from 'react';

const Loader = () => {
  return (
    <ProgressBar
      height="180"
      width="1000"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#3f51b5"
      barColor="#51E5FF"
      display="flex"
      marginLeft="auto"
      marginRight="auto"
    />
  );
};

export default Loader;
