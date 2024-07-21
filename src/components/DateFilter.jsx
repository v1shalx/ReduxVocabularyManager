import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByDate } from '../api/vocabularyService';
import './DateFilter.css';

const DateFilter = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const dispatch = useDispatch();

  const handleDateChange = async (e) => {
    setSelectedDate(e.target.value);
    try {
      const response = await filterByDate(e.target.value);
      // Assuming you have an action to update the filtered results in the Redux store
      dispatch({ type: 'FILTER_BY_DATE', payload: response.data });
    } catch (error) {
      console.error('Error filtering by date:', error);
    }
  };

  return (
    <div className="date-filter">
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateFilter;
