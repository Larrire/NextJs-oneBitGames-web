import React from 'react';
import styles from '../../../../styles/AdminTitle.module.css';

interface TitleAndPathProps {
  title: String;
  path: String;
}

const TitleAndPath: React.FC<TitleAndPathProps> = ({title, path}) => {
  return (
    <>
      <h4>{ title }</h4>
      <span className={styles.styledPath}>{ path }</span>
    </>
  )
}

export default TitleAndPath;