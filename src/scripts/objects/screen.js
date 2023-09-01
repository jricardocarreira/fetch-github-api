const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class='info'>
                                        <img src="${user.avatarUrl}" alt="User profile image"/>
                                        <div class="data">
                                            <h1>${user.name ?? "Doesn't have registered name 🤔"}</h1>
                                            <p>${user.bio ?? "Doesn't have registered bio 🫠"}</p>
                                            <p><i class="fa-solid fa-user-group" style="color: #000222;"></i>  Followers ${user.followers} · Following ${user.following}</p>
                                        </div>
                                    </div>`

        /* REPOSITORIES */

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href='${repo.html_url}' target='_blank'>${repo.name}
                                                                        <div class="repo-description">${repo.description ?? "Doesn't have a description"}</div>
                                                                        <div class="repo-info">
                                                                            <p><i class="fa-solid fa-code-fork";"></i> ${repo.forks_count} </p>
                                                                            <p><i class="fa-solid fa-star";"></i> ${repo.stargazers_count} </p>
                                                                            <p><i class="fa-solid fa-eye";"></i> ${repo.watchers_count} </p>
                                                                            <p><i class="fa-solid fa-code";"></i> ${repo.language ?? 'Not detected'} </p>
                                                                        </div>
                                                                    </a>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class='repositories section'>
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        /* EVENTS */

        let eventsItens = ''
        user.events.forEach(event => {
            if (event.type === "PushEvent") {
                eventsItens += `<li><p><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</p></li>`
            } else if (event.type === "CreateEvent") {
                eventsItens += `<li><p><span>${event.repo.name}</span> - ${event.payload.description ?? "This repository doesn't have a description"}</p></li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class='events section'>
                                                <h2>Events</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    }/* ,

    renderNotFound() {
        this.userProfile.innerHTML = '<h3>User not found</h3>'
    } */
}

export { screen }