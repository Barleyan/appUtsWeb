const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessageElement = document.getElementById('error-message');

const handleLogin = (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!validateEmail(email) || !validatePassword(password)) {
        errorMessageElement.textContent = 'Email atau NIM salah';
        return;
    }

    const mahasiswa = getMahasiswaByEmail(email);
    if (mahasiswa && mahasiswa.nim === password) {
        window.location.href = 'order.html';
        alert('Anda Berhasil Login!');
    } else {
        errorMessageElement.textContent = 'Email atau Password salah';
    }
};

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

document.addEventListener('submit', handleLogin);

function getMahasiswaByEmail(email) {
    const mahasiswa = {
        email: 'iyan.manisrejo@gmail.com',
        nim: '233307068',
    };

    if (email === mahasiswa.email) {
        return mahasiswa;
    }

    return null;
}

const itemElements = document.querySelectorAll('.item-list input[type="checkbox"]');
const totalPriceElement = document.getElementById('total-price');

function updateTotalPrice() {
  let total = 0;
  for (const itemElement of itemElements) {
    if (itemElement.checked) {
      total += parseInt(itemElement.getAttribute('price'));
    }
  }
  totalPriceElement.textContent = `Rp ${total.toLocaleString()}`;
}

for (const itemElement of itemElements) {
  itemElement.addEventListener('change', updateTotalPrice);
}

updateTotalPrice();