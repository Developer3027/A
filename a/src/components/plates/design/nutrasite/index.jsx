import React from 'react';
import Plate from '../../plate';
import { plateGroup } from '../../../../data';

// cSpell: ignore copywrite MERN

const Nutrasite = ({
  id,
  btn1,
  btn1Path,
  plateName,
  btn2,
  btn2Path,
  date,
  linkName,
  linkAddr,
  desc,
  imgSrc,
  imgAlt
}) => {
  const data = plateGroup[1];
  return (
    <Plate
      key={data.id}
      btn1={data.btn1}
      btn1Path={data.btn1Path}
      plateName={data.plateName}
      btn2={data.btn2}
      btn2Path={data.btn2Path}
      date={data.date}
      linkName={data.linkName}
      linkAddr={data.linkAddr}
      desc={data.desc}
      imgSrc={data.imgSrc}
      imgAlt={data.imgAlt}
    />
  );
};

export default Nutrasite;
