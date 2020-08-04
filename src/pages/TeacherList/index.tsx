import React from "react";

import { Link } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader/index';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import TeacherItem from '../../components/TeacherItem/index';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este sãos os proffys disponíveis.">
            <form  id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject"/>
                </div>
                <div className="input-block">
                    <label htmlFor="week-day">Dia da Semana</label>
                    <input type="text" id="week-day"/>
                </div>
                <div className="input-block">
                    <label htmlFor="time">Hora</label>
                    <input type="text" id="time"/>
                </div>
                
            </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    );
}