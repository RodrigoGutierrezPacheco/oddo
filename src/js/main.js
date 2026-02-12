async function loadComponent(containerId, componentPath) {
    const container = document.getElementById(containerId);
    if (!container) return;
    try {
        const response = await fetch(componentPath);
        if (response.ok) {
            container.innerHTML = await response.text();
        }
    } catch (err) {
        console.error('Error cargando componente:', componentPath, err);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadComponent('navbar-container', 'components/navbar.html');
    await loadComponent('hero-container', 'components/hero.html');
    await loadComponent('hero-content-container', 'components/hero-content.html');
    await loadComponent('manage-cards-container', 'components/manage-cards.html');

    console.log('Odoo App cargada correctamente');
});

