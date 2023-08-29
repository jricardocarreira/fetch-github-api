const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class='info'>
                                        <img src="${user.avatarUrl}" alt="User profile image"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Does not have registered name 🤔'}</h1>
                                            <p>${user.bio ?? 'Does not have registered bio 🫠'}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href='${repo.html_url}' target='_blank'>${repo.name}<p>${repo.description}</p></a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class='repositories section'>
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    }
}

export { screen }