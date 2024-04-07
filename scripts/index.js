
async function displayAllUsers(users) {
    for (user of users.reverse()) {
        await displaySingleUser(user)
    }
}

async function displaySingleUser(user) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = user.name
    const p = document.createElement('p')
    p.innerText = user.introduce
    const img = document.createElement('img')
    img.src = user.img_path
    img.id = 'profile-img'
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.id = 'more-btn'
    btn.innerText = 'More'
    btn.addEventListener('click', async () => {
        displayDetail(user.id)
    })
    div.append(img)
    div.append(btn)
    div.append(h3)
    div.append(p)

    div.id = 'display-card'
    document.getElementById('student-display').append(div)
}
async function removeAllChildren(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

async function displayDetail(id) {

}

window.onload = async () => {
    const users = await getUser()
    await displayAllUsers(users);
    const idBtn = document.getElementById('search-id-button')
    idBtn.addEventListener('click', async () => {
        const id = document.getElementById('search-id').value
        const user = await getUserById(id)
        const ele = document.getElementById('student-display');
        await removeAllChildren(ele);
        await displaySingleUser(user)
    })
    const nameBtn = document.getElementById('search-name-button')
    nameBtn.addEventListener('click', async () => {
        const name = document.getElementById('search-name').value
        const user = await getUserByName(name)
        const ele = document.getElementById('student-display');
        await removeAllChildren(ele);
        console.log(user)
        await displayAllUsers(user)
    })
    const skillBtn = document.getElementById('search-skill-button')
    skillBtn.addEventListener('click', async () => {
        const skill = document.getElementById('search-skill').value
        const user = await getUserBySkill(skill)
        const ele = document.getElementById('student-display');
        await removeAllChildren(ele);
        console.log(user)
        await displayAllUsers(user)
    })
    const schoolBtn = document.getElementById('search-school-button')
    schoolBtn.addEventListener('click', async () => {
        const school = document.getElementById('search-school').value
        const user = await getUserBySchool(school)
        const ele = document.getElementById('student-display');
        await removeAllChildren(ele);
        console.log(user)
        await displayAllUsers(user)
    })
    const certBtn = document.getElementById('search-cert-button')
    certBtn.addEventListener('click', async () => {
        const cert = document.getElementById('search-cert').value
        const user = await getUserByCert(cert)
        const ele = document.getElementById('student-display');
        await removeAllChildren(ele);
        console.log(user)
        await displayAllUsers(user)
    })
}