import moment from 'moment';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {  DatePickerStyled } from './styled';

export default function CustomDatePicker({data , setData}) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const searchByDate = (date) => {
        setStartDate(date)
        const results = data.filter(item => {
            return item.date === moment(date).format('YYYY-MM-DD');
        })
        setData(results)
    }

    const searchByDateRange = (startDate,endDate) => {  
        const result = data.filter(item => {
            if(!startDate || !endDate) return item;
            const itemDate = moment(item.date).format('YYYY-MM-DD');
            const start = moment(startDate).format('YYYY-MM-DD');
            const end = moment(endDate).format('YYYY-MM-DD');
            return itemDate >= start && itemDate <= end;
        })
        setData(result)
    }

  return (
    <div>
      <DatePickerStyled>
      <DatePicker
         selected={startDate}
         startDate={startDate} 
         endDate={endDate}
         selectsRange
         isClearable
         onChange={(dates)=> {
            const [start, end] = dates;
            setStartDate(start)
            setEndDate(end)
            searchByDateRange(start,end)
         }}
         />
      </DatePickerStyled>
    </div>
  )
}
