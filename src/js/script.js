
let card = document.querySelector(".section-card");
async function getUser() {
  const response = await fetch("http://localhost:3001/User");
  const datas = await response.json();
  console.log(datas);

  let card = document.querySelector(".section-card");

  datas.map((property) => {
    card.innerHTML += `<div class="cards">
      <div class="card-header">
        <div class="status-buttons">
          <button class="status-btn featured">${property.featured}</button> 
          <button class="status-btn for-sale">${property.forSale}</button>
        </div>
        <div class="card-icons">
          <div class="icon"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
          <div class="icon"><i class="fa-regular fa-heart"></i></div>
          <div class="icon"><i class="fa-regular fa-eye"></i></div>
        </div>
      </div>
      <div class="card-image">
        <img src="${property.image}" alt="${property.title}"> 
        <button class="property-type">${property.type}</button>
      </div>
      <div class="card-body">
        <h1 class="card-title">${property.title}</h1>
        <p class="location">${property.location}</p>
        <div class="card-info">
          <div class="info-item">
            <i class="fa-solid fa-bed"></i>
            <span>${property.bedrooms}</span>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-bath"></i>
            <span>${property.bathrooms}</span>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-ruler"></i>
            <span>${property.area} SqFT</span>
          </div>
        </div>
        <div class="card-footer">
          <div class="agent-info">
            <img src="${property.agentImage}" alt="${property.agentName}">
            <span>${property.agentName}</span>
          </div>
          <div class="price">${property.price}</div>
        </div>
      </div>
      </div>
            

    `;
  });
}


getUser();


async function getLocations() {
  const response = await fetch("http://localhost:3001/locations");
  const datas = await response.json();
  console.log(datas);

  const card = document.querySelector(".location-cards");

  datas.map((property) => {
    card.innerHTML += `
       <div class="location-card">
      <img src="${property.imageUrl}" alt="">
      
      <div class="card-content">
      <button style="width: 70px;height: 25px;border-radius: 5px;font-size: 15px;border: 1px solid #ed2027;background-color: #ed2027;color: white;display: flex;align-content: center;justify-content: center; align-items: center;
    " onclick="window.location.href='update.html?id=${property.id}'">Edit</button>   
          <p class="property-count">${property.propertyCount}</p>
          <h2>${property.name}</h2>
      </div>
  </div>
            

    `;
  });
}

getLocations();




async function getAgents() {
  const response = await fetch("http://localhost:3001/agents");
  const datas = await response.json();
  console.log(datas);

  const card = document.querySelector(".agents-container");

  datas.map((property) => {
    card.innerHTML += `
      <div class="agent-card">
            <div class="agent-image">
                <img src="${property.image}" alt="Jack Halow">
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>|
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>|
                    <a href="#"><i class="fab fa-twitter"></i></a>|
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="agent-info">
                <div class="agent-details">
                    <p class="agent-name">${property.name}</p>
                    <p class="agent-position">${property.position}</p>
                </div>
                <button class="agent-contact">
                    <i class="fas fa-phone"></i>
                </button>
            </div>
        </div>
        
  
            

    `;
  });
}

getAgents();



async function getCards() {
  const response = await fetch("http://localhost:3001/cards");
  const datas = await response.json();
  console.log(datas);

  const card = document.querySelector(".card-sectionn");

  datas.map((property) => {
    card.innerHTML += `
      <div class="card-s">
      <div class="card-image">
          <img src="${property.image}" alt="Bedroom">
          <div class="card-date-button">${property.date}</div>
      </div>
      <div class="card-content">
          <div class="card-category">${property.category}</div>
          <div class="card-title">${property.title}</div>
          <div class="card-description">${property.description}</div>
      </div>
  </div>
  
            

    `;
  });
}

getCards();

