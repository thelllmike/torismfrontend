import React from "react";
import "../Styles/BookingRequest.css";
import NavBarHome from './NavBar_home'
import Footer from './Footer'

function BookingRequest() {
	return (
		<div>
				<div className='BookingRequest'>
					<NavBarHome />
					<div className='left-side'>
						<div className='label-button'>
							<label htmlFor=''>
								<i class='fa-solid fa-house'></i>Dashboard
								<span>{">"}</span>
							</label>
						</div>
						<div className='label-button'>
							<label htmlFor=''>
								<i class='fa-solid fa-chart-line'></i>Booking Request
								<span>{">"}</span>
							</label>
						</div>
						<div className='label-button'>
							<label htmlFor=''>
								<i class='fa-solid fa-message'></i>Messages <span>{">"}</span>
							</label>
						</div>
						<div className='label-button'>
							<label htmlFor=''>
								<i class='fa-solid fa-bookmark'></i>Booking Activities
								<span>{">"}</span>
							</label>
						</div>
						<div className='label-button'>
							<label htmlFor=''>
								<i class='fa-brands fa-telegram'></i>Request <span>{">"}</span>
							</label>
						</div>
						<div className='label-button'>
							<label htmlFor=''>
								<i class='fa-solid fa-gear'></i>Setting <span>{">"}</span>
							</label>
						</div>
					</div>

					<div className='right-side'>

                        <h2>Booking Request</h2>
						<table>
							<tr>
								<th>Ref Number</th>
								<th>Customer Ref ID</th>
								<th>Activity</th>
								<th>Date</th>
							</tr>
							<tr>
								<td>R001</td>
								<td>C001</td>
								<td>Surfing</td>
								<td>01/30 <button>Accept</button></td>
							</tr>
							<tr>
								<td>R002</td>
								<td>C002</td>
								<td>Diving</td>
								<td>02/03 <button>Accept</button></td>
							</tr>
							<tr>
								<td>R001</td>
								<td>C001</td>
								<td>Surfing</td>
								<td>01/30 <button>Accept</button></td>
							</tr>
							<tr>
								<td>R002</td>
								<td>C002</td>
								<td>Diving</td>
								<td>02/03 <button>Accept</button></td>
							</tr>
							<tr>
								<td>R001</td>
								<td>C001</td>
								<td>Surfing</td>
								<td>01/30 <button>Accept</button></td>
							</tr>
							<tr>
								<td>R002</td>
								<td>C002</td>
								<td>Diving</td>
								<td>02/03 <button>Accept</button></td>
							</tr>
						</table>
					</div>
				</div>
				<Footer />
			</div>
	);
}

export default BookingRequest;
