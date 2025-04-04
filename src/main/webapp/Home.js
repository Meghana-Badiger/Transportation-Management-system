/**
 * 
 */
document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.service-box').forEach(box => {
            box.addEventListener('click', function () {
                // Close all other boxes first
                document.querySelectorAll('.service-box').forEach(otherBox => {
                    if (otherBox !== this) {
                        otherBox.classList.remove('active');
                    }
                });

                // Toggle the clicked box
                this.classList.toggle('active');
            });
        });
    });
