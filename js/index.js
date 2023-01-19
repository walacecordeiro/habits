const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const registerBtn = document.querySelector('header button')

registerBtn.addEventListener('click', add)
form.addEventListener('change', save)


function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert(`🔴 Dia de hoje ${today} já está incluso 🔴`)
        return
    }
    
    alert(`✔ Dia de hoje ${today} adicionado com sucesso ✔`)
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('dayHabits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('dayHabits')) || {}
nlwSetup.setData(data)
nlwSetup.load()