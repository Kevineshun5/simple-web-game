document.addEventListener('DOMContentLoaded', (event) => {
    const player = document.getElementById('player');
    const playerSpeed = 10;

    document.addEventListener('keydown', (e) => {
        const rect = player.getBoundingClientRect();
        switch (e.key) {
            case 'ArrowUp':
                player.style.top = `${Math.max(rect.top - playerSpeed, 0)}px`;
                break;
            case 'ArrowDown':
                player.style.top = `${Math.min(rect.bottom + playerSpeed - player.offsetHeight, window.innerHeight)}px`;
                break;
            case 'ArrowLeft':
                player.style.left = `${Math.max(rect.left - playerSpeed, 0)}px`;
                break;
            case 'ArrowRight':
                player.style.left = `${Math.min(rect.right + playerSpeed - player.offsetWidth, window.innerWidth)}px`;
                break;
        }
    });
});
