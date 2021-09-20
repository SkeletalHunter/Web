function lab5_1(){
    let arr = [];

    for (let i = 0; i < 1000; i++) {
        arr[i] = Math.floor(Math.random()*1000);
    }
    min(arr);
    max(arr);
    median(arr);
    quickSortedArr = quickSort(arr, 0, arr.length - 1);
    for (let i = 0; i < arr.length; i++) {
        console.log(quickSortedArr[i]);
    }
    alert(`Задание завершено (просмотрите консоль)`);
}
function lab5_2(){
    var tags = {};
    var elements = document.getElementsByTagName('*');
    var inputArr = Array.prototype.slice.call(elements);
    for (let i = 0; i < inputArr.length; i++) {
        if (tags[inputArr[i].tagName] == undefined) {
            tags[inputArr[i].tagName] = 1;
        }
        else {
            tags[inputArr[i].tagName] += 1;
        }
    }
    for (key in tags) {
        console.log(key + " - " + tags[key]);
    }
    alert(`Задание завершено (просмотрите консоль)`);
}
function min(arr) {
    let current_min = Number.MAX_VALUE;
    arr.forEach((element) => {
        if (element < current_min) {
            current_min = element
        }
    });
    console.log(`Минимум: ${current_min}`);
}

function max(arr) {
    let current_max = Number.MIN_VALUE;
    arr.forEach((element) => {
        if (element > current_max) {
            current_max = element;
        }
    });
    console.log(`Максимум: ${current_max}`);
}

function median(arr) {
    arr.sort();
    result = arr[Math.floor(arr.length / 2)];
    console.log(`Медиана: ${result}`);
}

function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }
    return i;
}

function changeImage() {
    let images = ['1.JPG', '2.JPG'];
    let element = document.getElementById('avatar');
    let path = element.src.split('/');
    let name = path[path.length - 1];
    let index = images.indexOf(name);
    index = (index == 0) ? 1 : 0;
    let root = 'img/';
    element.src = root + images[index];
}
