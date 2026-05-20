function showTab(tab) {
    document.querySelector('.reflected-xss').style.display = 'none';
    document.querySelector('.stored-xss').style.display = 'none';
    document.querySelector('.dom-based-xss').style.display = 'none';

    if (tab === 'reflected') {
        document.querySelector('.reflected-xss').style.display = 'block';
    }
    if (tab === 'stored') {
        document.querySelector('.stored-xss').style.display = 'block';
        storedAttack();
    }
    if (tab === 'dom') {
        document.querySelector('.dom-based-xss').style.display = 'block';
    }
}
function reflectedAttack() {
    document.getElementById('reflected-result').innerHTML = '⚠️ Cookie stolen ! session_id=abc123xyz';
}
function storedAttack() {
    document.getElementById('stored-result').innerHTML = '⚠️ Cookie stolen ! session_id=abc123xyz';
}
function domAttack() {
    document.getElementById('dom-result').innerHTML = '⚠️ Cookie stolen ! session_id=abc123xyz';
}