const mdp = document.getElementById('pwd');
const toggle = document.getElementById('toggle');

function showHide()
{
    if (mdp.type === 'password')
    {
        mdp.setAttribute('type','text');
        toggle.classList.add('hide');
    }
    else
    {
        mdp.setAttribute('type','password');
        toggle.classList.remove('hide');
    }
}