import React, { Fragment, useState } from "react";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function HomePage(){
	const [value, onChange] = useState(new Date());
	
	return(
	<div>
    <h1>About</h1>
	<Calendar onChange={onChange} value={value} />	
	</div>
	
	);
}


export default HomePage;
