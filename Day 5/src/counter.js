export function setupCounter({ countEl, incrementBtn, decrementBtn, resetBtn }) {
  let count = 0

  const render = () => {
    countEl.textContent = String(count)
  }

  incrementBtn.addEventListener('click', () => {
    count += 1
    render()
  })

  decrementBtn.addEventListener('click', () => {
    count -= 1
    render()
  })

  resetBtn.addEventListener('click', () => {
    count = 0
    render()
  })

  render()
}
