import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Button from './components/button/Button';
import Cats from './components/Cats';
import Navbar from './components/navbar/Navbar';

function App() {
	// sran tenc shat ushadrutyun chdarcnes "categoryNames"
	const categoryNames = {
		"123456": "all",
		"5": "boxes",
		"15": "clothes",
		"1": "hats",
		"14": "sinks",
		"2": "space",
		"4": "sunglasses",
		"7": "ties"
	}
	const data = useSelector((state) => {
		return state
	})
	useEffect(() => {


		if (data.category === 123456) {
			const fetchData = async () => {
				await fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1").then((response) => {
					return response.json()
				}).then((data) => {
					dispatch({
						type: "GET_CATS",
						payload: data
					})
				})
			}
			fetchData()
		}
		else {
			const fetchData = async () => {
				await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${data.category}`).then((response) => {
					return response.json()
				}).then((data) => {
					dispatch({
						type: "GET_CATS_BY_CATEGORY",
						payload: data
					})
				})
			}
			fetchData()
		}
	}, [data.category])
	const dispatch = useDispatch()

	function getMoreCats() {
		if (data.category === 123456) {
			const fetchData = async () => {
				await fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1").then((response) => {
					return response.json()
				}).then((data) => {
					dispatch({
						type: "SHOW_MORE_CATS",
						payload: data
					})
				})
			}
			fetchData()
		}
		else {
			const fetchData = async () => {
				await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${data.category}`).then((response) => {
					return response.json()
				}).then((data) => {
					dispatch({
						type: "SHOW_MORE_CATS",
						payload: data
					})
				})
			}
			fetchData()
		}
	}
	return (
		<div className="App">
			<Navbar />
			<div className="category-info"> Showed {data.cats.length} cats from category ` <span>{categoryNames[data.category.toString()]}</span> </div>

			<Cats cats={data.cats} />
			<div className="show-more">
				<Button className="btn" text="SHOW MORE" clickFunction={getMoreCats} />
			</div>
		</div>
	);
}

export default App;
