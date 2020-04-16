// Initial site setup
// Hiding the selected component LIs
document.getElementById('comp-1').style.display = "none";
document.getElementById('comp-2').style.display = "none";
document.getElementById('comp-3').style.display = "none";
document.getElementById('comp-4').style.display = "none";
document.getElementById('comp-5').style.display = "none";
document.getElementById('comp-6').style.display = "none";
document.getElementById('comp-7').style.display = "none";
document.getElementById('comp-8').style.display = "none";
document.getElementById('comp-9').style.display = "none";
document.getElementById('comp-10').style.display = "none";

// Getting the processor socket type
let processorSocket = '';

// Hide all the motherboards
document.getElementById('LGA1151').style.display = "none";
document.getElementById('LGA2066').style.display = "none";
document.getElementById('AM4').style.display = "none";
document.getElementById('sTRX4').style.display = "none";

// Event when DROPDOWNS are CLICKed
const dropdowns = document.querySelectorAll("#dropdown-click");
for (const dropdown of dropdowns) {
  dropdown.addEventListener('click', changeDropdownIcon);
}

// Event when REMOVE button is CLICKed
const removals = document.querySelectorAll('#remove-component');
for (const remove of removals) {
  remove.addEventListener('click', removeThisComponent);
}

// Event when CLEAR-ALL button is CLICKed
const removal = document.querySelector('#clear-all-selections').addEventListener('click', clearAllSelections);

// PROCESSOR-SELECT Button CLICK event
const processorSelections = document.querySelectorAll("#processor-select-button");
for (const select of processorSelections) {
  select.addEventListener('click', addProcessorToBuild);
}

// MOTHERBOARD-SELECT Button CLICK event
const motherboardSelections = document.querySelectorAll("#motherboard-select-button");
for (const select of motherboardSelections) {
  select.addEventListener('click', addMotherboardToBuild);
}

// RAM-SELECT Button CLICK event
const ramSelections = document.querySelectorAll("#ram-select-button");
for (const select of ramSelections) {
  select.addEventListener('click', addRamToBuild);
}

// GRAPHICS-SELECT Button CLICK event
const graphicsSelections = document.querySelectorAll("#graphics-select-button");
for (const select of graphicsSelections) {
  select.addEventListener('click', addGraphicsToBuild);
}

// PSU-SELECT Button CLICK event
const psuSelections = document.querySelectorAll("#psu-select-button");
for (const select of psuSelections) {
  select.addEventListener('click', addPsuToBuild);
}

// CABINET-SELECT Button CLICK event
const cabinetSelections = document.querySelectorAll("#cabinet-select-button");
for (const select of cabinetSelections) {
  select.addEventListener('click', addCabinetToBuild);
}

// COOLER-SELECT Button CLICK event
const coolerSelections = document.querySelectorAll("#cooler-select-button");
for (const select of coolerSelections) {
  select.addEventListener('click', addCoolerToBuild);
}

// STORAGE-SELECT Button CLICK event
const storageSelections = document.querySelectorAll("#storage-select-button");
for (const select of storageSelections) {
  select.addEventListener('click', addStorageToBuild);
}

// SECONDARY-STORAGE-SELECT Button CLICK event
const secondarySelections = document.querySelectorAll("#secondary-storage-select-button");
for (const select of secondarySelections) {
  select.addEventListener('click', addSecondaryToBuild);
}

// MONITOR-SELECT Button CLICK event
const monitorSelections = document.querySelectorAll("#monitor-select-button");
for (const select of monitorSelections) {
  select.addEventListener('click', addMonitorToBuild);
}

// Dropdown Toggle function
function changeDropdownIcon(e) {
  // console.log(e.target.parentElement.getAttribute('aria-expanded'));
  if (e.target.parentElement.getAttribute('aria-expanded') === 'false') {
    e.target.className = 'fas fa-times-circle';
  } else {
    e.target.className = 'fas fa-plus-circle';
  }
  e.preventDefault();
}

// Remove component function
function removeThisComponent(e) {
  if (e.target.parentElement.nextElementSibling.firstElementChild.id === 'processor-selected') {
    
    // Re-evaluating the total price
    let price = e.target.parentElement.nextElementSibling.firstElementChild.childNodes[3].firstElementChild.textContent;

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total -= parseInt(price);
    document.getElementById('total-price').textContent = total;

    e.target.parentElement.nextElementSibling.firstElementChild.innerHTML = '';

    e.target.parentElement.parentElement.style.display = "none";

    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
        Removed
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 1000);

    // Reseting motherboard tab to original state
    document.getElementById('mobo-warning').style.display = "block";
    document.getElementById(processorSocket).style.display = "none";

  } else {
    // Re-evaluating the total price
    let price = e.target.parentElement.nextElementSibling.firstElementChild.childNodes[3].firstElementChild.textContent;

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total -= parseInt(price);
    document.getElementById('total-price').textContent = total;

    e.target.parentElement.nextElementSibling.firstElementChild.innerHTML = '';

    e.target.parentElement.parentElement.style.display = "none";

    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
        Removed
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 1000);

  }

  e.preventDefault();
}

