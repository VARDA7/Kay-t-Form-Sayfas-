
const form = document.getElementById('registerForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const birthDate = document.getElementById('birthDate');
const age = document.getElementById('age');
const birthPlace = document.getElementById('birthPlace');
const courses = document.getElementById('courses');
const address = document.getElementById('address');
const summaryContent = document.getElementById('summaryContent'); 


var filter = email.matches(/[@gmail.com]/);
if (!filter.email(email.value)){
    alert("Lütfen geçerli formatta bir mail girin")
    email.focus
    return false;
}
function changeInputStyle(event) {
    console.log('Focus event triggered:', event.target.id);
    const input = event.target;
    input.classList.add('focused');
}

function anlikgosterim() {
    const hobbies = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Seçilmedi";
    const selectedCourses = Array.from(courses.selectedOptions).map(option => option.text);

    summaryContent.innerHTML = `
        <h3>Özet Bilgiler</h3>
        <p><strong>Ad Soyad:</strong> ${fullName.value.toUpperCase() || "Girilmedi"}</p>
        <p><strong>E-posta:</strong> ${email.value.trim() || "Girilmedi"}</p>
        <p><strong>Telefon:</strong> ${phone.value || "Girilmedi"}</p>
        <p><strong>Doğum Tarihi:</strong> ${birthDate.value || "Girilmedi"}</p>
        <p><strong>Yaş:</strong> ${age.value || "Girilmedi"}</p>
        <p><strong>Doğum Yeri:</strong> ${birthPlace.options[birthPlace.selectedIndex]?.text || "Seçilmedi"}</p>
        <p><strong>Cinsiyet:</strong> ${gender}</p>
        <p><strong>Hobiler:</strong> ${hobbies.join(', ') || "Seçilmedi"}</p>
        <p><strong>Seçilen Dersler:</strong> ${selectedCourses.join(', ') || "Seçilmedi"}</p>
        <p><strong>Adres:</strong> ${address.value || "Girilmedi"}</p>
    `;
}

function handleSubmit(event) {
    console.log('Form gönderildi');
    event.preventDefault();
    form.reset();
    summaryContent.innerHTML = '';
}



document.querySelectorAll('input, select, textarea').forEach(element => {
    
    
    element.addEventListener('input', anlikgosterim);
    element.addEventListener('change', anlikgosterim);
    

    element.addEventListener('focus', changeInputStyle);
    element.addEventListener('blur', (event) => {
        event.target.classList.remove('focused');
    });
});

form.addEventListener('submit', handleSubmit); 


function myfunction() {
    const buyukharf = document.getElementById('fullName');
    buyukharf.value = buyukharf.value.toUpperCase();
}


// uyarı eventi 
window.addEventListener('beforeunload', function(event) {        
    
    event.returnValue = 'Sayfadan ayrılmak istediğinize emin misiniz?';      
});






