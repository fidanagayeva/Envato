let nameInput = document.getElementById('nmee');
let propertyCountInput = document.getElementById('propertyCount');
let imageUrlInput = document.getElementById('imageUrl');

let urlParams = new URLSearchParams(window.location.search);
let supplierId = urlParams.get('id');

async function getSupplier(id) {
    const response = await fetch(`http://localhost:3001/locations/${id}`);
    const supplier = await response.json();
    fillUpdateForm(supplier);
}

function fillUpdateForm(data) {
    nameInput.value = data.name;
    propertyCountInput.value = data.propertyCount;
    imageUrlInput.value = data.imageUrl;
}

async function updateSupplier(id) {
    let data = {
        "name": nameInput.value,
        "propertyCount": propertyCountInput.value,
        "imageUrl": imageUrlInput.value
    };

    const response = await fetch(`http://localhost:3001/locations/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Supplier updated successfully!');
        window.location.href = "index.html";
    } else {
        alert('Failed to update supplier.');
    }
}

document.addEventListener('', () => {
    getSupplier(supplierId);
});
