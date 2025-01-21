main();

async function main() {
  const posts = await getPosts();
  const forYouMain = document.querySelector("#ForYou");

  console.log(posts);

  for (const post of posts) {
    const tags = post.tags.map((el) => {
      return `<button class="contents font-medium text-slate-400">#${el}</button>`;
    });
    forYouMain.innerHTML += `
    <article
        class="bg-slate-800 p-4 rounded-md flex flex-col space-y-4 w-full"
      >
        <header class="flex gap-4 items-center">
          <img class="rounded user-icon" src="${post.icon}" />
          <p class="font-bold">${post.user}</p>
        </header>

        <p>
          <i>${post.data}</i></br></br>
          ${post.description}
        </p>

        <div class="grid gap-4">
          ${tags.join(" ")}
        </div>

        <div class="flex flex-row w-full justify-between">
          <button
            class="border-solid border-2 border-slate-400 rounded-full p-2"
          >
            <span class="text-slate-400">
              <span class="font-bold text-white">${post.notes}</span>
              notas
            </span>
          </button>
          <div class="flex space-x-4 items-center">
            <img class="icon" src="assets/icons/share.png" />
            <img class="icon" src="assets/icons/chat.png" />
            <img class="icon" src="assets/icons/favorite.png" />
          </div>
        </div>
      </article>
    `;
  }
}

async function getPosts() {
  const res = await fetch("posts.json");
  const posts = await res.json();
  return posts;
}
