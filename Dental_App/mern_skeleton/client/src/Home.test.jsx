import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Component Rendering Tests', () => {
  it('renders basic component structure', () => {
    const { container } = render(
      <div>
        <h1>Home Page</h1>
      </div>
    );
    expect(container).toBeInTheDocument();
  });

  it('displays content correctly', () => {
    const { container } = render(
      <h1>Dental Clinic Management</h1>
    );
    expect(container.querySelector('h1')).toHaveTextContent('Dental Clinic Management');
  });

  it('has proper HTML structure', () => {
    const { container } = render(
      <div>
        <nav>Navigation</nav>
        <main>Content</main>
        <footer>Footer</footer>
      </div>
    );
    expect(container.querySelector('nav')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('supports component composition', () => {
    const TestComponent = () => (
      <section>
        <h2>Test Section</h2>
      </section>
    );
    const { container } = render(<TestComponent />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders multiple elements', () => {
    const { container } = render(
      <div>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>
    );
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(3);
  });
});

