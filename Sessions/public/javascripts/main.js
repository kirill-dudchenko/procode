const formEl = document.forms.nameform;
const namesEl = document.getElementById('names');

console.log(formEl);
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    let name = ev.target.name.value;
    const { data } = await axios.post('/names', { 'name' : name })
    location.reload()
})