// What are you doing here 🤨

const birthDate = new Date('2010-06-30T00:00:00');

document.addEventListener('DOMContentLoaded', function() {
    updateAge();
    updateTime();
    setupInteractions();
    
    setInterval(updateAge, 1000);
    setInterval(updateTime, 1000);
});

function updateAge() {
    const now = new Date();
    const romaniaTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Bucharest"}));
    
    const romaniaBirth = new Date('2010-06-30T00:00:00');
    
    const diffMs = romaniaTime.getTime() - romaniaBirth.getTime();
    
    const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
    const remainingAfterYears = diffMs % (365.25 * 24 * 60 * 60 * 1000);
    
    const months = Math.floor(remainingAfterYears / (30.44 * 24 * 60 * 60 * 1000));
    const remainingAfterMonths = remainingAfterYears % (30.44 * 24 * 60 * 60 * 1000);
    
    const days = Math.floor(remainingAfterMonths / (24 * 60 * 60 * 1000));
    const remainingAfterDays = remainingAfterMonths % (24 * 60 * 60 * 1000);
    
    const hours = Math.floor(remainingAfterDays / (60 * 60 * 1000));
    const remainingAfterHours = remainingAfterDays % (60 * 60 * 1000);
    
    const minutes = Math.floor(remainingAfterHours / (60 * 1000));
    const seconds = Math.floor((remainingAfterHours % (60 * 1000)) / 1000);
    
    const ageData = [
        { value: years, label: years === 1 ? 'year' : 'years' },
        { value: months, label: months === 1 ? 'month' : 'months' },
        { value: days, label: days === 1 ? 'day' : 'days' },
        { value: hours, label: hours === 1 ? 'hour' : 'hours' },
        { value: minutes, label: minutes === 1 ? 'minute' : 'minutes' },
        { value: seconds, label: seconds === 1 ? 'second' : 'seconds' }
    ];
    
    const ageDisplay = document.getElementById('ageDisplay');
    ageDisplay.innerHTML = ageData.map(item => 
        `<div class="age-item">
            <span class="age-number">${item.value}</span>
            <span class="age-label">${item.label}</span>
        </div>`
    ).join('');
}

function updateTime() {
    const now = new Date();
    const romaniaTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Bucharest"}));
    
    const timeString = romaniaTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    });
    
    document.getElementById('currentTime').textContent = timeString;
}

function setupInteractions() {
    const techItems = document.querySelectorAll('.tech-item');
    const cards = document.querySelectorAll('.card');
    const artistCards = document.querySelectorAll('.artist-card');
    
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0px)';
        });
    });

    artistCards.forEach(card => {
        card.addEventListener('click', function() {
            const artistName = this.getAttribute('data-artist');
            console.log(`Clicked on ${artistName}`);
            
            this.style.transform = 'scale(0.95) translateY(-3px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
        });
    });
}