// Clear all selections function
function clearAllSelections(e) {
  document.getElementById('total-price').textContent = 0;

  document.getElementById('processor-selected').innerHTML = '';
  document.getElementById('motherboard-selected').innerHTML = '';
  document.getElementById('ram-selected').innerHTML = '';
  document.getElementById('graphics-selected').innerHTML = '';
  document.getElementById('psu-selected').innerHTML = '';
  document.getElementById('cabinet-selected').innerHTML = '';
  document.getElementById('cooler-selected').innerHTML = '';
  document.getElementById('storage-selected').innerHTML = '';
  document.getElementById('secondary-storage-selected').innerHTML = '';
  document.getElementById('monitor-selected').innerHTML = '';

  document.getElementById('comp-1').style.display = "none";
  document.getElementById('comp-2').style.display = "none";
  document.getElementById('comp-3').style.display = "none";
  document.getElementById('comp-4').style.display = "none";
  document.getElementById('comp-5').style.display = "none";
  document.getElementById('comp-6').style.display = "none";
  document.getElementById('comp-7').style.display = "none";
  document.getElementById('comp-8').style.display = "none";
  document.getElementById('comp-9').style.display = "none";
  document.getElementById('comp-10').style.display = "none";

  e.preventDefault();
}

// Processor selection function
function addProcessorToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML;
  processorSocket = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

  if (document.getElementById('processor-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Processor already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0 ml-3';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0 ml-3';
    }, 1000);

    // Create LI
    const div = document.getElementById('processor-selected');
    // Inner Html
    div.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Processor: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-1').style.display = "block";

    document.getElementById('mobo-warning').style.display = "none";
    document.getElementById(processorSocket).style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }

  e.preventDefault();
}

// Motherboard selection function
function addMotherboardToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('motherboard-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Motherboard already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('motherboard-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Motherboard: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-2').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Ram selection function
function addRamToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('ram-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected RAM already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('ram-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">RAM: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-3').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Graphics selection function
function addGraphicsToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('graphics-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Graphic Card already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('graphics-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Graphic Card: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-4').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// PSU selection function
function addPsuToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('psu-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a PSU already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('psu-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Power Supply: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-5').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Cabinet selection function
function addCabinetToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('cabinet-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Case already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('cabinet-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">CPU Case: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-6').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Cooler selection function
function addCoolerToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('cooler-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Cooler already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('cooler-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">CPU Cooler: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-7').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Storage selection function
function addStorageToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('storage-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Storage already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('storage-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Storage: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-8').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Secondary Storage selection function
function addSecondaryToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('secondary-storage-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Secondary Storage already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('secondary-storage-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Secondary Storage: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-9').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}

// Monitor selection function
function addMonitorToBuild(e) {
  const itemName = e.target.parentElement.parentElement.firstElementChild.innerHTML;
  const itemPrice = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;

  if (document.getElementById('monitor-selected').innerHTML !== '') {
    
    // Create alert
    const alert = document.createElement('div');
    // Add classes
    alert.className = 'row lead font-weight-bold';
    alert.id = 'removable';
    // Inner html
    alert.innerHTML = `
      <div class="col-md-6 mx-auto alert alert-info mb-0 mt-2 p-1" role="alert">
      You have selected a Monitor already !!
      </div>
    `;

    document.getElementById('nav-secondary').appendChild(alert);

    setTimeout(() => {
      document.getElementById('removable').remove();
    }, 3000);

  } else {
    e.target.textContent = 'ADDED!';
    e.target.className = 'btn btn-sm btn-light rounded-0';

    setTimeout(() => {
      e.target.textContent = 'SELECT';
      e.target.className = 'btn btn-sm btn-outline-light rounded-0';
    }, 1000);

    // Create LI
    const li = document.getElementById('monitor-selected');
    // Inner Html
    li.innerHTML = `
      <p class="lead mb-0 ml-2">
        <span class="font-weight-bold">Monitor: </span>
        ${itemName}
      </p>
      <p class="lead mb-0">₹<span>${itemPrice}</span></p>
    `;

    document.getElementById('comp-10').style.display = "block";

    let total = document.getElementById('total-price').textContent;
    total = parseInt(total);
    total += parseInt(itemPrice);
    document.getElementById('total-price').textContent = total;
  }
  e.preventDefault();
}