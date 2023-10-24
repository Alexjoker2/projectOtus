import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cookie from './Cookie';

describe('Cookie', () => {
  it('renders the cookie count correctly', () => {
    const cookieCount = 5.5;
    render(<Cookie cookie={cookieCount} handleValue={() => {}} />);
    
    const cookieCountElement = screen.getByText(`Печенек: ${Math.round(cookieCount * 10) / 10}`);
    expect(cookieCountElement).toBeInTheDocument();
  });

  it('calls handleValue and animates on button click', () => {
    const handleValueMock = jest.fn();
    render(<Cookie cookie={0} handleValue={handleValueMock} />);
    
    const cookieButton = screen.getByRole('button');
    fireEvent.click(cookieButton);

    expect(handleValueMock).toHaveBeenCalledTimes(1);
    expect(cookieButton.classList).toContain('shake');
    
    // Ждём завершения анимации (300ms)
    setTimeout(() => {
      expect(cookieButton.classList).not.toContain('shake');
    }, 300);
  });
});