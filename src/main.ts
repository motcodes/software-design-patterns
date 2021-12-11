import { RunFactroy } from './patterns/factory-method';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Software Design Patterns</h1>
  <p>Writtin in Typescript by <a href="https://github.com/motcodes" target="_blank">@motcodes</a>.</p>
`;