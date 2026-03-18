let currentStep = 1;
const totalSteps = 7;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const progressBar = document.getElementById('progressBar');
const stepIndicator = document.getElementById('stepIndicator');
const salesForm = document.getElementById('salesForm');

nextBtn.addEventListener('click', () => {
    // Aquí podrías agregar validaciones por paso si quisieras
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
    currentStep++;
    updateUI();
});

prevBtn.addEventListener('click', () => {
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
    currentStep--;
    updateUI();
});

function updateUI() {
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    
    const progress = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
    stepIndicator.innerText = `Paso ${currentStep} de ${totalSteps}`;

    prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
    
    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

salesForm.addEventListener('submit', () => {
    submitBtn.innerText = "Enviando a Ingeniería...";
    submitBtn.disabled = true;
});