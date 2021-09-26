import React from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";

//create your first component
const Home = () => {
	const [name, setName] = React.useState("");
	const [age, setAge] = React.useState("");
	const [salary, setSalary] = React.useState("");
	const [hobby, setHobby] = React.useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const objt = { name, age, salary, hobby };
		console.log(objt);

		axios
			.post(
				"https://sheet.best/api/sheets/58a4bfeb-5041-47db-8e67-4ddde6ad2c81",
				objt
			)
			.then(response => {
				console.log(response);
			});
	};

	return (
		<Container fluid className="container">
			<Header as="h2">React Google Sheets!</Header>
			<Form className="form">
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your name"
						type="text"
						name="name"
						value={name}
						onChange={e => {
							setName(e.target.value);
						}}
					/>
				</Form.Field>
				<Form.Field>
					<label>Age</label>
					<input
						placeholder="Enter your age"
						type="number"
						name="age"
						value={age}
						onChange={e => {
							setAge(e.target.value);
						}}
					/>
				</Form.Field>
				<Form.Field>
					<label>Salary</label>
					<input
						placeholder="Enter your salary"
						type="number"
						name="salary"
						value={salary}
						onChange={e => {
							setSalary(e.target.value);
						}}
					/>
				</Form.Field>
				<Form.Field>
					<label>Hobby</label>
					<input
						placeholder="Enter your hobby"
						type="text"
						name="hobby"
						value={hobby}
						onChange={e => {
							setHobby(e.target.value);
						}}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
};
export default Home;
