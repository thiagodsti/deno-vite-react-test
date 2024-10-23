import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from './App.tsx'
import '@testing-library/jest-dom/vitest'


test('renders Vite + React header', () => {
  render(<App />)
  const headerElement = screen.getByText(/Vite \+ React/i)
  expect(headerElement).toBeDefined()
})

test('button click increments count', () => {
  render(<App />)
  const buttonElement = screen.getByRole('button', { name: /count is 0/i })
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveTextContent('count is 1')
})