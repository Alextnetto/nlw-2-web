import React from 'react';

import whatsLogo from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
  teacher: {
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
  }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return(
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R${teacher.cost}</strong>
        </p>
        <button type="button">
          <img src={whatsLogo} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem