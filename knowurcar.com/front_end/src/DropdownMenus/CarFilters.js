import React from 'react';
import {useState} from 'react';
import Select from 'react-select';
import '..//AppController.css';

function CarFilters() {

  var yearsList = [
    {
      value: 1,
      label: "2010"
    },
    {
      value: 2,
      label: "2011"
    },
    {
      value: 3,
      label: "2012"
    },
    {
      value: 4,
      label: "2013"
    },
    {
      value: 5,
      label: "2014"
    },
    {
      value: 6,
      label: "2015"
    },
    {
      value: 7,
      label: "2016"
    },
    {
      value: 8,
      label: "2017"
    },
    {
      value: 9,
      label: "2018"
    },
    {
      value: 10,
      label: "2019"
    },
    {
      value: 11,
      label: "2020"
    },
    {
      value: 12,
      label: "2021"
    },
    {
      value: 13,
      label: "2022"
    }
  ];

  const [result,value] = useState(yearsList.label);
  const handler = e => {
    value(e.label);
    console.log({result});
  }
  return (
    <Select options={yearsList} onChange={handler}/>
  );
}

export default CarFilters;