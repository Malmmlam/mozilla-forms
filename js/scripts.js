const maxInvite = document.querySelector('#max-invite');
const output = document.querySelector('.invite-output');

output.textContent = maxInvite.value;

maxInvite.addEventListener('input', function() {
    output.textContent = maxInvite.value;
});