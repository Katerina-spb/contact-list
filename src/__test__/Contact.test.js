import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../Contact';
import Router from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import EditForm from '../EditForm';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  const state = {description: 'Add new contact', data: null};
  window.history.pushState(state, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
}

const contact = {firstName: 'Alex', lastName: 'Mode', number: 1233213344, email: 'alexm@gmail.com'};

it('renders without crashing', () => {
  render(<Contact contact={contact} />, { wrapper: MemoryRouter })
})

it('test 2', () => {
  renderWithRouter(<Contact contact={contact} />, { route: '/' })
})