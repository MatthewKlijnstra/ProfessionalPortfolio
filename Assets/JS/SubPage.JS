document.addEventListener('DOMContentLoaded', () => {
    const btnViewSource = document.getElementById('btn-view-source');
    const btnCloseSource = document.getElementById('btn-close-source');
    const sourcePanel = document.getElementById('source-panel');

    if (btnViewSource && sourcePanel) {
        btnViewSource.addEventListener('click', (e) => {
            e.preventDefault();
            sourcePanel.classList.add('open');
            // Prevent scrolling on main body when panel is open
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnCloseSource && sourcePanel) {
        btnCloseSource.addEventListener('click', () => {
            sourcePanel.classList.remove('open');
            // Restore scrolling
            document.body.style.overflow = '';
        });
    }
});
