import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <main class="app">
    <section class="card" aria-label="Counter app">
      <p class="eyebrow">Simple Counter</p>
      <h1>Track your count</h1>
      <p class="count" id="count" aria-live="polite">0</p>
      <div class="actions">
        <button id="decrement" type="button" class="ghost">-</button>
        <button id="reset" type="button" class="solid">Reset</button>
        <button id="increment" type="button" class="ghost">+</button>
      </div>
    </section>
  </main>
`

setupCounter({
  countEl: document.querySelector('#count'),
  incrementBtn: document.querySelector('#increment'),
  decrementBtn: document.querySelector('#decrement'),
  resetBtn: document.querySelector('#reset'),
})
