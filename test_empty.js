"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
// Минимальные данные
var minimalPresentation = {
    title: '',
    slides: [],
    selection: {
        SelectedSlidesIds: [],
        SelectedObjectsIds: [],
    },
};
var minimalImage = {
    id: 'object1',
    type: 'imageObj',
    pos: { x: 0, y: 0 },
    size: { width: 100, height: 100 },
    turnAngle: 0,
    src: { src: 'default.png', type: 'image' },
};
var minimalTextArea = {
    id: 'object2',
    type: 'textObj',
    pos: { x: 0, y: 0 },
    size: { width: 100, height: 50 },
    turnAngle: 0,
    value: '',
    font: 'Arial',
    color: 'black',
    textSize: 12,
};
var minimalSlide = {
    id: 'slide1',
    objects: [],
    background: { color: 'white', type: 'solid' },
};
// Тесты с минимальными данными
console.log("1. Изменение заголовка презентации");
var updatedTitleMinimalPresentation = (0, functions_1.changePresentationTitle)('Minimal Presentation', minimalPresentation);
console.log(updatedTitleMinimalPresentation.title); // Должен вывести "Minimal Presentation"
console.log("2. Добавление нового слайда");
var presentationWithMinimalSlide = (0, functions_1.addSlide)(minimalSlide, minimalPresentation);
console.log(presentationWithMinimalSlide.slides); // Должен содержать новый слайд
console.log("3. Выделение слайда");
minimalPresentation.selection = (0, functions_1.selectSlide)(minimalPresentation.selection, 'slide1'); // Выбираем слайд
console.log(minimalPresentation.selection.SelectedSlidesIds); // Должен быть выбран слайд 'slide1'
console.log("4. Выделение объекта");
minimalPresentation.selection = (0, functions_1.selectObject)(minimalPresentation.selection, 'slide1', 'object1'); // Выбираем объект
console.log(minimalPresentation.selection.SelectedObjectsIds); // Должен быть выбран объект 'object1'
console.log("5. Добавление объекта на слайд");
var presentationWithMinimalObject = (0, functions_1.addObject)(minimalSlide, minimalImage, minimalPresentation.selection);
console.log(presentationWithMinimalObject.objects); // Должен содержать новый объект
console.log("6. Перемещение объекта");
var minimalMovedObject = (0, functions_1.moveObject)(minimalSlide, minimalImage, 50, 50, minimalPresentation.selection);
console.log(minimalMovedObject); // Координаты объекта должны измениться
console.log("7. Изменение фона");
var minimalUpdatedSlideBackground = (0, functions_1.changeSlideBackground)(minimalSlide, { color: 'gray', type: 'solid' }, minimalPresentation.selection);
console.log(minimalUpdatedSlideBackground); // Фон должен быть "gray"
console.log("8. Изменение текста");
minimalPresentation.selection = (0, functions_1.selectObject)(minimalPresentation.selection, 'slide1', minimalTextArea.id); // Выбираем объект
var updatedMinimalText = (0, functions_1.changeTextValue)(minimalTextArea, 'New Text', minimalPresentation.selection);
console.log(updatedMinimalText); // Текст должен измениться на "New Text"
console.log("9. Изменение шрифта текста");
var updatedMinimalFont = (0, functions_1.changeTextFont)(minimalTextArea, 'Verdana', minimalPresentation.selection);
console.log(updatedMinimalFont); // Шрифт должен измениться на "Verdana"
console.log("10. Изменение цвета текста");
var updatedMinimalColor = (0, functions_1.changeTextColor)(minimalTextArea, 'red', minimalPresentation.selection);
console.log(updatedMinimalColor); // Цвет текста должен измениться на "red"
console.log("11. Изменение размера теста");
var updatedMinimalTextSize = (0, functions_1.changeTextScale)(minimalTextArea, 18, minimalPresentation.selection);
console.log(updatedMinimalTextSize); // Размер текста должен измениться на 18
console.log("12. Удаление объекта");
minimalPresentation.selection = (0, functions_1.selectObject)(minimalPresentation.selection, 'slide1', minimalImage.id); // Выбираем объект
var minimalSlideAfterObjectDeletion = (0, functions_1.deleteObject)(minimalSlide, minimalImage, minimalPresentation.selection);
console.log(minimalSlideAfterObjectDeletion); // Объект должен быть удалён
console.log("13. Удаление слайда");
var minimalPresentationAfterSlideDeletion = (0, functions_1.deleteSlide)(minimalSlide, minimalPresentation);
console.log(minimalPresentationAfterSlideDeletion.slides); // Слайд должен быть удалён
console.log("14. Перемещение слайда");
minimalPresentation.selection.SelectedSlidesIds = [minimalSlide.id]; // Выделяем слайд
var minimalMovedSlide = (0, functions_1.moveSlide)(minimalSlide, minimalSlide, minimalPresentation);
console.log(minimalMovedSlide); // Проверяем перемещение слайда
