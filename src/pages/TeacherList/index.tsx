import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Index';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
	const [state, setState] = useState({
		subject: '',
		week_day: '',
		time: ''
	})

	const [stateTeacherList, setTeacherList] = useState([])

	async function searchTeachers(e: FormEvent) {
		const response = await api.get('classes', {
			params: {
				...state
			},
		})
		setTeacherList(response.data)
		console.log(response.data)
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis">
				<div id="search-teachers">
				<Select
						name="subject"
						label="Matéria"
						onChange={(e) => {
							setState({...state, subject: e.target.value})
						}}
						value={state.subject}
						options={[
							{ value:'Artes', label:'Artes'},
							{ value:'Biologia', label:'Biologia'},
							{ value:'Ciências', label:'Ciências'},
							{ value:'Educação física', label:'Educação física'},
							{ value:'Física', label:'Física'},
							{ value:'Geografia', label:'Geografia'},
							{ value:'História', label:'História'},
							{ value:'Matemática', label:'Matemática'},
							{ value:'Português', label:'Português'},
							{ value:'Química', label:'Química'},
						]}
					/>
					<Select
						name="week_day"
						label="Dia da semana"
						onChange={(e) => {
							setState({...state, week_day: e.target.value})
						}}
						value={state.week_day}
						options={[
							{ value:'0', label:'Domingo'},
							{ value:'1', label:'Segunda-feira'},
							{ value:'2', label:'Terça-feira'},
							{ value:'3', label:'Quarta-feira'},
							{ value:'4', label:'Quinta-feira'},
							{ value:'5', label:'Sexta-feira'},
							{ value:'6', label:'Sábado'},
						]}
					/>
					<Input
						name="time"
						label="Hora"
						onChange={(e) => {
							setState({...state, time: e.target.value})
						}}
						value={state.time}
						type="time"
					/>
					<button type="button" onClick={searchTeachers}>
						Buscar
					</button>
				</div>
			</PageHeader>

			<main>
				{stateTeacherList.map((teacher, index) => {
					return <TeacherItem key={index} teacher={teacher}  />
				})}
			</main>
		</div>
  )
}

export default TeacherList;