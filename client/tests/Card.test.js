import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from '../src/components/Card/Card.component';

describe('Card Component', () => {
  it('renders the card with the provided data', () => {
    const testData = {
      id: 1,
      name: 'John Doe',
      image: 'image-url',
      teams: 'Team A, Team B',
      date: '1990-01-01',
    };

    renderer.create(<Card {...testData} />);

    // Assert that the card component renders with the provided data
    expect(screen.getByText(testData.name)).toBeInTheDocument();
    expect(screen.getByText(`Equipos: ${testData.teams}`)).toBeInTheDocument();
    expect(screen.getByText(`Nació: ${testData.date}`)).toBeInTheDocument();
  });

  it('navigates to the detail page when the "Detalle" button is clicked', () => {
    const testData = {
      id: 1,
      name: 'John Doe',
      image: 'image-url',
      teams: 'Team A, Team B',
      date: '1990-01-01',
    };

    render(<Card {...testData} />);

    // Mock the useNavigate function
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    // Find the "Detalle" button and click it
    const detalleButton = screen.getByText('Detalle');
    fireEvent.click(detalleButton);

    // Assert that the navigate function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith(`/home/${testData.id}`);
  });
});
