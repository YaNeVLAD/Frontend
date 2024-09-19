import { 
    changePresentationTitle, addSlide, deleteSlide, moveSlide, 
    addObject, deleteObject, moveObject, changeSlideBackground, 
    changeTextValue, changeTextFont, changeTextScale, changeTextColor, 
    selectSlide,
    selectObject
} from './functions';

import { Presentation, Slide, Image, TextArea, SolidColor } from './types';

// Минимальные данные
const minimalPresentation: Presentation = {
    title: '',
    slides: [],
    selection: {
        SelectedSlidesIds: [],
        SelectedObjectsIds: [],
    },
};

const minimalImage: Image = {
    id: 'object1',
    type: 'imageObj',
    pos: { x: 0, y: 0 },
    size: { width: 100, height: 100 },
    turnAngle: 0,
    src: { src: 'default.png', type: 'image' },
};

const minimalTextArea: TextArea = {
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

const minimalSlide: Slide = {
    id: 'slide1',
    objects: [],
    background: { color: 'white', type: 'solid' } as SolidColor,
};

// Тесты с минимальными данными

console.log("1. Изменение заголовка презентации");
const updatedTitleMinimalPresentation = changePresentationTitle('Minimal Presentation', minimalPresentation);
console.log(updatedTitleMinimalPresentation.title); // Должен вывести "Minimal Presentation"

console.log("2. Добавление нового слайда");
const presentationWithMinimalSlide = addSlide(minimalSlide, minimalPresentation);
console.log(presentationWithMinimalSlide.slides); // Должен содержать новый слайд

console.log("3. Выделение слайда");
minimalPresentation.selection = selectSlide(minimalPresentation.selection, 'slide1'); // Выбираем слайд
console.log(minimalPresentation.selection.SelectedSlidesIds); // Должен быть выбран слайд 'slide1'

console.log("4. Выделение объекта");
minimalPresentation.selection = selectObject(minimalPresentation.selection, 'slide1', 'object1'); // Выбираем объект
console.log(minimalPresentation.selection.SelectedObjectsIds); // Должен быть выбран объект 'object1'

console.log("5. Добавление объекта на слайд");
const presentationWithMinimalObject = addObject(minimalSlide, minimalImage, minimalPresentation.selection);
console.log(presentationWithMinimalObject.objects); // Должен содержать новый объект

console.log("6. Перемещение объекта");
const minimalMovedObject = moveObject(minimalSlide, minimalImage, 50, 50, minimalPresentation.selection);
console.log(minimalMovedObject); // Координаты объекта должны измениться

console.log("7. Изменение фона");
const minimalUpdatedSlideBackground = changeSlideBackground(minimalSlide, { color: 'gray', type: 'solid' }, minimalPresentation.selection);
console.log(minimalUpdatedSlideBackground); // Фон должен быть "gray"

console.log("8. Изменение текста");
minimalPresentation.selection = selectObject(minimalPresentation.selection, 'slide1', minimalTextArea.id); // Выбираем объект
const updatedMinimalText = changeTextValue(minimalTextArea, 'New Text', minimalPresentation.selection);
console.log(updatedMinimalText); // Текст должен измениться на "New Text"

console.log("9. Изменение шрифта текста");
const updatedMinimalFont = changeTextFont(minimalTextArea, 'Verdana', minimalPresentation.selection);
console.log(updatedMinimalFont); // Шрифт должен измениться на "Verdana"

console.log("10. Изменение цвета текста");
const updatedMinimalColor = changeTextColor(minimalTextArea, 'red', minimalPresentation.selection);
console.log(updatedMinimalColor); // Цвет текста должен измениться на "red"

console.log("11. Изменение размера теста");
const updatedMinimalTextSize = changeTextScale(minimalTextArea, 18, minimalPresentation.selection);
console.log(updatedMinimalTextSize); // Размер текста должен измениться на 18

console.log("12. Удаление объекта");
minimalPresentation.selection = selectObject(minimalPresentation.selection, 'slide1', minimalImage.id); // Выбираем объект
const minimalSlideAfterObjectDeletion = deleteObject(minimalSlide, minimalImage, minimalPresentation.selection);
console.log(minimalSlideAfterObjectDeletion); // Объект должен быть удалён

console.log("13. Удаление слайда");
const minimalPresentationAfterSlideDeletion = deleteSlide(minimalSlide, minimalPresentation);
console.log(minimalPresentationAfterSlideDeletion.slides); // Слайд должен быть удалён

console.log("14. Перемещение слайда");
minimalPresentation.selection.SelectedSlidesIds = [minimalSlide.id]; // Выделяем слайд
const minimalMovedSlide = moveSlide(minimalSlide, minimalSlide, minimalPresentation);
console.log(minimalMovedSlide); // Проверяем перемещение слайда