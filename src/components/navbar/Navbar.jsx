import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css"
export default function Navbar() {
	const data = useSelector((state) => {
		return state
	})
	const dispatch = useDispatch()
	return (
		<div className="navbar-block">
			<nav className="navbar">
				<div className=" menu-item home" onClick={() => {
					if (data.category !== null) {
						dispatch({
							type: "CATEGORY_ALL",
							payload: {
								id: 123456
							}
						})
					}
				}}>Home</div>
				<div className=" menu-item category">Category
					<div className=" category-menu">
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_BOXES",
								payload: {
									id: 5
								}
							})
						}}>Boxes </div>
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_CLOTHES",
								payload: {
									id: 15
								}
							})
						}}>Clothes </div>
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_HATS",
								payload: {
									id: 1
								}
							})
						}}>Hats </div>
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_SINKS",
								payload: {
									id: 14
								}
							})
						}}>Sinks </div>
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_SPACE",
								payload: {
									id: 2
								}
							})
						}}>Space </div>
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_SUNGLASSES",
								payload: {
									id: 4
								}
							})
						}}>Sunglasses </div>
						<div className="menu-item" onClick={() => {
							dispatch({
								type: "CATEGORY_TIES",
								payload: {
									id: 7
								}
							})
						}}>Ties </div>
					</div>
				</div>

			</nav>
		</div>



	);
}

