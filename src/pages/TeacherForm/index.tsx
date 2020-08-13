import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Index';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm () {
	const history = useHistory();

	const [state, setState] = useState({
		name: '',
		avatar: '',
		whatsapp: '',
		bio: '',
		subject: '',
		cost: '',
		schedule: [
			{ week_day: 0, from: '', to: ''}
		]
	})

	function setSchedulerItemValue(position:number, field:string, value:string) {
		const updatedScheduleItems = state.schedule.map((scheduleItem, index) =>{
			if (position === index) {
				return {...scheduleItem, [field]: value}
			}
			return scheduleItem
		})
		
		setState({...state, schedule: updatedScheduleItems})
	}

	function handleCreateClass() {

		api.post('classes', {...state})
			.then(() => { history.push('/')})
			.catch(() => {alert('Não foi cadastrado')})
		console.log(state)
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que incrível que você quer dar aulas"
				description="O primeiro passo é preencher esse formulário de inscrição"
			/>

			<main>
				<fieldset>
					<legend>Seus dados</legend>

					<Input
						name="name"
						label="Nome completo"
						value={state.name}
						onChange={(e) => {
							setState({
								...state,
								name: e.target.value
							})
						}}
					/>
					<Input
						name="avatar"
						label="Avatar"
						value={state.avatar}
						onChange={(e) => {
							setState({
								...state,
								avatar: e.target.value
							})
						}}
					/>
					<Input
						name="whatsapp"
						label="WhatsApp"
						value={state.whatsapp}
						onChange={(e) => {
							setState({
								...state,
								whatsapp: e.target.value
							})
						}}
					/>
					<Textarea
						name="bio"
						label="Biografia"
						value={state.bio}
						onChange={(e) => {
							setState({
								...state,
								bio: e.target.value
							})
						}}
					/>
				</fieldset>

				<fieldset>
					<legend>Seus dados</legend>

					<Select
						name="subject"
						label="Matéria"
						value={state.subject}
						onChange={(e) => {
							setState({
								...state,
								subject: e.target.value
							})
						}}
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

					<Input
						name="cost"
						label="Custo da sua hora por aula"
						value={state.cost}
						onChange={(e) => {
							setState({
								...state,
								cost: e.target.value
							})
						}}
					/>
				</fieldset>
				
				<fieldset>
					<legend>
						Horários disponíveis
						<button
							type="button"
							onClick={(e) => {
								setState({
									...state,
									schedule:[
										...state.schedule,
										{ week_day: 0, from: '', to: ''}
									]
								})
							}}>
							+ Novo horário
						</button>
					</legend>
					
					{state.schedule.map((scheduleItem, index) => {
						return (
							<div key={scheduleItem.week_day} className="schedule-item">
								<Select
									name="week_day"
									label="Dia da semana"
									value={scheduleItem.week_day}
									onChange={e => setSchedulerItemValue(index, 'week_day', e.target.value)}
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
									name="from"
									label="Das"
									type="time"
									value={scheduleItem.from}
									onChange={e => setSchedulerItemValue(index, 'from', e.target.value)}
								/>
								<Input
									name="to"
									label="Até"
									type="time"
									value={scheduleItem.to}
									onChange={e => setSchedulerItemValue(index, 'to', e.target.value)}
								/>
							</div>
						)
					})}
				</fieldset>
				<footer>
					<p>
						<img src={warningIcon} alt="Aviso importante"/>
						Importante! <br />
						Preenche todos os dados
					</p>
					<button type="button" onClick={handleCreateClass}>
						Salvar cadastro
					</button>
				</footer>
			</main>
		</div>
  )
}

export default TeacherForm;