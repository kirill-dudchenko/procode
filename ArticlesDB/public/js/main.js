const formEl = document.forms.submit;
const titlesEl = document.getElementById('titles')


formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    let title = ev.target.title.value;
    let text = ev.target.text.value;
    console.log(title, text);
    titlesEl.innerHTML += `${title} `
    
    fetch('http://localhost:8000/articles', {
    method: 'POST',
    body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})
