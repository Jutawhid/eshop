import React from 'react';
import moment from 'moment';

const TimestampToDateString = ({ timestamp }) => {
  // Assuming timestamp is an object with 'seconds' property
  const seconds = timestamp.seconds;
  const milliseconds = seconds * 1000;
  const dateObject = new Date(milliseconds);

  // Format the date as per your requirement
  const formattedDate = dateObject.toLocaleString(); // or use other date formatting methods

  return (
    <div>
      {moment(formattedDate, "MM/DD/YYYY, h:mm:ss A").format("Do MMMM YY, h:mm A")}
    </div>
  );
};

export default TimestampToDateString;
