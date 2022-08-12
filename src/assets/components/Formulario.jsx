import {useState, useEffect} from "react";
import { Mensaje } from './Mensaje';

const Formulario = () => {
	const [formData, setFormData] = useState({
		usuario: "",
		email: "",
	});

	const {usuario, email} = formData

	const handleChange = ({target}) => {
		const { name, value } = target

		setFormData({
			...formData,
			[name]: value
		})
		
  };
  
	// useEffect(() => {
	// 	console.log("llamado de useEffect");
	// }, [])
	
	// useEffect(() => {
	// 	console.log("Validar si el usuario existe");
	// }, [usuario])
	

	return (
		<>
			<h1>Formulario</h1>
			<hr />

			<input
				type="text"
				className="form-control"
				placeholder="usuario"
				name="usuario"
				onChange={handleChange}
			/>

			<input
				type="email"
				className="form-control mt-3"
				placeholder="correo@correo.com"
				name="email"
				onChange={handleChange}
			/>
			{ usuario === "Humberto" && <Mensaje />}
		</>
	);
};

export default Formulario;
