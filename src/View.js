const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <p>Próximo Post em</p>
    <span>${minutes}:${seconds}</span>
    `;
  }
}

export { View };