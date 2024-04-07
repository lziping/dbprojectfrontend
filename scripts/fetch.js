const url = `http://localhost:3000`
async function getUser() {
    try {
        const link = `${url}/users/`
        const res = await fetch(link, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.json()
    } catch {
        return []
    }
}

async function getUserById(id) {
    try {
        const link = `${url}/users/${id}`
        console.log(link)
        const res = await fetch(link, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    } catch {
        return []
    }
}

async function getUserByName(name) {
    try {
        const link = `${url}/users/name/${name}`
        const res = await fetch(link, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    } catch {
        return []
    }
}

async function getUserBySkill(skill) {
    try {
        const link = `${url}/skill/${skill}`
        const res = await fetch(link, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    } catch {
        return []
    }
}

async function getUserByCert(cert) {
    try {
        const link = `${url}/certificate/${cert}`
        const res = await fetch(link, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    } catch {
        return []
    }
}

async function getUserBySchool(school) {
    try {
        const link = `${url}/school/${school}`
        const res = await fetch(link, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    } catch {
        return []
    }
}