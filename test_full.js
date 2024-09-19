"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
// Полные данные
var fullPresentation = {
    title: 'Project Presentation',
    slides: [
        { id: 'slide1', objects: [], background: { color: 'red', type: 'solid' } },
        { id: 'slide2', objects: [], background: { color: 'blue', type: 'gradient' } },
        { id: 'slide3', objects: [], background: { src: 'image1.png', type: 'image' } },
    ],
    selection: {
        SelectedSlidesIds: ['slide1'],
        SelectedObjectsIds: ['object1'],
    },
};
var fullImage = {
    id: 'object1',
    type: 'imageObj',
    pos: { x: 50, y: 50 },
    size: { width: 200, height: 200 },
    turnAngle: 45,
    src: { src: 'image1.png', type: 'image' },
};
var fullTextArea = {
    id: 'object2',
    type: 'textObj',
    pos: { x: 100, y: 150 },
    size: { width: 300, height: 100 },
    turnAngle: 0,
    value: 'Hello World',
    font: 'Arial',
    color: 'black',
    textSize: 16,
};
// Обновленные тесты
console.log("1. Изменение заголовка презентации");
var updatedTitlePresentation = (0, functions_1.changePresentationTitle)('Updated Project Presentation', fullPresentation);
console.log(updatedTitlePresentation.title); // Должен вывести новый заголовок
console.log("2. Добавление нового слайда");
var newSlide = {
    id: 'slide4',
    objects: [],
    background: { color: 'yellow', type: 'solid' },
};
var presentationWithNewSlide = (0, functions_1.addSlide)(newSlide, fullPresentation);
console.log(presentationWithNewSlide.slides); // Должен содержать новый слайд
console.log("3. Выделение слайда");
fullPresentation.selection = (0, functions_1.selectSlide)(fullPresentation.selection, fullPresentation.slides[0].id);
console.log(fullPresentation.selection.SelectedSlidesIds); // Выделен слайд 'slide1'
console.log("4. Выделение объекта");
fullPresentation.selection = (0, functions_1.selectObject)(fullPresentation.selection, fullPresentation.slides[0].id, fullImage.id);
console.log(fullPresentation.selection.SelectedObjectsIds); // Выделен объект 'object1'
console.log("5. Добавление объекта на слайд");
var presentationWithNewObject = (0, functions_1.addObject)(fullPresentation.slides[0], fullImage, fullPresentation.selection);
console.log(presentationWithNewObject.objects); // Должен содержать новый объект
console.log("6. Перемещение объекта");
fullPresentation.selection = (0, functions_1.selectObject)(fullPresentation.selection, fullPresentation.slides[0].id, fullImage.id);
var fullMovedObject = (0, functions_1.moveObject)(fullPresentation.slides[0], fullImage, 300, 400, fullPresentation.selection);
console.log(fullMovedObject);
console.log("7. Изменение фона");
var fullUpdatedSlideBackground = (0, functions_1.changeSlideBackground)(fullPresentation.slides[0], { color: 'green', type: 'solid' }, fullPresentation.selection);
console.log(fullUpdatedSlideBackground);
console.log("8. Изменение текста");
fullPresentation.selection = (0, functions_1.selectObject)(fullPresentation.selection, fullPresentation.slides[0].id, fullTextArea.id);
var updatedFullText = (0, functions_1.changeTextValue)(fullTextArea, 'Updated Text', fullPresentation.selection);
console.log(updatedFullText);
console.log("9. Изменение шрифта текста");
var updatedFullFont = (0, functions_1.changeTextFont)(fullTextArea, 'Times New Roman', fullPresentation.selection);
console.log(updatedFullFont);
console.log("10. Изменение цвета текста");
var updatedFullColor = (0, functions_1.changeTextColor)(fullTextArea, 'blue', fullPresentation.selection);
console.log(updatedFullColor);
console.log("11. Изменение размера теста");
var updatedFullTextSize = (0, functions_1.changeTextScale)(fullTextArea, 32, fullPresentation.selection);
console.log(updatedFullTextSize);
console.log("12. Удаление объекта");
fullPresentation.selection = (0, functions_1.selectObject)(fullPresentation.selection, fullPresentation.slides[0].id, fullImage.id);
var fullSlideAfterObjectDeletion = (0, functions_1.deleteObject)(fullPresentation.slides[0], fullImage, fullPresentation.selection);
console.log(fullSlideAfterObjectDeletion);
console.log("13. Удаление слайда");
var fullPresentationAfterSlideDeletion = (0, functions_1.deleteSlide)(fullPresentation.slides[0], fullPresentation);
console.log(fullPresentationAfterSlideDeletion);
console.log("14. Перемещение слайда");
fullPresentation.selection.SelectedSlidesIds = [fullPresentation.slides[0].id]; // Выделяем слайд
var fullMovedSlide = (0, functions_1.moveSlide)(fullPresentation.slides[0], fullPresentation.slides[1], fullPresentation);
console.log(fullMovedSlide);
