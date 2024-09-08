const container=document.querySelector('.Container')
const searchBox=document.querySelector('.search-box')
const gitProfileContainer=document.querySelector('.gitprofile-container')
const APIURL = "https://api.github.com/users/";




//Accepting the SearchValue:

searchBox.addEventListener('keyup',(event)=>{

  if(searchBox.value!=='' && event.key==='Enter'){

    searchUsers(`${searchBox.value}`)
    gitProfileContainer.style.display='flex'
  }

})

//Get the users data, fetch it and then add it dynamically to the gitProfileContainer



 
const searchUsers= async(username)=>{
  const response= await fetch(APIURL+username)
  const data= await response.json();

  const card= ` 
        <img src="${data.avatar_url}" alt="" />

        <div class="right-part">
          <h2>${data.login}</h2>

          <p class="Bio">${data.bio}</p>

          <div class="follow-repo">
            <p class="followers">Followers: <span>${data.followers}</span></p>
            <p class="following"> Following: <span>${data.following}</span></p>
            <p class="repo-count">Repos:<span>12 </span></p>
          </div>

           <div class="repos">

        </div>
         
        </div>
     `

      gitProfileContainer.innerHTML=card;

      getRepos(username)


}

const getRepos=async(username)=>{

  const repos=document.querySelector('.repos')

  const response= await fetch(APIURL+username+'/repos')
  const data= await response.json()

  repos.innerHTML='';
  data.forEach((item)=>{



    const newPara=document.createElement('p')
    newPara.textContent=item.name;
     repos.appendChild(newPara)

  })


}




















// const searchUsers= async(username)=>{

//     const response= await fetch(APIURL+username)
//     const data= await response.json();
    

//     const card=` <div class="gitprofile-container">
//         <img src="${data.avatar_url}" alt="" />

//         <div class="right-part">
//           <h2>${username}</h2>

//           <p class="Bio">${data.bio}</p>

//           <div class="follow-repo">
//             <p class="followers">${data.followers}</p>
//             <p class="following">${data.following}</p>
//             <p class="repo-count">Public Repos: ${data.public_repos}</p>  <!-- Correct repo count -->
//           </div>
//           <div class="repos">
// <p class="repo1">JavaScript Project</p>



//           </div>
//         </div>
//       </div>`

//       gitProfileContainer.innerHTML=card;
//       getRepos(username)


// }

// searchBox.addEventListener('keyup',(event)=>{

//   if(searchBox.value!=='' && event.key=='Enter'){

//     searchUsers(`${searchBox.value}`)
//   }

// })

// const getRepos= async (username)=>{

//     const response= await fetch(APIURL+username+"/repos")
//     const data= await response.json()

//     data.forEach((repo)=>{

//         const elment=document.createElement('p')
//         elment.innerText=repo.name;
//         document.querySelector('.repos').appendChild(elment)

//     })

// }





