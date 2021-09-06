import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });
})

it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
})

exports[`Gallery is rendering renders 1`] = `
<DocumentFragment>
  <section>
    <h1
      data-testid="h1tag"
    >
      Portraits
    </h1>
    <p>
      Portraits of people in my life
    </p>
    <div>
      <div
        class="flex-row"
      >
        <img
          alt="Cat green eyes"
          class="img-thumbnail mx-1"
          src="0.jpg"
        />
        <img
          alt="Green parrot"
          class="img-thumbnail mx-1"
          src="1.jpg"
        />
        <img
          alt="Yellow macaw"
          class="img-thumbnail mx-1"
          src="2.jpg"
        />
        <img
          alt="Pug smile"
          class="img-thumbnail mx-1"
          src="3.jpg"
        />
      </div>
    </div>
  </section>
</DocumentFragment>
`;

it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})