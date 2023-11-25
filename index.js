// Butona tıklandığında çalışacak fonksiyon
function getNewGrid() {
    let newSize = prompt('Yan taraf başına kare sayısını girin (maksimum 100):');
    newSize = parseInt(newSize); // Kullanıcının girdisini tam sayıya dönüştür

    // Girişin geçerli olup olmadığını kontrol et
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Lütfen 1 ile 100 arasında geçerli bir sayı girin.');
        return;
    }

    createGrid(newSize); // Yeni ızgarayı oluşturmak için fonksiyonu çağır
}

// Yeni ızgarayı oluşturmak için fonksiyon
function createGrid(size) {
    const gridContainer = document.getElementById('gridContainer');
    // Mevcut ızgarayı temizle
    gridContainer.innerHTML = '';

    const totalWidth = 960; // Toplam genişlik piksel cinsinden
    const squareSize = totalWidth / size; // Her bir karenin genişliği

    // Yeni ızgarayı oluştur
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridItem);


        gridItem.addEventListener('mouseover', function(){
            gridItem.style.backgroundColor = 'grey'
        });
        
        gridItem.addEventListener('mouseout', function(){
            gridItem.style.backgroundColor = ''
        });

    }
}

// Başlangıçta 16x16'lık bir ızgara oluştur
createGrid(16);