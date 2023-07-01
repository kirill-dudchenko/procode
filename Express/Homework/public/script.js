const getForm = async() => {
    const {form} = await axios.get('/')
    console.log(form)

    const html = `<form method="POST" action = "/html_form_sent">
    <input type = "text" name = "send">
    <button type = "submit">Send</button>
    </form>`

    const rootEl = document.querySelector('.root')
    rootEl.innerHTML = html
}

getForm()
